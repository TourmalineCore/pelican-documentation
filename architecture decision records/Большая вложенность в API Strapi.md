# Большая вложенность в API Strapi

## Статус
Предложенный

## Контекст
По умолчанию в API Strapi имеется большая вложенность, что усложняет написание типов и получение необходимых данных.

## Решение
Плагин [Strapi Transformer](https://market.strapi.io/plugins/strapi-plugin-transformer) (MIT) позволяет избавиться от излишней вложенности.

### Api без плагина    
<pre>
 {
  "data": {
    "id": 1,
    <b>"attributes":</b> {
      "title": "Lorem Ipsum",
      "createdAt": "2022-02-11T01:51:49.902Z",
      "updatedAt": "2022-02-11T01:51:52.797Z",
      "publishedAt": "2022-02-11T01:51:52.794Z",
      "nestedBlock": {
        <b>"data":</b> {
          "id":2,
          <b>"attributes":</b> {
            "title": "Dolor sat",
            "createdAt": "2022-02-15T03:45:32.669Z",
            "updatedAt": "2022-02-17T00:30:02.573Z",
            "publishedAt": "2022-02-17T00:07:49.491Z",
          },
        },
      },
    },
  },
  "meta": {},
}
</pre>

### Api с плагином 
<pre>
{
<b>*Данная data не убирается</b>
  <b>"data":</b> {
     "id": 1,
     "title": "Lorem Ipsum",
     "createdAt": "2022-02-11T01:51:49.902Z",
     "updatedAt": "2022-02-11T01:51:52.797Z",
     "publishedAt": "2022-02-11T01:51:52.794Z",
     "nestedBlock": {
        "id":2,
         "title": "Dolor sat",
         "createdAt": "2022-02-15T03:45:32.669Z",
         "updatedAt": "2022-02-17T00:30:02.573Z",
         "publishedAt": "2022-02-17T00:07:49.491Z",
       },
  },
  "meta": {},
}
</pre>



## Альтернативы
Очищать лишнюю вложенность с помощью middleware или interceptor

### Плюсы:
- Гибкость настройки

### Минусы:
- Время на написание

## Последствия
Данное решение позволит упростить работу с API Strapi.

## Плюсы
Возможность точечной настройки.
Упрощение работы с API Strapi.

## Минусы
Не обнаружено.

### Ссылка на PR с инвестигейтом
https://github.com/TourmalineCore/strapi-poc/tree/feature/transformer-plugin