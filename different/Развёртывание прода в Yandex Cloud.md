# Развёртывание в Yandex Cloud зоопарка

В этой инструкции приводится набор шагов для ручного создания prod-ресурсов проекта в Yandex-облаке.

Во всех ресурсах добавлйте следующие метки:
project: pelican
environment: prod

## Создание и настройка сети
>Примечание: Можно использовать default сеть, тогда пропускаем и везде делаее вместо pelican-prod-network настраиваем default)

Virtual Private Cloud -> Создать сеть -> 
Имя: pelican-prod-network
Дополнительно: Оставить галочку Создать подсети

Кликаем Создать сеть

### Настройка сети
Virtual Private Cloud -> pelican-prod-network -> Группы безопасности -> 
Имя: pelican-prod-security-group

#### Входящий трафик
Кликаем Добавить правило

1) Описание: HTTP
Диапазон портов: 80
Протокол: TCP
Источник: CIDR
CIDR блоки: 0.0.0.0/0

2) Описание: HTTPS
Диапазон портов: 443
Протокол: TCP
Источник: CIDR
CIDR блоки: 0.0.0.0/0

3) Описание: SSH
Диапазон портов: 22
Протокол: Любой
Источник: CIDR
CIDR блоки: <ПУБЛИЧНЫЙ_СТАТИЧЕСКИЙ_IP_АДРЕС_АДМИНОВ>/32

#### Исходящий трафик 

1) Описание: Интернет
Диапазон портов: 0-65535
Протокол: Любой
Источник: CIDR
CIDR блоки: 0.0.0.0/0

Кликаем Создать

## Выделение статического IP адреса
Virtual Private Cloud -> IP-адреса -> Зарезервировать адрес

Зона доступности
ru-central1-a/b/c (любую из них, у IP адреса, виртуальной машины и подсети должна быть одна зона доступности)

Дополнительно:
Галочку на Защита от DDoS-атак
Галочку на Защита от удаления

Зарезервировать

## Настройка CDN

### Создание сертификата

Certificate Manager -> Добавить сертификат -> Сертификат от Let's Encrypt

Имя
pelican-prod-cdn-cert

Защита от удаления
Вкл

Домены
cdn.chelzoo.ru

Тип проверки
DNS

В регистраторе домена записываем что-то подобное:

CNAME _acme-challenge.cdn.chelzoo.ru. fpqh1sp6kdin6dhseapm.cm.yandexcloud.net.

### Создание CDN ресурса

Cloud CDN -> Подключиться к провайдеру (если ещё не подключено) -> Создать ресурс

Доступ к контенту 
Да

Запрос контента
Из одного источника

Тип источника
Сервер

Доменное имя источника
chelzoo.ru

Доменное имя
cdn.chelzoo.ru

Протокол для источников
HTTPS

Переадресация клиентов
с HTTP на HTTPS

Тип сертификата
Сертификат из Certificate Manager

Сертификат
pelican-prod-cdn-cert

>Примечание: если сертификат ещё не провалидирован создавать с типом Не использовать и с выключенной переадресацией клиентов и задавать позже отдельно, после валидации. 

Заголовок Host
Свое значение

Значение заголовка
chelzoo.ru

Перенаправление запросов
Выкл

Доступ по защищённому токену
Выкл

Доступ по IP адресам
Выкл

>ВАЖНО!!!: После создания CDN ресурса нужно зайти в Кеширование и Дополнительно настроить не игнорировать Query-параметры

В регистраторе домена записываем что-то подобное:

CNAME cdn.chelzoo.ru cl-msdf1011bf.edgecdn.ru

## Cоздаём виртуальную машину

Cloud Compute -> Создать виртуальную машину

Операционная система
Ubuntu 24.04

Зона доступности
ru-central1-a/b/c (любую из них, у IP адреса, виртуальной машины и подсети должна быть одна зона доступности)

Вычислительные ресурсы
Своя конфигурация
Intel Cascade Lake
vCPU: 2
Гарантированная доля vCPU: 100%

RAM 4 ГБ

Подсеть -> pelican-prod-network-ru-central1-a/b/c

Публичный IP-адрес
Из списка тот, который создали ранее (скорее всего он в списке один)

Группы безопасности
pelican-prod-security-group

Логин
<ПОД_КОТОРЫМ_БУДУТ_ЛОГИНИТЬСЯ_АДМИНЫ>

Имя ВМ
pelican-prod-vm

