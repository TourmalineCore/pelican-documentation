# Получение Url для виджета покупки билетов

Яндекс предоставляет код, его на сайт вставлять не нужно, необходимо только получить ссылку и вставить ее в CMS. 

Исходный код
```js
<script>
    var dealerName = 'YandexTicketsDealer';
    var dealer = window[dealerName] = window[dealerName] || [];

    dealer.push(['setDefaultClientKey', '3bc42fbd-a832-49aa-a269-79188e18d9e1']);
    dealer.push(['setDefaultRegionId', 56]);

    (function () {
        var rnd = '?' + new Date().getTime() * Math.random();
        var script = document.createElement('script');
        var target = document.getElementsByTagName('script')[0];
        script.async = true;
        script.src = 'https://widget.afisha.yandex.ru/dealer/dealer.js' + rnd;
        target.parentNode.insertBefore(script, target);
    })();
</script>


<button onclick="window['YandexTicketsDealer'].push(['getDealer', function(dealer) { dealer.open({ id: 'ticketsteam-803@52941804', type: 'session' }) }])">Купить билеты</button>
```

Этот код необходимо вставить в любой тестовый проект и любым способ выполнить, чтобы открылся виджет в котором вы сможете скопировать URL.

Ниже представлен способ получения в проекте с next.js, но вы можете использовать что-то другое.


## Пример адаптации для next.js

1. В файл __documents добавьте:

```js
    <script
        dangerouslySetInnerHTML={{
            __html: `
            var dealerName = 'YandexTicketsDealer';
            var dealer = window[dealerName] = window[dealerName] || [];

            dealer.push(['setDefaultClientKey', '3bc42fbd-a832-49aa-a269-79188e18d9e1']);
            dealer.push(['setDefaultRegionId', 56]);

            (function () {
                var rnd = '?' + new Date().getTime() * Math.random();
                var script = document.createElement('script');
                var target = document.getElementsByTagName('script')[0];
                script.async = true;
                script.src = 'https://widget.afisha.yandex.ru/dealer/dealer.js' + rnd;
                target.parentNode.insertBefore(script, target);
            })();`,
        }}
    />
```

2. Добавьте кнопку на главную страницу:

```js
<button
    type="button"
    onClick={() => window.YandexTicketsDealer.push([
        `getDealer`,
        function (dealer) {
        dealer.open({
            id: `ticketsteam-803@52941804`,
            type: `session`,
        });
        },
    ])}
    >
    Купить билеты
</button>
```

3. Нажмите на кнопку, должен открыться виджет, скопируйте URL и добавьте его в необходимые места в CMS.