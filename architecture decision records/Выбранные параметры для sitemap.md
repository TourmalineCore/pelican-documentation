# Выбранные параметры для sitemap

Подробнее о sitemap и ее конфигурации можно узнать [тут](../different/Robots.txt%20и%20sitemap/Robots.txt%20и%20sitemap.md)

> Поле `Last Modified` есть только для коллекций.

1. Главная страница ('/')
 - Priority: 1.0 // Главная страница всегда должна иметь 1.0
 - Change Frequency: Daily // На главной странице есть дата санитарного дня которая автоматически обновляется

2. Контактного зоопарка ('/contact-zoo')
 - Priority: 0.9 // Важная страница
 - Change Frequency: Weekly 

3. Льготы ('/discounts')
 - Priority: 0.9 // Важная страница, люди очень часто ищут свою категорию льгот
 - Change Frequency: Weekly  

4. Новости ('/news')
 - Priority: 0.8 // Важная страница, на которую часто добавляют новый контент
 - Change Frequency: Daily // Часто добавляют новые новости

5. Правила посещения ('/visiting-rules')
 - Priority: 0.8 // Правила посещения важная страница
 - Change Frequency: Weekly

6. Выбранная новость ('/news/[slug]')
 - Priority: 0.7 // Выбранная новость важна, но не так сильно как список новостей
 - Change Frequency: Weekly
 - Last Modified: true 
 
7. Документы ('/documents')
 - Priority: 0.5 // Второстепенная страница 
 - Change Frequency: Weekly 

8. Выбранная категория документов ('/documents/[slug]')
 - Priority: 0.4 // Подкатегория второстепенной страницы документов 
 - Change Frequency: Weekly
 - Last Modified: true 

 