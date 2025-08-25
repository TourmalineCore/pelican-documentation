# Инструкция по добавлению, редактированию и удалению контента сайта Челябинского зоопарка через CMS Strapi

## Содержание:
1. [Доступ к CMS](#access-to-cms)
2. [Авторизация в CMS](#auth-in-cms)
3. [Общая информация](#general-info)<br/>
    3.1 [Выход из аккаунта в CMS](#logout)<br/>
    3.2 [Черновик и опубликованная версия контента](#draft-and-published)<br/>
    3.3 [Предварительный просмотр](#preview)<br/>
    3.4 [Обязательные поля](#required-fields)<br/>
    3.5 [Загрузка файлов](#upload)<br/>
    3.6 [Медиа-библиотека](#media-library)<br/>
    3.7 [Списки множественного контента (новости, категории документов, документы)](#collection-types)
4. [Редактирование страниц](#edit-pages)<br/>
    4.1 [Главная страница](#home-page)<br/>
    4.2 [Блок SEO](#seo-block)<br/>
    4.3 [Шапка сайта](#tickets-popup)<br/>
    4.4 [Страница контактного зоопарка](#contact-zoo-page)<br/>
    4.5 [Страница правил посещения](#rules-page)<br/>
    4.6 [Страница льгот](#discounts-page)<br/>
    4.7 [Страница новостей](#news-page)<br/>
    4.8 [Страница документов](#documents-page)<br/>
    4.9 [Страница другое](#other-page)
5. [Добавление, редактирование и удаление новостей](#edit-news)
6. [Добавление, редактирование и удаление категорий документов](#edit-categories)
7. [Добавление, редактирование и удаление документов](#edit-documents)
8. [Добавление новых страницы во вкладку "Другое"](#add-other-pages)


<h2 id="access-to-cms">1. Доступ к CMS</h2> 
<ul>
    <li>
        Рекомендуется держать адрес страницы CMS в секрете, поскольку несанкционированный доступ к ней может нарушить стабильную работу сайта.
    </li>
    <li>
        CMS будет доступна только из внутренней сети зоопарка.
    </li>
</ul>

<h2 id="auth-in-cms">2. Авторизация в CMS</h2> 

Перед тем, как начать взаимодействие с контентом сайта, необходимо пройти авторизацию в системе управления контентом (далее CMS).

![strapi auth page](./images/instruction-strapi-auth-page.png)<br/>
*Окно авторизации CMS*

Для прохождения авторизации необходимо:
<ol>
    <li>
        Указать email в поле 1
    </li>
    <li>
        Указать пароль в поле 2
    </li>
    <li>
        Нажать на кнопку 4
    </li>
</ol>

В поле 5 можно выбрать язык, на котором будет отображаться интерфейс CMS (*Русский/English*).

<h2 id="general-info">3. Общая информация</h2> 

<h3 id="logout">3.1 Выход из аккаунта в CMS</h3> 

![strapi logout](./images/instruction-strapi-logout.png)  
*Порядок выхода из аккаунта в CMS*  

<h3 id="draft-and-published">3.2 Черновик и опубликованная версия контента</h3> 

<ul>
    <li>
        Весь контент в CMS имеет черновую версию (<em>Черновик/Draft</em>) и опубликованную версию (<em>Published</em>).
    </li>
    <li>
        Опубликованная версия видна всем.
    </li>
    <li>
        Черновую версию можно посмотреть в CMS или в <a href="#preview">режиме предварительного просмотра</a>.
    </li>
</ul>

![strapi draft and published](./images/instruction-strapi-draft-and-published.png)  
*Переключение между версиями контента* 

Например, заполним компонент “Первый блок” на главной странице и опубликуем её. В разделе *“Published”* контент будет отображаться следующим образом:

![strapi published main page](./images/instruction-strapi-published-main-page.png)  
*Опубликованная версия главной страницы*  

Далее переключимся на *“Draft”* версию контента и внесем изменения в поле *“Заголовок”* в карточке с информацией:

![strapi draft main page](./images/instruction-strapi-draft-main-page.png)  
*Черновая версия главной страницы*  

В случае, если черновик отличается от опубликованной версии, в поле 1 будет надпись *“Modified”*.

<h3 id="preview">3.3 Предварительный просмотр</h3> 

При редактировании черновой версии страницы есть возможность предварительно посмотреть на то, как будет выглядеть контент на сайте. На странице черновика в правой части экрана располагается кнопка *"Открыть превью черновика"*, по клику на которую откроется сайт с контентом, который задан в черновой версии страницы.

![strapi pweview button](./images/instruction-strapi-preview-button.png)  
*Кнопка предварительного просмотра страницы*  

При просмотре предварительной версии, в верхней части сайта отображается кнопка *“Выйти из режима черновика”*, при нажатии на которую режим будет отключен.

![strapi preview draft](./images/instruction-strapi-draft-preview.png)  
*Отображение черновой версии главной страницы* 

<h3 id="required-fields">3.4 Обязательные поля</h3> 

В большинстве блоков  встречаются поля, без заполнения которых нельзя опубликовать контент. Такие поля являются обязательными для заполнения и помечаются  звездочкой.

![strapi required fields](./images/instruction-strapi-required-and-unrequired-fields.png)  
*Обязательные и необязательные поля*

<h3 id="upload">3.5 Загрузка файлов</h3> 

Некоторые блоки имеют поля загрузки медиа контента (видео, изображения или документы):

![strapi upload images field](./images/instruction-strapi-upload-images.png)  
*Поле загрузки файлов* 

Такие поля позволяют загружать один или несколько файлов разных форматов, в зависимости от блока в котором расположено поле.

Поддерживаемые форматы:
<ul>
    <li>
        Изображения: JPEG, PNG, GIF, SVG, TIFF, ICO, DVU
    </li>
    <li>
        Видео: MPEG, MP4, Quicktime, WMV, AVI, FLV
    </li>
    <li>
        Документы: CSV, ZIP, PDF, Excel, DOCX и другие…
    </li>
</ul>

**Выбор изображения(ий) из ранее загруженных:**<br/>
**Шаг 1**. Нажимаем на *“+”* в поле. 

![strapi upload images and video field](./images/instruction-strapi-upload-images-and-video.png)  
*Поле загрузки изображения/видео* 

**Шаг 2**. Выбираем нужное изображение, устанавливая галочку в левом верхнем углу самого изображения (либо несколько галочек в случае загрузки нескольких изображений).

![strapi choose image](./images/instruction-strapi-choose-image.png)  
*Выбор изображения*

Готово. Изображение успешно загружено в поле.

![strapi upload images and video field](./images/instruction-strapi-upload-images-and-video-field.png)<br/>
*Поле загрузки изображения/видео* 

**Загрузка нового изображения(ий):**<br/>
**Шаг 1**. Нажимаем на *“+”* в поле или перетаскиваем файл в зону загрузки (в этом случае сразу переходим к 4 шагу). 

![strapi choose image or video](./images/instruction-strapi-upload-new-images-and-video-field.png)  
*Поле загрузки изображения/видео*

**Шаг 2**. Нажимаем на кнопку *“Добавить ещё ресурсы”*.

![strapi intermediate upload image field](./images/instruction-strapi-intermediate-upload-image-field.png)  
*Промежуточное окно загрузки изображения*

**Шаг 3**. Нажимаем на кнопку *“Обзор файлов”*, после этого должно открыться диалоговое окно, где нужно выбрать изображение на вашем компьютере, которое вы хотите загрузить в медиа-библиотеку CMS.

![strapi upload file field](./images/instruction-strapi-upload-file-field.png)  
*Окно загрузки изображения*

**Шаг 4**. Будет открыто окно с загруженным изображением.

![strapi ready-to-upload field](./images/instruction-strapi-ready-to-upload-field.png)  
*Окно отображения загруженного изображения*

Если все желаемые изображения загружены, нужно нажать на кнопку 1, иначе на кнопку 2, выбрать дополнительные изображения, а после нажать на кнопку 1 для подтверждения выбора.

**Шаг 5**. Повторно подтверждаем загрузку выбранного изображения.
![strapi approve upload field](./images/instruction-strapi-approve-upload-field.png)  
*Окно подтверждения выбора*

Готово. Изображение успешно загружено в поле.

![strapi upload successful](./images/instruction-strapi-upload-successful.png)  
*Поле загрузки изображения/видео*

<h3 id="media-library">3.6 Медиа-библиотека</h3> 

В левой части интерфейса CMS доступен раздел “Медиа-библиотека”, в котором отображены все загруженные в CMS файлы. В этом разделе доступна загрузка новых файлов и создание папок, с помощью которых можно группировать загруженные файлы.

![strapi media library tab](./images/instruction-strapi-media-library-tab.png)  
*Расположение раздела*

Загрузка файлов в этом разделе идентична порядку загрузки через отдельное поле (смотри пункт <a href="#upload">3.5 Загрузка файлов</a>). Необходимо нажать на кнопку *“+ Add new assets”*, которая расположена в верхней части раздела.

![strapi media library upload button](./images/instruction-strapi-media-library-upload-button.png)  
*Расположение кнопки загрузки файлов*

Для создания папки необходимо нажать на кнопку *“+ Add new folder”* в верхней части раздела.

![strapi media library add folder](./images/instruction-strapi-media-library-add-folder-button.png)  
*Расположение кнопки создания папки*

После нажатия на кнопку откроется всплывающее окно, в котором необходимо указать название будущей папки в поле *“Name”*.

![strapi media library add folder modal](./images/instruction-strapi-media-library-add-folder-modal.png)  
*Всплывающее окно создания папки*

После того, как название было заполнено, нужно нажать на *“Create”*.

![strapi media library add folder create button](./images/instruction-strapi-media-library-add-folder-create-button.png)  
*Расположение кнопки*

После этого папка будет создана и отображена в разделе.

![strapi media library created folder](./images/instruction-strapi-media-library-created-folder.png)  
*Отображение папки*

Если нажать на папку, она откроется. Загрузка файлов в папку идентична порядку загрузки через отдельное поле (смотри пункт <a href="#upload">3.5 Загрузка файлов</a>).

<h3 id="collection-types">3.7 Списки множественного контента (новости, категории документов, документы)</h3> 

В подобных общих списках (например, список новостей) присутствует возможность поиска и фильтрации. Соответствующие кнопки выглядят следующим образом.

![strapi news search and filter](./images/instruction-strapi-news-search-and-filter.png)  
*Расположение кнопок поиска и фильтрации*

Поиск производится по всем полям в таблице.

![strapi news search and filter example](./images/instruction-strapi-news-search-and-filter-example.png)  
*Пример поиска по новостям*

При нажатии на кнопку *“Фильтры”* будет открыто всплывающее окно, где доступно несколько опций.
<ol>
    <li>
        Поле, на которое будем ориентироваться при составлении выборки (например, заголовок).
    </li>
    <li>
        Условие, по которому будем отбирать подходящие варианты.
    </li>
    <li>
        Искомое значение, на которое будем ориентироваться при выборке.
    </li>
</ol>

![strapi filter popup](./images/instruction-strapi-filter-popup.png)  
*Всплывающее окно фильтров*

После того, как условие определено, необходимо нажать на кнопку *“Добавить фильтр”*.

![strapi add filter button](./images/instruction-strapi-add-filter-button.png)  
*Расположение кнопки добавления фильтра*

После этого фильтр будет добавлен и применён. Дополнительно появится метка фильтра над списком.

![strapi filter label](./images/instruction-strapi-filter-label.png)  
*Расположение метки фильтра*

<h2 id="edit-pages">4. Редактирование страниц</h2> 

Для редактирования страниц необходимо зайти в раздел “Контент менеджмент” (Content Manager).

![strapi content management tab](./images/instruction-strapi-content-management-tab.png)  
*Расположение раздела контент менеджмента*

<h3 id="home-page">4.1. Главная страница</h3> 

Для редактирования главной страницы выберите “Главная страница” во вкладке “Контент менеджмент (Content Manager)”.

![strapi home page tab](./images/instruction-strapi-home-page-tab.png)  
*Расположение главной страницы в разделе контент менеджмента*

Главная страница состоит из следующих блоков:
<ul>
    <li>
        <a href="#hero">Первый блок</a>
    </li>
    <li>
       <a href="#block-with-video">Блок с картинкой/видео</a>
    </li>
    <li>
        <a href="#services">Блок с услугами</a>
    </li>
    <li>
        <a href="#image-and-button-grid">Блок с картинкой и кнопкой</a>
    </li>
    <li>
        <a href="#tickets">Блок с билетами</a>
    </li>
    <li>
        <a href="#map">Блок с картой</a>
    </li>
</ul>

<h3 id="hero">Первый блок:</h3>

![strapi hero block](./images/instruction-strapi-hero-block.png)  
*Внешний вид первого блока*

Для редактирования данного блока нужно выбрать “Первый блок”.

![strapi hero block editing](./images/instruction-strapi-hero-block-editing.png)  
*Редактирование первого блока*

В развернутой вкладке вы сможете отредактировать необходимые поля для первого блока.

![strapi hero block fields](./images/instruction-strapi-hero-block-fields.png)  
*Поля первого блока*

<h3 id="block-with-video">Блок с картинкой/видео:</h3>

![strapi block with video fields](./images/instruction-strapi-block-with-video-fields.png)  
*Внешний вид блока с картинкой/видео*

Для редактирования данного блока необходимо выбрать “Блок с картинкой/видео”.

![strapi block with video tab](./images/instruction-strapi-block-with-video-tab.png)  
*Редактирование блока с картинкой/видео*

В развернутой вкладке вы сможете отредактировать необходимые поля для блока с картинкой/видео.

![strapi block with video fields](./images/instruction-strapi-block-with-video-edit-fields.png)  
*Поля блока с картинкой/видео*

<h3 id="services">Блок с услугами:</h3>

![strapi services block](./images/instruction-strapi-services-block.png)  
*Внешний вид блока с услугами*

Для редактирования этого блока нужно выбрать “Блок с услугами”.

![strapi services block tab](./images/instruction-strapi-services-block-tab.png)  
*Редактирование блока с услугами*

В развернутой вкладке вы сможете отредактировать необходимые поля для блока с услугами.

![strapi services block fields](./images/instruction-strapi-services-block-fields.png)  
*Поля блока с услугами*

<h3 id="image-and-button-grid">Блок с картинкой и кнопкой:</h3>

![strapi image with button block](./images/instruction-strapi-image-with-button-block.png)  
*Внешний вид блока с картинкой и кнопкой*

Для редактирования данного блока необходимо выбрать “Блок с картинкой и кнопкой”.

![strapi image with button block tab](./images/instruction-strapi-image-with-button-block-tab.png)  
*Внешний вид блока с картинкой и кнопкой*

В развернутой вкладке вы сможете отредактировать необходимые поля для блока с картинкой и кнопкой.

![strapi image with button block fields](./images/instruction-strapi-image-with-button-block-fields.png)  
*Поля блока с картинкой и кнопкой*

<h3 id="tickets">Блок с билетами:</h3>

![strapi tickets block](./images/instruction-strapi-tickets-block.png)  
*Внешний вид блока с билетами*

Для редактирования этого блока нужно выбрать “Блок с билетами”.

![strapi tickets block tab](./images/instruction-strapi-tickets-block-tab.png)  
*Редактирование блока с билетами*

В развернутой вкладке вы сможете отредактировать необходимые поля для данного блока.

![strapi tickets block editing](./images/instruction-strapi-tickets-block-editing.png)  
*Поля блока с билетами*

<h3 id="map">Блок с картой:</h3>

![strapi map block](./images/instruction-strapi-map-block.png)<br/>
*Внешний вид блока с картой*

Для редактирования блока с картой нужно выбрать “Блок с картой”.

![strapi map block tab](./images/instruction-strapi-map-block-tab.png)<br/>
*Редактирование блока с картой*

В развернутой вкладке вы сможете отредактировать необходимые поля для данного блока.

![strapi map block editing](./images/instruction-strapi-map-block-editing.png)<br/>
*Поля блока с картой*

<h3 id="seo-block">4.2. Блок SEO</h3> 

Блок SEO не похож на остальные блоки, он присутствует по умолчанию на всех страницах сайта и отвечает за поисковую оптимизацию. Блок располагается в нижней части каждой конкретной страницы или сущности (например, конкретной новости или категории документов).

![strapi SEO block editing](./images/instruction-strapi-seo-block-editing.png)<br/>
*Блок SEO главной страницы в CMS*

Заголовок страницы, указанный в этом блоке, будет отображен в названии вкладки браузера, а также в поисковой выдаче браузера. Максимальная длина – 300 символов, рекомендуемая – до 60 символов.

![strapi SEO title on UI](./images/instruction-strapi-seo-title-on-ui.png)<br/>
*Отображение SEO заголовка*

Описание страницы, указанное в этом блоке, будет использовано браузером и отображено под ссылкой на сайт в поисковой выдаче. Минимальная длина составляет 50 символов, максимальная – 1000 символов, рекомендуемая – до 160 символов.

![strapi SEO block in search feed](./images/instruction-strapi-seo-block-in-search-feed.png)<br/>
*Отображение информации, указанной в блоке SEO*

<h3 id="tickets-popup">4.3. Шапка сайта (всплывающее окно с билетами)</h3> 

В этом разделе доступно редактирование информации, которая расположена в окне покупки билетов, которое открывается при нажатии на кнопку *“Билеты”* в шапке, первом блоке и подвале сайта.

![strapi tickets popup](./images/instruction-strapi-tickets-popup.png)<br/>
*Внешний вид всплывающего окна покупки билетов*

![strapi tickets popup button](./images/instruction-strapi-tickets-popup-button.png)<br/>
*Расположение кнопки покупки билетов (шапка сайта)*

![strapi tickets popup button in hero](./images/instruction-strapi-tickets-popup-button-in-hero.png)<br/>
*Расположение кнопки покупки билетов (первый блок)*

![strapi tickets popup button in footer](./images/instruction-strapi-tickets-popup-button-in-footer.png)<br/>
*Расположение кнопки покупки билетов (подвал сайта)*

Для редактирования окна с билетами нужно выбрать “Шапка сайта”.

![strapi tickets popup tab](./images/instruction-strapi-tickets-popup-tab.png)<br/>
*Редактирование всплывающего окна с билетами*

<h3 id="contact-zoo-page">4.4. Страница контактного зоопарка</h3> 

Для редактирования данной страницы необходимо выбрать “Страница контактного зоопарка”.

![strapi contact zoo tab](./images/instruction-strapi-contact-zoo-tab.png)<br/>
*Редактирование страницы контактного зоопарка*

Чтобы отредактировать контент, нужно кликнуть на нужный блок, чтобы он расхлопнулся, после чего можно редактировать поля.

![strapi contact zoo blocks](./images/instruction-strapi-contact-zoo-blocks.png)<br/>
*Блоки страницы контактного зоопарка*

<h3 id="rules-page">4.5. Страница правил посещения</h3> 

Для редактирования данной страницы необходимо выбрать вкладку “Страница правил посещения” в Content Manager.

![strapi rules page tab](./images/instruction-strapi-rules-page-tab.png)<br/>
*Редактирование страницы правил посещения*

![strapi rules page blocks](./images/instruction-strapi-rules-page-blocks.png)<br/>
*Редактируемые блоки на странице правил посещения*

![strapi rules page editing](./images/instruction-strapi-rules-page-editing.png)<br/>
*Один из редактируемых блоков в расхлопнутом виде*

Чтобы отредактировать контент, нужно кликнуть на нужный блок, чтобы он расхлопнулся, после чего можно редактировать его поля.

<h3 id="discounts-page">4.6. Страница льгот</h3> 

Для редактирования данной страницы необходимо выбрать “Страница льгот”.

![strapi discounts page tab](./images/instruction-strapi-discounts-page-tab.png)<br/>
*Редактирование страницы льгот*

Чтобы отредактировать контент, нужно кликнуть на нужный блок, чтобы он расхлопнулся, после чего можно редактировать поля.

![strapi discounts page blocks](./images/instruction-strapi-discounts-page-blocks.png)<br/>
*Блоки страницы льгот*

<h3 id="news-page">4.7. Страница новостей</h3> 

Для редактирования страницы новостей необходимо выбрать “Страница новостей”. В данной вкладке можно настроить заголовок для страницы и задать SEO настройки.

![strapi news page tab](./images/instruction-strapi-news-page-tab.png)<br/>
*Редактирование страницы новостей*


![strapi news page on UI](./images/instruction-strapi-news-page-on-ui.png)<br/>
*Отображение информации на странице новостей*

<h3 id="documents-page">4.8. Страница документов</h3> 

Для редактирования страницы документов нужно выбрать вкладку “Страница документов”. В ней можно настроить заголовок страницы и задать SEO настройки.

![strapi documents page tab](./images/instruction-strapi-documents-page-tab.png)<br/>
*Редактирование страницы документов*

![strapi documents page on UI](./images/instruction-strapi-documents-page-on-ui.png)<br/>
*Отображение информации на странице документов*

<h3 id="documents-page">4.9. Страница "Другое"</h3> 

Для редактирования страницы "Другое" нужно выбрать вкладку “Страница Другое”. В ней можно настроить заголовок страницы и задать SEO настройки.

![strapi other page tab](./images/instruction-strapi-other-page-tab.png)<br/>
*Редактирование страницы "Другое"*

![strapi other page on UI](./images/instruction-strapi-other-page-on-ui.png)<br/>
*Отображение информации на странице "Другое"*

<h2 id="edit-news">5. Добавление, редактирование и удаление новостей</h2> 

Для редактирования новостей нужно выбрать раздел “Новости”.

![strapi news tab](./images/instruction-strapi-news-tab.png)<br/>
*Расположение раздела новостей*

Внутри раздела отображается список всех новостей (если они были ранее добавлены, иначе список будет пуст).

Для того чтобы добавить новость, необходимо нажать на кнопку *“+ Create new entry”*, которая расположена в правом верхнем углу экрана.

![strapi create news button](./images/instruction-strapi-create-news-button.png)<br/>
*Расположение кнопки создания новости*

После нажатия на кнопку откроется окно создания новости. Заполнив необходимые поля, нужно нажать на кнопку *“Сохранить / Save”* для того, чтобы сохранить новость в черновике и/или кнопку *“Опубликовать / Publish”*, чтобы опубликовать новость. В первом случае новость будет доступна только внутри CMS или в режиме предварительного просмотра, во втором случае она отобразится на сайте для всех пользователей.

![strapi news article buttons](./images/instruction-strapi-news-article-buttons.png)<br/>
*Расположение кнопок*

После этого созданная новость отобразится в общем списке новостей. 

В правой части карточки новости в общем списке новостей отображается иконка в виде 3 точек, нажатие на которую приведет к открытию окна с несколькими опциями:

<ul>
    <li>
        <strong>Edit</strong> - редактировать новость
    </li>  
    <li>  
        <strong>Duplicate</strong> - создать дубликат новости
    </li>
    <li>
        <strong>Delete entry</strong> - удалить новость
    </li> 
</ul>

![strapi news action buttons](./images/instruction-strapi-news-action-buttons.png)<br/>
*Отображение окна опций*

При выборе опции *“Edit”*, будет открыто окно редактирования новости. После внесения изменений нужно нажать на кнопку *“Сохранить / Save”* в правой части экрана. При этом статус новости будет изменён на *“Modified”*, что означает, что черновик новости имеет отличия от опубликованной версии.

![strapi news save button](./images/instruction-strapi-news-save-button.png)<br/>
*Сохранение внесённых изменений*

![strapi news modified status](./images/instruction-strapi-news-modified-status.png)<br/>
*Изменение статуса новости*

Для того, чтобы применить внесенные изменения, нужно нажать на кнопку *“Опубликовать / Publish”* в правой части экрана.

![strapi publish modified news](./images/instruction-strapi-publish-modified-news.png)<br/>
*Опубликование изменённой версии новости*

![strapi news publish status](./images/instruction-strapi-news-publish-status.png)<br/>
*Изменение статуса новости*

Помимо редактирования новости, можно сделать ее дубликат. Для этого необходимо выбрать опцию *“Duplicate”*. После нажатия будет создана копия новости, которая отобразится в общем списке новостей.

![strapi news copy in list](./images/instruction-strapi-news-copy-in-list.png)<br/>
*Отображение копии новости в общем списке новостей*

Чтобы удалить новость, необходимо выбрать опцию *“Delete entry”*, а после подтвердить удаление новости.

![strapi delete news](./images/instruction-strapi-delete-news.png)<br/>
*Подтверждение удаления новости*

<h2 id="edit-categories">6. Добавление, редактирование и удаление категорий документов</h2> 

Для редактирования категорий документов нужно выбрать раздел “Категории документов”.

![strapi document categories tab](./images/instruction-strapi-document-categories-tab.png)<br/>
*Расположение раздела категории документов*

Внутри раздела отображается список всех добавленных категорий документов. Если ранее не была добавлена ни одна категория, то список будет пуст.
Для того чтобы добавить новую категорию, нужно нажать на кнопку *“+ Create new entry”* в правом верхнем углу экрана.

![strapi add category button](./images/instruction-strapi-add-category-button.png)<br/>
*Расположение кнопки добавления категории*

После нажатия на кнопку откроется окно создания категории. Заполнив необходимые поля, необходимо нажать на кнопку *“Сохранить / Save”*, чтобы сохранить категорию документов в черновике и/или кнопку *“Опубликовать / Publish”*, чтобы опубликовать категорию. В первом случае категория будет доступна только внутри CMS или в режиме предварительного просмотра, во втором случае она отобразится на сайте для всех пользователей.

![strapi category buttons](./images/instruction-strapi-category-buttons.png)<br/>
*Расположение кнопок*

Для категорий доступна фильтрация по годам в виде табов.

![strapi documents filtration](./images/instruction-strapi-documents-filtration.png)<br/>
*Фильтрация по годам в виде табов в рамках одной категории*

Чтобы табы появились в интерфейсе, нужно при добавлении категории выставить опцию *TRUE* в соответствующем поле (*TRUE* выбрано по умолчанию). Там, где разделение по годам не требуется, можно проставить *FALSE* для этого поля. Поле *URL* генерируется автоматически, его не нужно заполнять руками.

![strapi toggle documents filtration](./images/instruction-strapi-toggle-documents-filtration.png)<br/>
*Поле для включения/выключения фильтрации по годам и поле URL*

После сохранения новая категория отобразится в общем списке и будет доступна при добавлении документа в выпадающем списке. Подробнее про добавление документов в следующем разделе.

![strapi add document relation](./images/instruction-strapi-add-document-relation.png)<br/>
*Привязка документа к категории при его добавлении*

В правой части карточки категории в общем списке категорий отображается иконка в виде 3 точек, нажав на которую можно открыть окно с несколькими опциями:

<ul>
    <li>
        <strong>Edit</strong> - редактировать категорию
    </li>  
    <li>  
        <strong>Duplicate</strong> - создать дубликат категории
    </li>
    <li>
        <strong>Delete entry</strong> - удалить категорию
    </li> 
</ul>

Данные опции работают так же, как при работе с новостями, примеры см. по ссылкам в списке выше.

![strapi categories action buttons](./images/instruction-strapi-categories-action-buttons.png)<br/>
*Отображение окна опций*

<h2 id="edit-documents">7. Добавление, редактирование и удаление документов</h2> 
	
Для редактирования документов необходимо выбрать раздел “Документы”. Прежде чем добавить документ, нужно убедиться, что под него создана соответствующая категория (см. Добавление, редактирование и удаление категорий документов)

![strapi documents tab](./images/instruction-strapi-documents-tab.png)<br/>
*Расположение раздела документов*

Внутри раздела отображается список всех документов. Если ни один документ не был добавлен, список будет пуст.

Для того чтобы добавить документ, необходимо нажать на кнопку *“+ Create new entry”*, которая расположена в правом верхнем углу экрана.

![strapi create document button](./images/instruction-strapi-create-document-button.png)<br/>
*Расположение кнопки создания документа*

После нажатия на кнопку откроется окно создания документа. Заполнив необходимые поля, нужно нажать на кнопку *“Сохранить / Save”*, чтобы сохранить документ в черновике и/или кнопку *“Опубликовать / Publish”*, чтобы опубликовать документ. В первом случае документ будет доступен только внутри CMS или в режиме предварительного просмотра, во втором случае он отобразится на сайте для всех пользователей.

![strapi create document buttons](./images/instruction-strapi-create-document-buttons.png)<br/>
*Расположение кнопок*

После этого новый документ отобразится в общем списке документов. 

В правой части карточки документа в общем списке документов отображается иконка в виде 3 точек, нажатие на которую приведет к открытию окна с опциями:

<ul>
    <li>
        <strong>Edit</strong> - редактировать документ
    </li>  
    <li>  
        <strong>Duplicate</strong> - создать дубликат документа
    </li>
    <li>
        <strong>Delete entry</strong> - удалить документ
    </li> 
</ul>

Данные опции работают так же, как при работе с новостями, примеры см. по ссылкам выше.

![strapi document action buttons](./images/instruction-strapi-document-action-buttons.png)<br/>
*Отображение окна опций*

<h2 id="add-other-pages">8. Добавление новых страниц во вкладку "Другое"</h2>
Для добавления новых страниц во вкладку "Другое" необходимо перейти в раздел "Другие страницы".

![strapi other pages tab](./images/instruction-strapi-other-pages-tab.png)<br/>
*Расположение раздела Другие страницы*

Внутри раздела отображается список всех страниц. Если ни одна страница не была добавлена, список будет пуст.

Для того, чтобы добавить новую страницу, необходимо нажать на кнопку “+ Create new entry”, которая расположена в правом верхнем углу экрана.

![strapi other pages create button](./images/instruction-strapi-create-other-pages-button.png.png)<br/>
*Расположение кнопки создания новых страниц*

После нажатия на кнопку откроется окно создания новой страницы. Помимо обычных текстовых полей в этой вкладке присутствует вкладка для добавления готовых компонентов на страницу. 

![strapi other pages components button](./images/instruction-strapi-other-pages-components-button.png)<br/>
*Расположение кнопки для добавления готовых компонентов на страницу*

После нажатия будет отображен список все существующих компонентов. Можно добавлять компоненты в любом количестве и в любом порядке.

![strapi other pages component](./images/instruction-strapi-other-pages-components.png)<br/>
*Список готовых компонентов*

>ВАЖНО. Для всех новых страниц необходимо добавлять "Блок SEO", для того чтобы страницы хорошо индексировались поисковиками. 

После добавления нескольких компонентов их можно передвигать местами, для это воспользуйтесь специальным участком для перемещения.

![strapi other pages move components](./images/instruction-strapi-other-pages-move-components.png)


Заполнив необходимые поля, нужно нажать на кнопку “Сохранить / Save”, чтобы сохранить страницу в черновике и/или кнопку “Опубликовать / Publish”, чтобы опубликовать новую страницу. В первом случае страница будет доступна только внутри CMS или в режиме предварительного просмотра, во втором случае она отобразится на сайте для всех пользователей во вкладке "Другое".

![strapi other pages save an publish buttons](./images/instruction-strapi-other-pages-save-and-publish-buttons.png)<br/>
*Расположение кнопок для сохранения и публикации*

После этого новая страница отобразится в общем списке.

Опубликованные страницы добавляются на страницу "Другое"
![strapi other pages on ui](./images/instruction-strapi-other-pages-on-ui.png)<br/>
*Новые страницы на сайте*