Дополнительно
Агент сбора метрик Установить
Сервисный аккаунт -> Создать аккаунт
Имя pelican-prod-vm-service-account
Роли в каталоге: monitoring.editor

SSH-ключ -> Добавить ключ -> Сгенерировать ключ
Имя: pelican-prod-vm-ssh-key

## Создание бакетов в S3

### Бакет для медиа
console.yandex.cloud -> Object Storage -> Создать бакет

Имя
pelican-prod-media

Макс. размер 
Без ограничения

Доступ ограниченный на все кроме
Доступ на чтение объектов Публичный

Класс хранилища Стандартное

Создать бакет

### Бакет для бекапов
console.yandex.cloud -> Object Storage -> Создать бакет

Имя
pelican-prod-backups

Макс. размер 
200 Гб (Кажется что это с запасом, возможно стоит поставить меньше)

Доступ ограниченный на все

Класс хранилища 
Ледяное
Потому что пишем раз в день и по сути не читаем, может раз в месяц.

Создать бакет

## Создание сервисного аккаунта и настройка прав

### Создание сервисного аккаунта
В Yandex Cloud переходим в Indentity And Access Memory -> Создать сервис аккаунт

Имя 
pelican-prod-media-bucket-service-account

В Yandex Cloud переходим в Indentity And Access Memory -> Создать сервис аккаунт

Имя 
pelican-prod-backups-bucket-service-account

### Настройка доступа для pelican-prod-media

#### Права доступа
Заходим в media бакет -> Безопасность -> Права доступа -> Назначить роли

Сервисные аккаунты
pelican-prod-media-bucket-service-account

Добавить роль
editor

Сервисные аккаунты
pelican-prod-backups-bucket-service-account

Добавить роль
viewer

#### Политика доступа
Заходим в media бакет -> Безопасность -> Политика доступа -> Настроить доступ

##### Правило 1

Идентификатор правила 
pelican-prod-media-bucket-write-and-delete-policy

Результат 
Разрешить

Принцип выбора 
Включить пользователей

Выбрать пользователей
pelican-prod-media-bucket-service-account

Действие
PutObject, DeleteObject. (GetObject не разрешаем, потому что CMS загружает объекты с правом READ, т.е. все по дефолту могут их читать)

Для доступа только с определенных айпи:
Добавить условие

Ключ
sourceip

Оператор ipAddress

Значение
<СОЗДАННЫЙ_ПУБЛИЧНЫЙ_СТАТИЧЕСКИЙ_IP_АДРЕС_САЙТА>

##### Правило 2

Идентификатор правила 
pelican-prod-media-bucket-list-policy

Результат 
Разрешить

Принцип выбора 
Включить пользователей

Выбрать пользователей
pelican-prod-backups-bucket-service-account

Действие
ListBucket (Для s3-backupper)

