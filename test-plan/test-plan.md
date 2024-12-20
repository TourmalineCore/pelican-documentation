# TC Zoo Test Cases & Test Plan

## Тест-кейсы:

1. **Хедер.** Кликнуть “Услуги” в хедере - пользователь попал на раздел “Наши услуги” с вертикальным скроллом.

2. **Хедер.** Кликнуть “Адрес” в хедере - пользователь попал на раздел адреса с картой с вертикальным скроллом.

3. **Хедер.** Кликнуть “Правила посещения” в хедере - пользователь переходит на страницу правил посещения.

4. **Хедер.** Кликнуть “Льготы” в хедере - пользователь переходит на страницу “Льготы” (или возможно переход на документ со всеми льготами в новой вкладке браузера в рамках 1-го релиза/мгновенная скачка документа со всеми льготами).

5. **Хедер.** Кликнуть “Документация” в хедере - пользователь переходит на страницу документации.

6. **Хедер.** Кликнуть на “Глазок” - включилась версия для слабовидящих.

7. **Хедер.** Кликнуть на “Глазок” обратно - включилась версия для нормально видящих.

8. **Хедер.** Кликнуть на “Связаться” - пользователь переместился в футер.

9. **Хедер.** Кликнуть на “Билеты” - откроется меню доступных билетов.

   9.1. Кликнуть на любой билет, кроме “Льготный” - откроется виджет афиши Яндекса.

   9.2. Попробовать кликнуть на “Льготный” - не должен произойти переход в Яндекс виджет (как проверить? подумать).

       9.2.1. Кликнуть на “Льготный - Подробнее” - открылась информация о категориях льготников с прайс-листом.

       9.2.1.1. Кликнуть на “Льготный - Подробнее - Остальные льготные категории” - пользователь переходит на страницу “Льготы” (или возможно переход на документ со всеми льготами в новой вкладке браузера в рамках 1-го релиза/мгновенная скачка документа со всеми льготами).

   9.3. Кликнуть на “Правила посещения” - открылся аккордеон с правилами посещения.

       9.3.1. Кликнуть на “Подробнее о правилах посещения” - пользователь переходит на страницу “Правила посещения” (или возможно переход на документ со всеми правилами посещения в новой вкладке браузера в рамках 1-го релиза/мгновенная скачка документа со всеми правилами посещения).

   9.4. Кликнуть на “Возврат билетов” - открылся аккордеон с возможными случаями для возврата билетов.

       9.4.1. Кликнуть на “Подробнее о возврате билетов” - открылся подробный документ с возможными случаями для возврата билетов.

10. Закрыть поп-ап с покупкой билетов.

11. **Виды животных.** Убедиться, что видео в разделе “о видах животных” корректно воспроизводится автоплеем с бесконечным циклом (визуально легко проверяется вручную, подумать можно ли / надо ли автоматизировать).

12. **Наши услуги.** Кликнуть “Уточнить вопросы можно по телефону” с мобилки - открылось окно “Телефон” с набранным номером из элемента сайта с номером телефона (скорее вручную, подумать можно ли автоматизировать).

13. **Наши услуги.** Кликнуть “Запись осуществляется по почте” с мобилки - открылось окно “Почта” с указанным адресатом из элемента сайта с почтой зоопарка (скорее вручную, подумать можно ли автоматизировать).

14. **Наши услуги.** Горизонтальный скролл. Проскроллить до конца вправо - последние элементы - номер и почта зоопарка.

15. **Наши услуги.** Горизонтальный скролл. Проскроллить до конца влево - первый элемент “Экскурсии” (подумать над тем, как убедиться, что ты на левой / правой границе независимо от контента элемента).

16. **Входные билеты.** Повторить тест-кейсы пункта покупки билетов.

17. **Льготные билеты.** Кликнуть на “по ссылке” - открылись остальные льготные категории.

18. **Местоположение.** Кликнуть на “остановка ‘Зоопарк’” - проверить, что мы отправляем запросом в Яндекс Карты правильный субъект (зоопарк). Подумать над этой проверкой. (возможно впихнуть как часть определенного Е2Е сценария - разом проверить что клик триггерит исходящий запрос с правильным параметром на Яндекс).

