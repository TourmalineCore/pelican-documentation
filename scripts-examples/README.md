# Примеры скриптов

## Какие скрипты есть?

1. [zoo-parser.js](../scripts-examples/scripts/zoo-parser.js) - скрипт парсинга архива новостей

Парсер, который со страницы http://chelzoo.ru/news/archive/ выгружает все новости за все года, включая название новости, ее текст, ссылку, дату и метатеги. Выгруженные новости записываются в `zoo_news_archive.json` файл в виде плоского списка. Пример вида файла:

```bash
[  
    {
    "year": 2018,
    "date": "2018-04-13",
    "title": "Мы переходим на летний режим работы!",
    "text": "С 14.04.2018 г. по 14.10.2018 г. мы  работаем по следующему графику..",
    "url": "http://chelzoo.ru/news/2018/04/13/my-perehodim-na-letnij-rezhim-raboty/",
    "metaTags": {
      "title": "Мы переходим на летний режим работы!",
      "description": "Челябинский зоопарк начинает работать по летнему режиму! "
    }
  },
  {
    ...
  },
  ...
]
```


2. [find-end-duplicates.js](../scripts-examples/scripts/find-end-duplicates.js) - скрипт поиска дубликатов последнего сегмента ссылок

Пробегается по `zoo_news_archive.json` файлу, перебирает ссылки каждой новости и проверяет их на наличие дублирующихся последних сегметов ссылки, создавая файл `url_counts.json` с результатом в формате:

```bash
[  
  {
    "lastSegment": "/my-perehodim-na-letnij-rezhim-raboty/",
    "count": 2
  },
  {
    ...
  },
  ...
]
```


3. [create-news-from-json.js](../scripts-examples/scripts/create-news-from-json.js) - скрипт создания новостей в страпи из json файла

Пробегается по `zoo_news_archive.json` файлу и создает все новости из файла в страпи


## Что нужно для запуска скриптов?

### Условия

- Скрипт `zoo-parser.js` 
    - ни от чего не зависит
    - на выходе создает файл `zoo_news_archive.json`

- Скрипт `find-end-duplicates.js`
    - использует файл `zoo_news_archive.json`
    - на выходе создает файл `url_counts.json`

- Скрипт `create-news-from-json.js`
    - использует файл `zoo_news_archive.json`
    - на выходе не создает файлов, но создает новости в страпи


### Настройка tsconfig.json

В репозитории документации запустить скрипты **НЕ** получится, нужно добавить их в корень сконфигурированного для запуска проекта, например, в репозиторий `pelican-ui`. В настроенном проекте должен находиться файл `tsconfig.json`, в который нужно добавить в поле `include` название файла скрипта, например:

```bash
{
  "compilerOptions": {
    ...
  },
  "include": [... , "find-end-duplicates.js"],
  "exclude": ...
}
```


### Команда запуска

Для запуска скрипта нужно в терминале написать команду с названием файла скрипта, например:

```bash
node find-end-duplicates.js
```


## Примеры json файлов:

1. [zoo_news_archive.json](../scripts-examples/jsons/zoo_news_archive.json)

2. [url_counts.json](../scripts-examples/jsons/url_counts.json)