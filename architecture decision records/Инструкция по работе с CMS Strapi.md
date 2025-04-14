# Инструкция по работе с CMS Strapi  

## Содержание:
1. [Ссылки](#links)  
  1.1 [Local-env](#links-local-env)  
  1.2 [Локальная разработка](#links-local)  
2. Первые шаги
  2.1 Порядок запуска CMS, логика работы с UI  
  2.2 Минимальная настройка перед началом работы  
3. [Авторизация в CMS](#auth-in-cms)  
  3.1 [Смена языка интерфейса CMS](#auth-in-cms--change-language)  
4. [Общая информация](#common-information)  
  4.1 [Выход из аккаунта в CMS](#logout)  
  4.2 [Черновик и опубликованная версия](#draft-and-published)  
  4.3 [Предварительный просмотр](#preview)  
  4.4 [Обязательные поля](#required-fields)  
  4.5 [Загрузка файлов](#upload-images)  
5. [Редактирование страниц](#edit-pages)  
  5.1 [Добавление блоков](#add-blocks)  
  5.2 [Виды блоков](#kind-blocks)  
  5.3 [Шапка сайта](#header)  
  5.4 Главная страница  
  5.5 Страница контактного зоопарка  
  5.6 Страница новостей  
  5.7 Страница документов  
6. [Добавление новостей](#news)  
7. [Добавление документов](#documents)  
  7.1 [Добавление категорий документов](#documents-categories)
  7.2 [Добавление отдельных документов](#single-documents)
8. [Local-env](#local-env-chapter)  
  8.1 [Создание бэкапов postgres и s3](#postgres-and-s3-backups)  
  8.2 [Откат к версии бэкапов postgres и s3](#postgres-and-s3-rollback-to-backups)  
9. [Возможные ошибки](#errors)  
  9.1 [На frontend`е отображается 404 страница, вместе искомого контента](#errors-404-page)  

<h2 id="links">1. Ссылки</h2>  
<h3 id="links-local-env">1.1 Local-env:</h3>  

  - Frontend: http://localhost:40110  
  - CMS: http://localhost:40110/cms/admin  
  - MinIO-S3: http://minio-s3-console.localhost:40110  

<h3 id="links-local">1.2 Локальная разработка:</h3>  

> Примечание: порты могут изменяться

  - Frontend: http://localhost:3000  
  - CMS: http://localhost:1337  
  - MinIO-S3: http://localhost:9001  

<h2 id="auth-in-cms">2. Авторизация в CMS:</h2>  
Перед тем, как начать взаимодействие с контентом сайта, необходимо пройти авторизацию в системе управления контентом (далее CMS). Для этого необходимо перейти на страницу CMS, открыв ссылку URL в любом доступном браузере.<br><br>

Перейдя по ссылке на страницу CMS, откроется окно авторизации, которое выглядит следующим образом:  

![strapi auth page](./images/instruction-strapi-auth-page.png) 
*Окно авторизации CMS*  

Для прохождения авторизации необходимо:  
1. Указать Email в поле 1  
2. Указать пароль в поле 2  
3. Нажать на кнопку 4   

Опционально можно установить галочку в поле 3. В этом случае при следующем посещении страницы CMS прохождение авторизации не потребуется.  

<h3 id="auth-in-cms--change-language">2.1 Смена языка интерфейса CMS</h3>  
Поле 5 позволяет выбрать язык, на котором будет отображаться интерфейс CMS (Русский/English).  

<h2 id="common-information">3. Общая информация</h2>  
<h3 id="logout">3.1 Выход из аккаунта в CMS</h3>  

![strapi logout](./images/instruction-strapi-logout.png)  
*Порядок выхода из аккаунта в CMS*  

Для того, чтобы выйти из аккаунта, в который ранее была произведена авторизация, необходимо:  
1. Нажать на иконку 1  
2. Нажать на опцию 2  

После этого текущая авторизованная сессия будет прервана и потребуется повторная авторизация.  

<h3 id="draft-and-published">3.2 Черновик и опубликованная версия контента:</h3>  
Весь контент в CMS имеет черновую версию (Draft) и опубликованную версию (Published). Черновик доступен только через CMS, тогда как опубликованная отображается на сайте.<br><br>

![strapi draft and published](./images/instruction-strapi-draft-and-published.png)  
*Переключение между версиями контента*  

Например, заполним компонент “Первый блок” на главной странице и опубликуем её. В разделе “Published” контент будет отображаться следующим образом:<br><br>

![strapi published main page](./images/instruction-strapi-published-main-page.png)  
*Опубликованная версия главной страницы*  

Далее переключимся на “Draft” версию контента и внесем изменения в поле “Заголовок” в карточке с информацией:<br><br>

![strapi draft main page](./images/instruction-strapi-draft-main-page.png)  
*Черновая версия главной страницы*  

В случае, если черновик отличается от опубликованной версии, то поле 1 заменяется с “Draft” на “Modified”.  

Открыв сайт, увидим, что в карточке с информацией указано “29 октября”, а не “24 ноября”, то есть то, что указано в опубликованной версии, а не в черновике.<br><br>

![strapi published main page UI](./images/instruction-strapi-draft-and-published-frontend.png)  
*Главная страница на frontend`е*  

<h3 id="preview">3.3 Предварительный просмотр:</h3>  
При редактировании черновой версии страницы есть возможность посмотреть на то, как будет выглядеть контент на сайте. На странице черновика в правой части экрана располагается кнопка "Открыть превью черновика", нажав на которую откроется frontend с контентом, который задан в черновой версии страницы.<br><br>

![strapi pweview button](./images/instruction-strapi-preview-button.png)  
*Кнопка предварительного просмотра страницы*  

Возвращаясь к предыдущему примеру (пункт 3.2), если открыть предварительный просмотр черновика главной страницы, то мы увидим, что отображается версия контента, которая задана в черновике и которая отличается от ранее опубликованной.<br><br>

![strapi preview draft](./images/instruction-strapi-draft-fields-preview.png)  
*Поля черновой версии главной страницы*  

![strapi preview draft](./images/instruction-strapi-draft-preview.png)  
*Отображение черновой версии главной страницы*  

<h3 id="required-fields">3.4 Обязательные поля:</h3>  
В большинстве типов контента встречаются поля, без заполнения которых не получится опубликовать тот или иной контент. Такие поля являются обязательными для заполнения и помечаются символом красной звездочки справа от наименования поля.<br><br>

![strapi required fields](./images/instruction-strapi-required-and-unrequired-fields.png)  
*Обязательные и необязательные поля*  

<h3 id="upload-images">3.5 Загрузка файлов:</h3>  
Некоторые блоки имеют поля загрузки медиа контента (видео/изображения и другие файлы). Выглядят они следующим образом:<br><br>

![strapi upload images field](./images/instruction-strapi-upload-images.png)  
*Поле загрузки файлов*  

![strapi upload images window](./images/instruction-strapi-upload-images-window.png)  
*Окно выбора файла*  

![strapi upload images window 2](./images/instruction-strapi-upload-images-window2.png)  
*Окно загрузки файла*  

![strapi upload images window 2](./images/instruction-strapi-accept-images-window.png)  
*Окно подтверждения загрузки файлов*  

Для загрузки контента в поле необходимо:
1. Нажать на кнопку 1
2. Нажать на кнопку 2 (Если файл ранее был загружен, то необходимо выбрать нужный и нажать кнопку “Готово”, остальные пункты пропустить)
3. Нажать кнопку 3
4. Выбрать требуемый файл (В случае, если нужно загрузить несколько файлов, нажать на кнопку 5 и выбрать дополнительные файлы)
5. Нажать на кнопку 4

<h2 id="edit-pages">4. Редактирование страниц</h2>  
<h3 id="add-blocks">4.1 Добавление блоков:</h3>  
На большинстве страниц доступна возможность добавления новых блоков на страницу. Некоторые страницы имеют возможность добавления блоков различных групп (например, группы shared и home в случае главной страницы).<br><br>

Кнопка добавления нового блока выглядит следующим образом:  

![strapi add new block button](./images/instruction-strapi-add-new-block-button.png)  
*Кнопка добавления нового блока*  

Если нажать на кнопку, то откроется окно выбора блока:  

![strapi choose block window](./images/instruction-strapi-choose-block-window.png)  
*Окно выбора блока*  

Под цифрой 1 обозначены группы блоков (shared и home).  
Под цифрой 2 обозначены доступные блоки.  
Под цифрой 3 обозначена кнопка выхода из окна выбора блока.  

При нажатии на требуемый блок, окно выбора будет закрыто, а на его месте появится выбранный блок, нажав на который, отобразятся доступные поля для заполнения.<br><br>

![strapi selected block](./images/instruction-strapi-selected-block.png)  
*Добавленный блок*  

![strapi open selected block](./images/instruction-strapi-open-selected-block.png)  
*Добавленный блок*  

<h3 id="kind-blocks">4.3 Виды блоков:</h3>  
<h4 id="blocks-shared-group">Группа shared (общие блоки):</h4>  
а. Первый блок:<br><br>

![strapi first block appearance](./images/instruction-strapi-first-block-appearance.png)  
*Внешний вид первого блока*  

![strapi first block fields](./images/instruction-strapi-first-block-fields1.png)  
*Поля первого блока (часть 1)*  

![strapi first block fields](./images/instruction-strapi-first-block-fields2.png)  
*Поля первого блока (часть 2)*  

б. Блок с картинкой/видео:<br>

![strapi text and media block appearance](./images/instruction-strapi-text-and-media-appearance.png)  
*Внешний вид блока с картинкой/видео*  

![strapi text and media block fields](./images/instruction-strapi-text-and-media-fields.png)  
*Поля блока с картинкой/видео*  

в. Блок с картинкой и кнопкой:<br>

![strapi button with image block appearance](./images/instruction-strapi-button-with-image-appearance.png)  
*Внешний вид блока с картинкой и кнопкой*  

![strapi button with image block fields](./images/instruction-strapi-button-with-image-fields.png)  
*Поля блока с картинкой и кнопкой*  

г. Блок с билетами:<br>

![strapi shared tickets block appearance](./images/instruction-strapi-shared-tickets-appearance.png)  
*Внешний вид блока с билетами*  

![strapi shared tickets block fields](./images/instruction-strapi-shared-tickets-fields.png)  
*Поля блока с билетами*  

<h4 id="blocks-home-group">Группа home:</h4>  
а. Блок с услугами:<br><br>

![strapi services block appearance](./images/instruction-strapi-services-appearance.png)  
*Внешний вид блока с услугами*  

![strapi services block fields](./images/instruction-strapi-services-fields.png)  
*Поля блока с услугами*  

б. Блок с картой:<br>

![strapi map block appearance](./images/instruction-strapi-map-appearance.png)  
*Внешний вид блока с картой*  

![strapi map block fields](./images/instruction-strapi-map-fields.png)  
*Поля блока с картой*  

в. Блок с билетами:<br>

![strapi tickets block appearance](./images/instruction-strapi-tickets-appearance.png)  
*Внешний вид блока с билетами*  

![strapi tickets block fields](./images/instruction-strapi-tickets-fields.png)  
*Поля блока с билетами (часть 1)*  

![strapi tickets block fields](./images/instruction-strapi-tickets-fields2.png)  
*Поля блока с билетами (часть 2)*  

<h2 id="header">4.3 Шапка сайта</h2>  
В этом разделе доступно редактирование информации, которая расположена в модальном окне покупки билетов, которое открывается при нажатии на кнопку “Билеты” в шапке, первом блоке и подвале сайта.

![strapi instruction tickets popup](./images/instruction-strapi-tickets-popup.png)  
*Внешний вид всплывающего окна покупки билетов*  

![strapi instruction tickets popup trigger in header](./images/instruction-strapi-tickets-popup-trigger-header.png)  
*Расположение кнопки покупки билетов (шапка сайта)* 

![strapi instruction tickets popup trigger in hero](./images/instruction-strapi-tickets-popup-trigger-hero.png)  
*Расположение кнопки покупки билетов (первый блок)* 

![strapi instruction tickets popup trigger in footer](./images/instruction-strapi-tickets-popup-trigger-footer.png)  
*Расположение кнопки покупки билетов (подвал сайта)* 

![strapi instruction tickets popup cms fields](./images/instruction-strapi-tickets-popup-cms-fields.png)  
*Поля всплывающего окна покупки билетов (часть 1)* 

![strapi instruction tickets popup cms fields](./images/instruction-strapi-tickets-popup-cms-fields-2.png)  
*Поля всплывающего окна покупки билетов (часть 2)* 

![strapi instruction tickets popup cms fields](./images/instruction-strapi-tickets-popup-cms-fields-3.png)  
*Поля всплывающего окна покупки билетов (часть 3)* 

![strapi instruction tickets popup cms fields](./images/instruction-strapi-tickets-popup-cms-fields-4.png)  
*Поля всплывающего окна покупки билетов (часть 4)* 

![strapi instruction tickets popup cms fields](./images/instruction-strapi-tickets-popup-cms-fields-5.png)  
*Поля всплывающего окна покупки билетов (часть 5)* 


<h2 id="news">6. Добавление новостей</h2>
Для редактирования новостей необходимо выбрать раздел “Новости”, который расположен в левой части экрана в разделе “Content manager”.

![strapi news tab](./images/instruction-strapi-news-tab.png)  
*Расположение раздела*  

Внутри раздела отображается список всех новостей (если они были ранее добавлены, иначе список будет пуст).

Для того чтобы добавить новость, необходимо нажать на кнопку “+ Create new entry”, которая расположена в правом верхнем углу экрана.

![strapi instruction create news](./images/instruction-strapi-news-create-new.png)  
*Расположение кнопки создания новости*  

После нажатия на кнопку откроется окно создания новости. Заполнив необходимые поля, необходимо нажать на кнопку “Сохранить” для того, чтобы сохранить новость в черновике и/или кнопку “Опубликовать”, чтобы опубликовать новость. В первом случае новость будет доступна только внутри CMS, во втором случае она отобразится на сайте.

![strapi instruction news save or publish](./images/instruction-strapi-news-save-publish.png)  
*Расположение кнопок*  

После этого созданная новость отобразится в общем списке новостей. 

В правой части карточки новости в общем списке новостей отображается иконка в виде 3 точек, нажав на которую будет открыто окно с несколькими опциями:
1. <span id="edit-button">Edit</span> - редактировать новость 
2. <span id="duplicate-button">Duplicate</span> - клонировать новость, сделать дубликат
3. <span id="delete-button">Delete entry</span> - удалить новость

![strapi instruction news actions button](./images/instruction-strapi-news-actions-button.png)  
*Отображение окна опций*  

При выборе опции [“Edit”](#edit-button), будет открыто окно редактирования новости. После внесения изменений, необходимо нажать на кнопку “Сохранить”, которая расположена в правой части экрана. При этом статус новости будет изменён на “Modified”, что означает, что черновик новости имеет отличия от опубликованной версии.

![strapi instruction news save modified](./images/instruction-strapi-news-save-modified.png)  
*Сохранение внесённых изменений*  

![strapi instruction news modified status](./images/instruction-strapi-news-modified-status.png)  
*Изменение статуса новости*  

Для того, чтобы применить внесенные изменения, необходимо нажать на кнопку “Опубликовать”, которая расположена в правой части экрана.

![strapi instruction news publish modified](./images/instruction-strapi-news-publish-modified.png)  
*Опубликование изменённой версии новости* 

![strapi instruction news published status](./images/instruction-strapi-news-published-status.png)  
*Изменение статуса новости*  

Помимо редактирования новости, можно сделать ее дубликат. Для этого необходимо выбрать опцию [“Duplicate”](#duplicate-button). После нажатия будет создана копия новости, которая отобразится в общем списке новостей.

![strapi instruction news copy](./images/instruction-strapi-news-copy.png)  
*Отображение копии новости в общем списке новостей* 

Чтобы удалить новость, необходимо выбрать опцию [“Delete entry”](#delete-button), а после подтвердить удаление новости.

![strapi instruction news delete](./images/instruction-strapi-news-delete.png)  
*Подтверждение удаления новости* 


<h2 id="documents">7. Добавление документов</h2> 
<h3 id="documents-categories">7.1 Добавление категорий документов:</h3> <br>
Для редактирования категорий документов необходимо выбрать раздел “Категории документов”, который расположен в левой части экрана в разделе “Content manager”.

![strapi documents categories tab](./images/instruction-strapi-documents-categories-tab.png)  
*Расположение раздела*  

Внутри раздела отображается список всех добавленных категорий документов. Если ранее не была добавлена ни одна категория, то список будет пуст.

Для того чтобы добавить новую категорию, нужно нажать на кнопку “+ Create new entry”, которая расположена в правом верхнем углу экрана.

![strapi instruction documents categories create new](./images/instruction-strapi-documents-categories-create-new.png)  
*Расположение кнопки добавления категории*  

После нажатия на кнопку, будет открыто окно создания категории. Заполнив необходимые поля, необходимо нажать на кнопку “Сохранить” для того, чтобы сохранить категорию в черновике и/или кнопку “Опубликовать”, чтобы опубликовать ее. В первом случае категория будет доступна только внутри CMS, во втором случае она отобразится на сайте.

![strapi instruction documents categories save publish](./images/instruction-strapi-documents-categories-save-publish.png)  
*Расположение кнопок*  

Для категорий документов доступна фильтрация по годам в виде табов. В интерфейсе сайта табы выглядят так:

![strapi instruction documents filters](./images/instruction-strapi-documents-filters.png)  
*Фильтрация по годам в виде табов в рамках одной категории*  

Чтобы табы появились в интерфейсе, нужно при добавлении категории выставить опцию TRUE в соответствующем поле (опция TRUE выбрана по умолчанию). Для категорий, где не нужна фильтрация и бессрочных, можно выбрать опцию FALSE.

Поле URL генерируется автоматически, его не нужно заполнять руками.

![strapi instruction documents categories fields](./images/instruction-strapi-documents-categories-fields.png)  
*Поле для включения/выключения фильтрации по годам и поле URL*  

После сохранения новая категория отобразится в общем списке и будет доступна при добавлении документа в выпадающем списке. Подробнее про добавление документов в [следующем разделе](#single-documents).

![strapi instruction documents add category relation](./images/instruction-strapi-documents-add-category-relation.png)  
*Привязка документа к категории при его добавлении*  

В правой части карточки категории в общем списке категорий отображается иконка в виде 3 точек, нажав на которую можно открыть окно с несколькими опциями:
1. [Edit](#edit-button) - редактировать категорию
2. [Duplicate](#duplicate-button) - клонировать категорию, сделать дубликат
3. [Delete entry](#delete-button) - удалить категорию

Данные опции работают так же, как при работе с новостями, примеры см. по ссылкам в списке выше.

![strapi instruction documents categories actions button](./images/instruction-strapi-documents-categories-actions-button.png)  
*Отображение окна опций*  


<h3 id="single-documents">7.2 Добавление отдельных документов:</h3> 

Для редактирования документов необходимо выбрать раздел “Документы”, который расположен в левой части экрана в разделе “Content manager”.
Прежде чем добавить документ, нужно убедиться, что под него создана соответствующая категория (см. [Добавление, редактирование и удаление категорий документов](#documents-categories))

![strapi instruction documents tab](./images/instruction-strapi-documents-tab.png)  
*Расположение раздела*

Внутри раздела отображается список всех документов. Если ни один документ не был добавлен, список будет пуст.

Для того чтобы добавить документ, необходимо нажать на кнопку “+ Create new entry”, которая расположена в правом верхнем углу экрана.

![strapi instruction documents create new](./images/instruction-strapi-documents-create-new.png)  
*Расположение кнопки создания документа*

После нажатия на кнопку откроется окно создания документа. Заполнив необходимые поля, необходимо нажать на кнопку “Сохранить” для того, чтобы сохранить документ в черновике и/или кнопку “Опубликовать”, чтобы опубликовать его. В первом случае документ будет доступен только внутри CMS, во втором случае он отобразится на сайте.

![strapi instruction documents save publish](./images/instruction-strapi-documents-save-publish.png)  
*Расположение кнопок*

После этого новый документ отобразится в общем списке документов. 

В правой части карточки документа в общем списке документов отображается иконка в виде 3 точек, нажав на которую будет открыто окно с несколькими опциями:
1. [Edit](#edit-button) - редактировать документ
2. [Duplicate](#duplicate-button) - клонировать документ, сделать дубликат
3. [Delete entry](#delete-button) - удалить документ

Данные опции работают так же, как при работе с новостями, примеры см. по ссылкам выше.

![strapi instruction documents actions button](./images/instruction-strapi-documents-actions-button.png)  
*Отображение окна опций*

<h2 id="local-env-chapter">8. Local-env</h2>  
<h3 id="postgres-and-s3-backups">8.1 Создание бэкапов postgres и s3:</h3>  

> Примечание: предварительно необходимо запустить local-env, смотри:  
> https://github.com/TourmalineCore/pelican-local-env  

Для создания бэкапа текущей версии postgres и s3 в local-env необходимо:
1. Перейти в ветку s3-backup в репозитории pelican-local-env:  

2. Подгрузить бэкаппер s3, выполнив команду:  
```
helmfile cache cleanup && helmfile --environment local --namespace local -f deploy/helmfile.yaml apply
```  

3. Перейти в ветку pgsql-backup в репозитории pelican-local-env:  

4. Подгрузить бэкаппер pgsql, выполнив команду:  
```
helmfile cache cleanup && helmfile --environment local --namespace local -f deploy/helmfile.yaml apply
```  

5. Перейти в интерфейс MinIO и скачать полученные бэкапы.  

> Примечание: порядок авторизации в MinIO смотри:  
> https://github.com/TourmalineCore/pelican-local-env?tab=readme-ov-file#открытие-интерфейса-minio-s3  

<h3 id="postgres-and-s3-rollback-to-backups">8.2 Откат к версии бэкапов postgres и s3:</h3>    
<h4>Для отката версии postgres к версии бэкапа необходимо:</h3>  

1. Сделать под postgresql-0 доступным, для этого необходимо:  
1.1 Открыть кластер в Lens и перейти в раздел Workloads -> Pods.  

![lens workloads](./images/instruction-strapi-lens-workloads.png)  
*Раздел Pods в Workloads*  

1.2 Найти под postgresql-0 и нажать на него.  

![postgresql-0 pod](./images/instruction-strapi-postgresql-0-pod.png)  
*Под postgresql-0*  

1.3 В открывшемся окне найти кнопку "Forward", после нажать кнопку "Start".  

![lens forward postgresql-0 pod](./images/instruction-strapi-lens-forward-postgresql-0-pod.png)  
*Forward postgresql-0 pod*  

![lens start forward postgresql-0 pod](./images/instruction-strapi-lens-start-forward-postgresql-0-pod.png)  
*Start forward postgresql-0 pod*  

Откроется окно в браузере, где необходимо скопировать порт.  

![postgresql-0 pod port](./images/instruction-strapi-postgresql-0-pod-port.png)  
*Postgresql-0 pod port*  

2. Перемещаем бекап postgres в рабочую директорию, открываем в ней терминал.  

![move postgres backup to work directory](./images/instruction-strapi-moving-postgres-backup.png)  
*Перемещение бэкапа в рабочую директорию*  

3. Выполняем команду очистки схемы базы, чтобы исключить возможность возникновения конфликтов при откате к бэкапу. (Нужно подставить порт из пункта 1.3)  
```
psql -U postgres -h localhost -p <порт> -d pelican_db -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
```
> Примечание: потребуется ввести пароль от пользователя postgres в базе данных:  
> `password`: *admin*   

4. Выполняем команду копирования базы данных из бэкапа. (Нужно подставить порт из пункта 1.3 и наименование бэкапа)  
```
psql -U postgres -h localhost -p <порт> -d pelican_db -f ./<наименование бэкапа>
```  

> Примечание: потребуется ввести пароль от пользователя postgres в базе данных:  
> `password`: *admin*  

![psql commands](./images/instruction-strapi-psql-commands.png)  
*Перемещение бэкапа в рабочую директорию*  
  
<h4>Для отката версии s3 к версии бэкапа необходимо:</h3>  

1. Разархивировать архив бекапа s3 в папку.
2. Открыть интерфейс MinIO, перейдя по ссылке: http://minio-s3-console.localhost:40110 

> Примечание: в случае локальной разработки ссылка будет другой, смотри пункт 1.2  

3. Авторизоваться, введя логин и пароль:  
- `login`: *admin*  
- `password`: *rootPassword*  
4. Очистить хранилище, выбрав все файлы и нажав на кнопку Delete (если там что-то есть).  
5. Нажать кнопку Upload и выбрать все файлы из бэкапа s3.  

![minio upload](./images/instruction-strapi-minio-upload.png)  
*Загрузка файлов в MinIO*  

<h2 id="errors">Возможные ошибки</h2>    
<h3 id="errors-404-page">9.1 На frontend`е отображается 404 страница, вместо искомого контента:</h3>  

<!-- При первом запуске проекта вместо главной страницы и страницы контактного зоопарка (/contact-zoo) 
будут отображаться страницы 404. Происходит это, потому что на стороне CMS эти страницы еще не были 
созданы и опубликованы.  

![UI not found page](./images/pelican-ui-404.png)  

Чтобы сделать страницы доступными, необходимо (в случае local-env):  
1. Открыть админ-панель Strapi, перейдя по ссылке:  
      http://localhost:40110/cms/admin  

      Откроется окно авторизации. Необходимо авторизоваться, используя логин и пароль:  
      *Логин: admin@init-strapi-admin.strapi.io*  
      *Пароль: admin*  

      > Примечание: Креды могут измениться, актуальные смотреть в readme.md в репозитории pelican-local-env:  
      > https://github.com/TourmalineCore/pelican-local-env

      ![strapi auth window](./images/strapi-auth-window.png)  

2. После авторизации необходимо перейти в раздел “Content manager”, который расположен в левой части экрана.  

      ![strapi main menu](./images/strapi-main-menu.png)  

3. Создание и публикация главной страницы.  
      3.1 В левой части экрана необходимо выбрать раздел “Главная страница”.  

      ![strapi select main page](./images/strapi-select-main-page.png)  

      3.2 Должно открыться окно редактирования страницы. Далее необходимо нажать на “+” в блоке seo.  

      ![strapi create seo](./images/strapi-create-seo.png)  

      3.3 Появиться несколько полей. Обязательные поля помечены красной звездочкой в правом верхнем углу поля.  

      ![strapi required fields](./images/strapi-required-fields.png)  

      3.4 Заполнив требуемые поля, необходимо нажать на кнопку “Save” в правой части экрана, для сохранения черновика. После нажать на кнопку “Publish” для ее публикации.  

      ![strapi save and publish](./images/strapi-save-and-publish.png)  

      3.5 Переходим на UI по ссылке: http://localhost:40110/ и видим, что страница стала доступна.  

      ![UI main page](./images/pelican-ui-main-page.png)  

      3.6 Добавление других блоков аналогично. Необходимо нажать на “+” в верхней части экрана (над блоком seo).  

      ![strapi add block](./images/strapi-add-block.png)  

      3.7 Далее откроется список доступных блоков, из которых некоторые вынесены в отдельную категорию, например, “Home”. Необходимо выбрать нужный блок, например, “Hero”. 

      Блоки “Shared” доступны глобально для всех страниц, блоки “Home” только для главной страницы.  

      ![strapi block types](./images/strapi-block-types.png)  

      3.8 Аналогично блоку seo, необходимо заполнить требуемые поля блока.  

      ![strapi block fields](./images/strapi-block-fields.png)  

      3.9 Далее нужно сохранить и опубликовать изменения на странице. Аналогично seo.  

      ![strapi save and publish block](./images/strapi-save-and-publish-block.png)  

4. Создание и публикация страницы контактного зоопарка.  
      4.1 В левой части экрана необходимо выбрать “Страница контактного зоопарка”.  

      ![strapi contact-zoo-page](./images/strapi-contact-zoo-page.png)  

      4.2 Далее аналогично главной странице.   -->
