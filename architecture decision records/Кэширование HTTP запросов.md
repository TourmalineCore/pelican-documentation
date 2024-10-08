# Кэширование HTTP запросов

## Статус
Предложенный

## Контекст
Next.js из под коробки кэширует fetch запросы при условии, что мы деплоим в vercel. Поскольку мы не будет деплоить в vercel, нам необходимо кэшировать запросы.
[Ссылка на статью](https://habr.com/ru/articles/801143/)
[Документация next js](https://nextjs.org/docs/app/building-your-application/caching)

## Решение
Плагин [Rest Cache](https://market.strapi.io/plugins/strapi-plugin-rest-cache) (MIT) позволяет кэшировать HTTP запросы и настраивать время жизни кэша.

Данный плагин кэширует только запросы для админки Strapi, он не кэширует запросы для клиентской части.
По умолчанию используется стратегия кэширования LRU (Least Recently Used) – стратегия вытеснения, которая опирается на время последнего использования записи. Она удаляет записи, у которых время последнего использования старше остальных. Таким образом, в кэше остаются записи, которые использовались недавно.


## Последствия
Не подойдет для клиентской части.

## Минусы
Кэширует запросы только для админки Strapi, но не для клиентской части приложения.


[Статья про кэширование](https://habr.com/ru/articles/734660/)

[Настройка плагина](https://strapi.io/blog/caching-in-strapi-with-rest-cache-plugin)