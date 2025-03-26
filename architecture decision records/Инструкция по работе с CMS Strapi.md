# Инструкция по работе с CMS Strapi  

## Содержание:
1. [Ссылки;](#links)  
2. [Авторизация в CMS;](#auth-in-cms)  
  2.1 [Смена языка интерфейса CMS.](#auth-in-cms--change-language)  
3. [Общая информация;](#common-information)  
  3.1 [Выход из аккаунта в CMS;](#logout)  
  3.2 [Черновик и опубликованная версия;](#draft-and-published)  
  3.3 [Предварительный просмотр;](#preview)  
  3.4 [Обязательные поля;](#required-fields)  
  3.5 [Загрузка файлов.](#upload-images)  
4. [Редактирование страниц;](#edit-pages)    
  4.1 [Добавление блоков;](#add-blocks)  
  4.2 [Виды блоков;](#kind-blocks)  
  4.3 Шапка сайта;  
  4.4 Главная страница;  
  4.5 Страница контактного зоопарка;  
  4.6 Страница новостей;  
  4.7 Страница документов.  
5. Добавление новостей;  
6. Добавление документов;  
7. Минимальная настройка перед началом работы;
7. Возможные ошибки.  
  7.1 На frontend`е отображается 404 страница, вместе искомого контента.  

<h2 id="links">1. Ссылки:</h2>  

>Примечание: приведённые ссылки действительны в случае local-env`а
  - Frontend: http://localhost:40110;  
  - CMS: http://localhost:40110/cms/admin;  

<h2 id="auth-in-cms">2. Авторизация в CMS:</h2>  
Перед тем, как начать взаимодействие с контентом сайта, необходимо пройти авторизацию в системе управления контентом (далее CMS). Для этого необходимо перейти на страницу CMS, открыв ссылку URL в любом доступном браузере.<br><br>

Перейдя по ссылке на страницу CMS, откроется окно авторизации, которое выглядит следующим образом:  

![strapi auth page](./images/instruction-strapi-auth-page.png) 
*Окно авторизации CMS*  

Для прохождения авторизации необходимо:  
1. Указать Email в поле 1;  
2. Указать пароль в поле 2;  
3. Нажать на кнопку 4.  

Опционально можно установить галочку в поле 3. В этом случае при следующем посещении страницы CMS прохождение авторизации не потребуется.  

<h3 id="auth-in-cms--change-language">2.1 Смена языка интерфейса CMS</h3>  
Поле 5 позволяет выбрать язык, на котором будет отображаться интерфейс CMS (Русский/English).  

<h2 id="common-information">3. Общая информация</h2>  
<h3 id="logout">3.1 Выход из аккаунта в CMS</h3>  

![strapi logout](./images/instruction-strapi-logout.png)  
*Порядок выхода из аккаунта в CMS*  

Для того, чтобы выйти из аккаунта, в который ранее была произведена авторизация, необходимо:  
1. Нажать на иконку 1;  
2. Нажать на опцию 2.  

После этого текущая авторизованная сессия будет прервана и потребуется повторная авторизация.  

<h3 id="draft-and-published">3.2 Черновик и опубликованная версия контента:</h3>  
Весь контент в CMS имеет черновую версию (Черновик/Draft) и опубликованную версию (Published). Черновик доступен только через CMS, тогда как опубликованная отображается на сайте.<br><br>

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
При редактировании черновой версии (черновика) страницы есть возможность посмотреть на то, как будет выглядеть контент на сайте. На странице черновика в правой части экрана располагается кнопка "Открыть превью черновика", нажав на которую откроется frontend с контентом, который задан в черновой версии страницы.<br><br>

![strapi pweview button](./images/instruction-strapi-preview-button.png)  
*Кнопка предварительного просмотра страницы*  

Возвращаясь к предыдущему примеру (пункт 3.2), если открыть предварительный просмотр черновига главной страницы, то мы увидим, что отображается версия контента, которая задана в черновике и которая отличается от ранее опубликованной.<br><br>

![strapi pweview draft](./images/instruction-strapi-draft-preview.png)  
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
1. Нажать на кнопку 1;
2. Нажать на кнопку 2 (Если файл ранее был загружен, то необходимо выбрать нужный и нажать кнопку “Готово”, остальные пункты пропустить);
3. Нажать кнопку 3;
4. Выбрать требуемый файл (В случае, если нужно загрузить несколько файлов, нажать на кнопку 5 и выбрать дополнительные файлы);
5. Нажать на кнопку 4.

<h2 id="edit-pages">4. Редактирование страниц</h2>  
<h3 id="add-blocks">4.1 Добавление блоков:</h3>  
На большинстве страниц доступна возможность добавления новых блоков на страницу. Некоторые страницы имеют возможность добавления блоков различных групп (например, группы shared и home в случае главной страницы).<br><br>

Кнопка добавления нового блока выглядит следующим образом:  

![strapi add new block button](./images/instruction-strapi-add-new-block-button.png)  
*Кнопка добавления нового блока*  

Если нажать на кнопку, то откроентся окно выбора блока:  

![strapi choose block window](./images/instruction-strapi-choose-block-window.png)  
*Окно выбора блока*  

Под цифрой 1 обозначены группы блоков (shared и home).  
Под цифрой 2 обозначены доступные блоки.  
Под цифрой 3 обозначена кнопка выхода их окна выбора блока.  

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