Ресурс
pelican-prod-media/*
pelican-prod-media (Чтобы s3-backupper мог просмотреть список файлов)

Для доступа только с определенных айпи:
Добавить условие

Ключ
sourceip

Оператор ipAddress

Значение
<СОЗДАННЫЙ_ПУБЛИЧНЫЙ_СТАТИЧЕСКИЙ_IP_АДРЕС_САЙТА>

##### Правило 3
Второе правило нужно для доступа к бакету из консоли Yandex. Создается кнопкой "Добавить правило для доступа из консоли"

СОХРАНИТЬ!

----

### Настройка доступа для pelican-prod-backups

#### Права доступа
Заходим в бакет -> Безопасность -> Политика доступа -> Назначить роли

Сервисные аккаунты
pelican-prod-backups-bucket-service-account

Добавить роль
editor

#### Политика доступа
Заходим в бакет -> Безопасность -> Политика доступа -> Настроить доступ

##### Правило 1

Идентификатор правила 
pelican-prod-backups-bucket-write-policy

Результат 
Разрешить

Принцип выбора 
Включить пользователей

Выбрать пользователей
pelican-prod-backups-bucket-service-account

Действие
PutObject

Ресурс
pelican-prod-backups/*

Для доступа только с определенных айпи:
Добавить условие

Ключ
sourceip

Оператор ipAddress

Значения
<СОЗДАННЫЙ_ПУБЛИЧНЫЙ_СТАТИЧЕСКИЙ_IP_АДРЕС_САЙТА>

##### Правило 2
Второе правило нужно для доступа к бакету из консоли Yandex. Создается кнопкой "Добавить правило для доступа из консоли"

### Подключимся к VM по SSH

Установим и откроем [MobaXterm](https://mobaxterm.mobatek.net/) - отличный инструмент для работы с SSH и не только.

На странице созданной VM должен быть доступен её Внешний IP - это наш Remote host

В Advanced SSH Settings указываем Use private key и выбираем файл приватного ключа.

После подключения всегда сначала выполняем команду
```cli
sudo bash
```

#### Установим Docker

Создадим файл через `nano install_docker.sh` с содержимым (Скрипт созданный из встроенного терминала почему-то не работает)

```bash
#! /bin/bash
# from https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

вызовем этот скрипт командой 
```cli
bash ./install_docker.sh
```

проверим работоспособность docker командой
```cli
docker --help
```

установим MTU для правильной работы сети при включенной защите от DDoS
https://yandex.cloud/ru/docs/vpc/operations/adjust-mtu-ddos-protection
https://www.civo.com/learn/fixing-networking-for-docker
в kind не надо устанавливать, он прочтёт из eth0 (должен бы тут обсуждали https://github.com/kubernetes-sigs/kind/issues/1468 и тут решили как сделают https://github.com/kubernetes-sigs/kind/pull/1690)

```cli
netplan set ethernets.eth0.mtu=1450 && sudo netplan apply
```

```cli
nano /lib/systemd/system/docker.service
```

меняем
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
на
ExecStart=/usr/bin/dockerd --mtu 1450 -H fd:// --containerd=/run/containerd/containerd.sock

перезапуск докер
```cli
systemctl daemon-reload
service docker restart
```

Установим Dev Containers

Установим nvm, чтобы установить npm, чтобы запустить devcontainer

Создадим файл через `nano install_nvm.sh` с содержимым

```bash
#! /bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

вызовем этот скрипт командой 
```cli
bash ./install_nvm.sh
```

>ВАЖНО!: Переподключиться по SSH, чтобы nvm стал доступeн в терминале.
```cli
sudo bash
```

Устанавливаем последнюю стабильную ноду
```cli
nvm install node
```

Устанавливаем devcontainers
```cli
npm install -g @devcontainers/cli
```

## ENV VM
Генерируем ключи для CMS
https://github.com/strapi/strapi/issues/15206
openssl rand -base64 32

Генерируем ключи для сервисного аккаунта
Identity and Access Management -> Сервисные аккаунты -> выбираем нужный сервисный аккаунт -> Создать новый ключ -> Создать статический ключ доступа

git clone --depth 1 https://github.com/TourmalineCore/pelican-prod-env.git

нужно настроить так, чтобы изменения режима файлов в следующей команде не показывалось как то, что  все файлы изменены
например diff для одного из таких файлов был
old mode 100644
new mode 100755
иначе будет сложно обновить репозиторий вручную, если что-то пошло не так и надо заново обновить, например, синхронайзер

git config core.filemode false

chmod -R 0777 ./pelican-prod-env

cd pelican-prod-env

nano /.devcontainer/devcontainer.env.example

заменить <TO_BE_MODIFIED!!!> на нужные значения

Переименуем файл-пример в итоговый
```cli
mv .devcontainer/devcontainer.env.example .devcontainer/devcontainer.env
```

**Единожды** после запуска или **перезапуска** VM выполнить из папки склонированного репозитория, чтобы поднять Dev Container
```cli
devcontainer up --workspace-folder .
```

>ВАЖНО!: В случае изменения переменных в файле `devcontainer.env`, нужно остановить девконтейнер, удалить его и поднять заново.
> Смотрим название контейнера через docker container ls, нам нужен id контейнера, который использует образ vsc-pelican-prod-env-2b69c9b4c6f86c2c9190e77d00aa0bb4cd6ce71bb0ea948bbe543d352d9f4599-features. Например, нашли, что id df1c48726646.
> Останавливаем контейнер: docker stop df1c48726646
> Удаляем контейнер: docker rm df1c48726646
> Поднимаем новый контейнер: devcontainer up --workspace-folder .

Создаем кластер k8s kind
```cli
devcontainer exec --workspace-folder . kind create cluster --name pelican --config kind-prod-config.yaml --kubeconfig ./.pelican-cluster-kubeconfig
```

Даём доступ к файлу со сгенерированным конфигом
```cli
chmod -R 0777 ./.pelican-cluster-kubeconfig
```

Деплоим проект в кластер
```cli
devcontainer exec --workspace-folder . helmfile cache cleanup && devcontainer exec --workspace-folder . helmfile --environment prod --namespace prod -f deploy/helmfile.yaml apply
```