19. **Футер. О зоопарке.** Кликнуть “Новости” - открылась страница с новостями зоопарка.

20. **Футер. О зоопарке.** Кликнуть “Документы” - открылась страница с документами зоопарка.

21. **Футер. О зоопарке.** Кликнуть “Правила посещения” - открылась страница с правилами посещения зоопарка.

22. **Футер. О зоопарке.** Кликнуть “Оставить отзыв” - открылось форма в новой вкладке с оставлением отзыва о зоопарке.

23. **Футер. Посетителям.** Кликнуть “Услуги” - перенаправление на раздел “Наши услуги”. (скролл).

24. **Футер. Посетителям.** Кликнуть “Билеты” - открывается поп-ап с билетами.

25. **Футер. Посетителям.** Кликнуть “Льготы” - пользователь переходит на страницу “Льготы” (или возможно переход на документ со всеми льготами в новой вкладке браузера в рамках 1-го релиза/мгновенная скачка документа со всеми льготами).

26. **Футер.** Кликнуть номер телефона с мобилки - открылось окно “Телефон” с набранным номером из элемента сайта с номером телефона.

27. **Футер.** Кликнуть почту с мобилки - открылось окно “Почта” с указанным адресатом из элемента сайта с почтой зоопарка.

28. **Футер. Контакты.** Кликнуть “Tourmaline Core” - в новой вкладке открылся сайт [tourmalinecore.com](https://tourmalinecore.com).

29. **Футер. Контакты.** Кликнуть иконку “ВК” - в новой вкладке открылась страница ВК зоопарка.

30. **Футер. Контакты.** Кликнуть иконку “ТГ” - в новой вкладке открылся телеграм-канал зоопарка.

31. **Футер. Контакты.** Кликнуть иконку “Одноклассники” - в новой вкладке открылся паблик Зоопарка в Одноклассниках.

32. **Футер. Контакты.** Кликнуть иконку “Яндекс. Дзен” - в новой вкладке открылся Дзен Зоопарка со статьями.

33. **Футер.** Кликнуть “Управление культуры администрации г. Челябинска” - в новой вкладке откроется сайт [kultura74.ru](https://kultura74.ru).

34. **Футер.** Кликнуть “Министерство культуры Челябинской области” - в новой вкладке откроется сайт [mincult.gov74.ru](https://mincult.gov74.ru).

35. **Футер.** Кликнуть “Администрация г. Челябинска” - в новой вкладке откроется сайт [cheladmin.ru](https://cheladmin.ru).

36. **Страница Льгот.** “Дети от 5 до 13 лет” - Кликнуть “Закон РФ от 09.10.1992 года № 3612-1”.

37. **Страница Льгот.** Кликнуть на “Приказом №188 от 19.06.2020 г. 'Об установлении категорий граждан без оплаты входных билетов МБУК 'Зоопарк' (с изм. №1 от 31.08.2021 г.)”.

38. **Страница Документации.** Дата. Выбрать год.

39. **Страница Документации.** Кликнуть “Скачать документ”.

40. **Страница Документации.** Развернуть документ.

41. **Страница Документации.** Кликнуть “Скачать поддокумент” внутри развернутого документа.

42. **Страница Документации.** Свернуть документ.

43. **Страница Документации.** Развернуть все документы - все документы развернуты и верстка страницы не сломалась.

44. **Страница Новостей.** Кликнуть на новость - переход на страницу с новостью.

45. **Страница Новости. Читайте также.** Кликнуть “горизонтальный скролл вправо”.

46. **Страница Новости. Читайте также.** Кликнуть “горизонтальный скролл влево”.

47. **Страница Новости. Читайте также.** Попробовать кликнуть “горизонтальный скролл влево”, находясь на максимально левой границе слайдера - кнопка неактивна.

48. **Страница Новости. Читайте также.** Попробовать кликнуть “горизонтальный скролл вправо”, находясь на максимально правой границе слайдера - кнопка неактивна.

---

## Вопросы и предложения по функциональному тестированию:

- Тестируем через TDD? В рамках E2E / компонентных тестов?
- Открытие-закрытие попапа с графиком работы.
- Открытие-закрытие меню (клик по бургеру).
- Переход на меню с билетами.
- Работа аккордеонов внутри меню с билетами.
- Наведение на карточки-ссылки, которые меняют цвет (раздел билеты), наведение на ссылки.
- Клик на “остановка ‘Зоопарк’” и переход на Яндекс карты.

## Приоритеты тестирования (1-ая версия Тест-плана):

### Шаги тестирования:

#### ***1. Пиксель перфект (скриншотные) тесты: в рамках E2E-тестов.***
Описание процесса: 
   - Подтягиваем скриншот из фигмы 
   - тест падает, верстаем до тех пор, пока тест не пройдет
   - продолжаем верстать до допустимой сходимости по скрину из фигмы
   - потом меняем скрин из фигмы на наш собственный скриншот актуальной верстки и берем его за эталон, а дальше сравниваем всегда с ним по пиксельперфект.
      
Тип тестирования: 
- Автоматизированные визуальные тесты.
- Верстка через screen тесты.

***Инструкции и регламент по данному виду тестирования:***
1. Необходимо работать над проектом через dev container.
2. Определенное именование файлов для картинок из фигмы.
   - Пример:
     - `header-desktop-chromium-linux`
     - `header-desktop-firefox-linux`
3. При верстке по картинке из фигмы допустимое значение параметра `maxDiffPixelRatio` 0.02-0.03.
4. После того как тест начинает проходить, удаляем картинку из фигмы и убираем параметр `maxDiffPixelRatio`.
5. Запускаем тест, он сделает скрин и упадет, повторно запускаем его и видим, что он успешно проходит.

---
Другие возможные варианты и текущий вариант (выделенный): 
***1. Либо проверка всех компонентов в совокупности визуально в E2E с помощью Playwright.***
2. Либо проверка компонентов отдельно с помощью Playwright (если получится победить компонентные тесты) + в E2E проверить их в совокупности на Playwright.
3. Либо проверка компонентов отдельно с помощью Cypress + в совокупности в E2E на Playwright (нагрузка на поднятие сайта).
4. Либо проверка компонентов отдельно с помощью Cypress + E2E на Cypress.

---

#### ***2. Проверка поведения компонентов (в E2E “секционных” тестах) - поведение скриншотами пока не проверяем.***
#### ***3.  Проверка Accessibility в E2E (доступность для всех категорий пользователей, чтобы все элементы интерфейса табались и можно было пользоваться сайтом без мыши).***
#### ***4. Маршрутизация по сайту и покупка билетов.***
Тип тестирования: E2E (Playwright)

**Как проверяется:**

E2E тест:  
Тестирование полной навигации, где проверяется переход между всеми ключевыми страницами. Например, сценарий, который начинается с главной страницы и последовательно проверяет все ссылки.

Полный сценарий пользователя прохождения по страницам сайта (ознакомление с информацией в хронологическом порядке и покупки билета (услуги - документация - правила посещения - льготы - взаимодействие с адресом и соц. сетями в футере - покупка билета), включающий выбор билета, проверка корректности параметров, отправляемых на сторонний API в виде виджета Яндекса и проверка редиректа на виджет Яндекса. Это позволит оценить рабочий процесс с точки зрения пользователя и проверит роутинг всех страниц.

Так как преимущественно пользователю предстоит работать лишь с просмотром информации - возможно, можно будет подключить визуальное (скриншотное тестирование) на каждой странице, чтобы удостовериться в корректной отрисовке компонентов страницы (Playwright).

---

Компонентные тесты:

- Тестирование отдельных компонентов (например, отрисовка билета, кнопка "Купить билет") для проверки их правильного функционирования в изоляции. (но это пока возможно в Cypress, пока не разобрались с Playwright).

#### ***5. Проверка пользовательского опыта (UX) и юзабилити:***

- **Тип тестирования:** Ручное тестирование.

**Как проверяется:**

E2E тест: Провести краткий анализ для оценки взаимодействия с сайтом в целом, вызывая различные компоненты и проверяя, насколько интуитивно понятен пользовательский опыт.

---

#### ***6. Нагрузочное тестирование:***

**Тип тестирования:** E2E.

**Как проверяется:**

E2E тест: Имитация пользовательского поведения под нагрузкой для тестирования производительности, учета времени отклика и обработки запросов. Это позволит оценить, как система справляется с высокой нагрузкой, симулируя реальные сценарии использования (спросить у зоопарка, сколько пользователей в среднем находится на сайте и покупает билеты).




# Тестирование интеграции CMS Strapi и нашего сайта ChelZoo


## 1. Подход к организации тенантов

При организации тенантов (tenants) мы будем учитывать несколько простых подходов:

- **Отдельная база данных**:
  - Каждому тенанту соответствует своя база данных.
  - **Плюсы**: максимальная изоляция, независимость.
  - **Минусы**: сложность управления, большие накладные расходы.

- **Отдельная схема**:
  - В рамках одной базы данных создается отдельная схема для каждого тенанта.
  - **Плюсы**: изоляция и простота управления.
  - **Минусы**: может стать сложнее при увеличении числа тенантов.

- **Таблица с идентификаторами тенантов**:
  - Все данные находятся в одной схеме внутри одной БД с таблицей тенантов, разделяющихся по `tenant_id`, как это было на **best-by**.
  - **Плюсы**: простота реализации.
  - **Минусы**: возможные проблемы с производительностью и защитой данных.

### Реализация таблицы с идентификаторами тенантов (tenant_id) в одной схеме и одной базе данных для мультитенантной архитектуры, особенно для небольшого проекта, имеет свои плюсы и минусы:

### Плюсы реализации таблицы с идентификаторами тенантов

1. **Простота реализации**:
   - Простота в разработке и развертывании, что важно для нас, как небольшого проекта. Быстрое включение новых пользователей и функциональности без дополнительных затрат на архитектуру.

2. **Удобство разработки**:
   - Возможность фокусироваться на создании контента и более простом управлении данными, что позволяет быстро адаптироваться к требованиям бизнеса.

3. **Снижение затрат на инфраструктуру**:
   - Поддержка одной базы данных и схемы более экономна как по ресурсам, так и по времени на администрирование, что выгодно подходит для нашего проекта.


### Минусы реализации

1. **Проблемы с производительностью**:
   - При увеличении количества данных исполнение запросов может занять больше времени из-за необходимости фильтрации по `tenant_id`. Однако, учитывая потенциально скорее всего малое количество тенантов (2-3 максимум), это не должно быть критичным для текущего уровня нагрузки.

2. **Риски безопасности данных**:
   - Несмотря на то, что нет данных о транзакциях??? (они ведь будут происходить на сторонних интеграциях яндекс и + банковских оплатах -) информация о пользователях и контенте всё равно может стать уязвимой в случае ошибок в логике доступа. Кажетя, риск утечки данных возможно незначителен для нашего конкретного случая, но стоит учесть этот гипотетический риск и быть готовым к необходимым мерам безопасности.

3. **Сложности в управлении правами доступа**:
   - С увеличением числа тенантов могут возникнуть сложности с правильно настроенной логикой доступа, это потребует обширной проверки и тестирования в процессе разработки в дальнейшем при развитии проекта (что маловероятно - по крайней мере в плане функционала и пересечения разных видов контента). Однако с малым количеством тенантов это может не быть значительной проблемой.

4. **Ограниченная гибкость в будущем**:
   - Даже если на данный момент проект является простой инфокартой, есть вероятность добавления нового функционала. Это может привести к дополнительной сложности в управлении данными. Более того, если на каком-то этапе понадобится более сложная логика доступа или отчетности, адаптация текущей схемы может потребовать значительных изменений.

## Вывод

**Если проект останется в рамках простого функционала с небольшим количеством тенантов и стоимостью инфраструктуры, реализация таблицы с идентификаторами тенантов является вполне приемлемым и даже оптимальным вариантом.** \
Актуальные риски являются незначительными для маломасштабных проектов, и используемая архитектура позволит нам легко управлять данными.

Но вариант с отдельной схемой является более безопасным, учитывая потенциальыне риски, которые могут возникнуть, хоть и с малой долей вероятности.



## 2. Проверка безопасности и риски

Рассмотрим риски для каждого варианта развертывания:

- **Отдельная база данных**:
  - *Риски*: Усложненное управление, необходимость в дополнительных ресурсах для обеспечения безопасности.
  - *Подход*: Наилучший для проектов с высокими требованиями к безопасности и изоляции данных.

- **Отдельная схема**:
  - *Риски*: Неправильная конфигурация может привести к утечке данных между тенантами.
  - *Подход*: Хороший компромисс между изоляцией и управляемостью.

- **Таблица с идентификаторами**:
  - *Риски*: Высокая вероятность утечек данных между тенантами, сложная логика контроля доступа.
  - *Подход*: Подходит для простых и маломасштабных приложений, но менее безопасен.

### Выбор наилучшего варианта

С учетом масштаба и сути нашего проекта (сайт-карточка с функциями покупки билетов и публикация контента), кажется, наиболее компромиссным вариантом было бы использование **отдельной схемы** для каждого тенанта. Этот подход обеспечит достаточную изоляцию и безопасность данных без чрезмерных накладных расходов.

## 3. Флоу тестирования интеграции со Strapi на отдельном тенанте

В рамках нашего большого E2E теста мы будем взаимодействовать с интерфейсом админки Strapi, одновременно отслеживая правильность отправляемых запросов и проверяя, что данные отображаются корректно. Мы будем выполнять следующие действия:

### 1. Проверка публикации новости

- **Действие**: Опубликовать новость через интерфейс админки.

- **Проверка ответа API**: 

  - Ожидаемое поведение: Убедимся, что ответ API возвращает успешный статус и содержит корректные данные о новой новости. Ответ должен содержать новый уникальный id новости.

### 2. Проверка редактирования новости

- **Действие**: Отредактировать недавно опубликованную новость через интерфейс админки.

- **Проверка ответа API**:

  - Ожидаемое поведение: Убедимся, что ответ API возвращает успешный статус и обновленные данные для отредактированной новости. Уникальный id новости должен оставаться прежним, но заголовок или другие редактируемые поля должны быть обновлены в ответе.

### 3. Проверка удаления новости

- **Действие**: Удалить новость через интерфейс админки.

- **Проверка ответа API**:

  - Ожидаемое поведение: Убедимся, что ответ API подтверждает успешное удаление. При получении массива новостей от API, удаленная новость (по уникальному id) не должна содержаться в payload.

### Ожидаемые результаты

1. Новость успешно опубликована, и ответ API содержит корректные данные об опубликованной новости с уникальным id.

2. Новость успешно отредактирована, и ответ API отражает изменения.

3. Id удаленной новости отсутствует в ответе API.


Как я уже говорил в комментариях, предстоит задача ознакомиться с работой API strapi.

### . **Визуальное тестирование**:
   - После завершения API-тестов выполняем визуальное скриншотное тестирование, чтобы убедиться, что верстка страницы не изменилась и соответствует дизайну. \
***Все еще вопрос, как это можно сделать???*** \
***Мое предложение из комментариев к пулл реквесту:*** \
"как пример, что мне сейчас пришло в голову - придумать шаблон тестового поста (и нескольких постов, чтобы проверить, как ведет себя страница при добавлении одного поста и как при нескольких) запостить его и потом:
- сделать эталонный скриншот
- удалить пост
- во время тестов будет генерироваться тот же самый шаблонный пост и будет проверяться соответствие скриншота с эталоном

пока у меня в голове это чуть ли не единственный способ проверить визуально, не ломается ли верстка при добавлении контента на страницу после взаимодействия с админкой

если все-таки отказываемся от этой проверки в рамках тестирования данной интеграции, то, думаю, по идее - да, можно будет тестировать в репе pelican-strapi"



3. **Очистка тестовых данных**:
   - Проверка удаления поста/нескольких постов с помощью API запроса

## Дополнительные идеи:

###  Динамическое создание и удаление тенанта во время прогона тестов

- Автоматизация создания нового тенанта перед тестами и его удаление после их завершения может быть удобной и аккуратной в плане отсутствия лишних тестовых данных.
- Можно создать кастомный скрипт на Node.js, который взаимодействует с API Strapi для создания и настройки тестового тенанта, а также его удаления.
