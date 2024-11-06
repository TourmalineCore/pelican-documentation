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

   9.0. Кликнуть на любой билет, кроме “Льготный” - откроется виджет афиши Яндекса.

   9.4. Попробовать кликнуть на “Льготный” - не должен произойти переход в Яндекс виджет (как проверить? подумать).

       9.4.1. Кликнуть на “Льготный - Подробнее” - открылась информация о категориях льготников с прайс-листом.

       9.4.1.1. Кликнуть на “Льготный - Подробнее - Остальные льготные категории” - пользователь переходит на страницу “Льготы” (или возможно переход на документ со всеми льготами в новой вкладке браузера в рамках 1-го релиза/мгновенная скачка документа со всеми льготами).

   9.5. Кликнуть на “Правила посещения” - открылся аккордеон с правилами посещения.

       9.5.1. Кликнуть на “Подробнее о правилах посещения” - пользователь переходит на страницу “Правила посещения” (или возможно переход на документ со всеми правилами посещения в новой вкладке браузера в рамках 1-го релиза/мгновенная скачка документа со всеми правилами посещения).

   9.6. Кликнуть на “Возврат билетов” - открылся аккордеон с возможными случаями для возврата билетов.

       9.6.1. Кликнуть на “Подробнее о возврате билетов” - открылся подробный документ с возможными случаями для возврата билетов.

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

- Пиксель перфект (скриншотные) тесты: где они? Либо компонентные, либо E2E.
  - (Подтягиваем скриншот из фигмы, тест падает, верстаем до тех пор, пока тест не пройдет, продолжаем верстать до допустимой сходимости по скрину из фигмы, потом меняем скрин из фигмы на наш собственный скриншот актуальной верстки и берем его за эталон, а дальше сравниваем всегда с ним по пиксельперфект. ) Проверка визуального отображения (PixelPerfect)

### Тип тестирования: 
- Автоматизированные визуальные тесты.
- Верстка через screen тесты.

1. Необходимо работать над проектом через dev container.
2. Определенное именование файлов для картинок из фигмы.
   - Пример:
     - `header-desktop-chromium-linux`
     - `header-desktop-firefox-linux`
3. При верстке по картинке из фигмы допустимое значение параметра `maxDiffPixelRatio` 0.02-0.03.
4. После того как тест начинает проходить, удаляем картинку из фигмы и убираем параметр `maxDiffPixelRatio`.
5. Запускаем тест, он сделает скрин и упадет, повторно запускаем его и видим, что он успешно проходит.

---

1. Либо проверка всех компонентов в совокупности визуально в E2E с помощью Playwright.
2. Либо проверка компонентов отдельно с помощью Playwright (если получится победить компонентные тесты) + в E2E проверить их в совокупности на Playwright.
3. Либо проверка компонентов отдельно с помощью Cypress + в совокупности в E2E на Playwright (нагрузка на поднятие сайта).
4. Либо проверка компонентов отдельно с помощью Cypress + E2E на Cypress.

---

- Проверка поведения компонентов (в E2E “секционных” тестах) - поведение скриншотами пока не проверяем.
- Проверка Accessibility в E2E (доступность для всех категорий пользователей, чтобы все элементы интерфейса табались и можно было пользоваться сайтом без мыши).
- Маршрутизация по сайту и покупка билетов.

### Тип тестирования: E2E (Playwright)

**Как проверяется:**

E2E тест:  
Тестирование полной навигации, где проверяется переход между всеми ключевыми страницами. Например, сценарий, который начинается с главной страницы и последовательно проверяет все ссылки.

Полный сценарий пользователя прохождения по страницам сайта (ознакомление с информацией в хронологическом порядке и покупки билета (услуги - документация - правила посещения - льготы - взаимодействие с адресом и соц. сетями в футере - покупка билета), включающий выбор билета, проверка корректности параметров, отправляемых на сторонний API в виде виджета Яндекса и проверка редиректа на виджет Яндекса. Это позволит оценить рабочий процесс с точки зрения пользователя и проверит роутинг всех страниц.

Так как преимущественно пользователю предстоит работать лишь с просмотром информации - возможно, можно будет подключить визуальное (скриншотное тестирование) на каждой странице, чтобы удостовериться в корректной отрисовке компонентов страницы (Playwright).

---

### Компонентные тесты:

- Тестирование отдельных компонентов (например, отрисовка билета, кнопка "Купить билет") для проверки их правильного функционирования в изоляции. (но это пока возможно в Cypress, пока не разобрались с Playwright).

### Проверка пользовательского опыта (UX) и юзабилити:

- **Тип тестирования:** Ручное тестирование.

**Как проверяется:**

E2E тест: Провести краткий анализ для оценки взаимодействия с сайтом в целом, вызывая различные компоненты и проверяя, насколько интуитивно понятен пользовательский опыт.

---

### Нагрузочное тестирование:

**Тип тестирования:** E2E.

**Как проверяется:**

E2E тест: Имитация пользовательского поведения под нагрузкой для тестирования производительности, учета времени отклика и обработки запросов. Это позволит оценить, как система справляется с высокой нагрузкой, симулируя реальные сценарии использования (спросить у зоопарка, сколько пользователей в среднем находится на сайте и покупает билеты).