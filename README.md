# pelican-documentation

Здесь можно найти ссылки на связанные репозитории проекта "Пеликан".

## Связанные репозитории

- [pelican-ui](https://github.com/TourmalineCore/pelican-ui) - репозиторий, где лежит фронтенд.
- [pelican-cms](https://github.com/TourmalineCore/pelican-cms) - репозиторий с кодом для Strapi CMS. 
- [pelican-local-env](https://github.com/TourmalineCore/pelican-local-env) - репозиторий с кодом, который развертывает весь проект в локальном кластере k8s в Docker.
- [pelican-prod-env](https://github.com/TourmalineCore/pelican-prod-env) - репозиторий с кодом, который развертывает весь проект в продакшен кластере k8s в Docker.
- [pelican-db-backupper](https://github.com/TourmalineCore/pelican-db-backupper) - репозиторий с функционалом для периодического создания бэкапов базы данных PostgreSQL для Strapi CMS.
- [pelican-s3-backupper](https://github.com/TourmalineCore/pelican-s3-backupper) - репозиторий с функционалом для периодического создания бэкапов S3 для Strapi CMS.
- [pelican-env-synchronizer](https://github.com/TourmalineCore/pelican-env-synchronizer) - репозиторий с функционалом для периодической синхронизации и обновления запущенного local-env или prod-env  до текущей актуальной версии каждого сервиса проекта.
- [pelican-github-workflows](https://github.com/TourmalineCore/pelican-github-workflows) - репозиторий, где хранятся переиспользуемые GitHub Actions Workflows.
- [pelican-monitoring](https://github.com/TourmalineCore/pelican-monitoring) - репозиторий, где живут авто-тесты, которые проверяют, что сайт и его сервисы функционируют в продакшене корректно.

## Записи об архитектурных решениях

Здесь мы также фиксируем решения, которые принимаем командой относительно архитектуры проекта и подходов к разработке.

- [SSL-сертификат](architecture%20decision%20records/SSL-сертификат.md)
- [Защита от DDoS-атак](architecture%20decision%20records/Защита%20от%20DDoS-атак.md)
- [Инструкция по началу работы с CMS Strapi](architecture%20decision%20records/Инструкция%20по%20началу%20работы%20с%20CMS%20Strapi.md)
- [Используемые плагины](architecture%20decision%20records/Используемые%20плагины.md)
- [Кэширование HTTP запросов](architecture%20decision%20records/Кэширование%20HTTP%20запросов.md)
- [Логирование](architecture%20decision%20records/Логирование.md)
- [Мультитенант подход](architecture%20decision%20records/Мультитенант%20подход.md)
- [Перенос старых url новостей](architecture%20decision%20records/Перенос%20старых%20url%20новостей.md)
- [Предпросмотр сайта](architecture%20decision%20records/Предпросмотр%20сайта.md)
- [Редактор новостей](architecture%20decision%20records/Редактор%20новостей.md)
- [Сортировка, фильтрация и пагинация](architecture%20decision%20records/Сортировка,%20фильтрация%20и%20пагинация.md)
- [Процесс верстки через TDD](architecture%20decision%20records/Процесс%20верстки%20через%20TDD.md)
- [Хранение файлов](architecture%20decision%20records/Хранение%20файлов.md)
- [Результаты исследования подходов к реализации доступности](architecture%20decision%20records/a11y/Доступность.md)
- [Гайдлайн по доступности](architecture%20decision%20records/a11y/Гайдлайн.md)
- [Тестирование доступности](architecture%20decision%20records/a11y/Тестирование%20доступности.md)
- [Выбранные параметры для sitemap](architecture%20decision%20records/Выбранные%20параметры%20для%20sitemap.md)


## Разное
- [Управление кэшом](./different/Управление%20кэшированием.md)
- [Тестирование в разных ОС и браузерах](./different/Тестирование%20в%20разных%20ОС%20и%20браузерах.md)
- [Robots.txt и sitemap](./different/Robots.txt%20и%20sitemap/Robots.txt%20и%20sitemap.md)
- [Обзор лицензий проекта](./architecture%20decision%20records/licenses/Лицензии.md)
- [Нагрузочное тестирование](./load-testing/Нагрузочное%20тестирование.md)
- [Как переименовывать поля в Strapi](./different/Как%20переименовывать%20поля%20в%20Strapi/Как%20переименовывать%20поля%20в%20Strapi.md)
