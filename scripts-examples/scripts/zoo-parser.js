/* eslint-disable no-await-in-loop */

// in this repo you can't run it, this is just an example

// This is one-time script for parsing the news archive from chelzoo.ru, without refactoring

// to run enter command in terminal:
// node zoo-parser.js
// dont forget to add file to tsconfig.json:
// "include": ["zoo-parser.js"]

const {
  chromium,
} = require(`playwright`);
const fs = require(`fs`);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`http://chelzoo.ru/news/archive/`);

  const newsArchive = [];

  const selectedYear = await page.$$eval(`.cntmn .selected a`, (elements) => elements.map((el) => el.innerText.trim()));
  const years = await page.$$eval(`.cntmn .btn a`, (elements) => elements.map((el) => el.innerText.trim()));

  for (const year of selectedYear) {
    await page.click(`.cntmn .selected a:has-text("${year}")`);
    await page.waitForTimeout(1000);

    const newsItems = await page.$$eval(`.news-arch .row`, async (items) => {
      const newsData = [];
      for (const item of items) {
        const title = item.querySelector(`.cell.text a`).innerText.trim();
        const dateText = item.querySelector(`.cell.date`).innerText.trim();

        const [
          day,
          month,
          year,
        ] = dateText.split(`.`)
          .map(Number);
        const date = `${year}-${String(month)
          .padStart(2, `0`)}-${String(day)
            .padStart(2, `0`)}`;

        const link = item.querySelector(`.cell.text a`)
          .getAttribute(`href`);

        const response = await fetch(link);
        const newsPage = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(newsPage, `text/html`);

        const text = doc.querySelector(`.text`).innerText.trim()
          .replace(/\n/g, ` `);

        const url = doc.querySelector(`meta[property="og:url"]`)
          ?.getAttribute(`content`) || ``;

        const metaTags = {
          title: doc.querySelector(`meta[property="og:title"]`)
            ?.getAttribute(`content`) || ``,
          description: doc.querySelector(`meta[property="og:description"]`)
            ?.getAttribute(`content`) || ``,
        };

        newsData.push({
          year,
          date,
          title,
          text,
          url,
          metaTags,
        });
      }
      return newsData;
    });

    if (newsItems.length > 0) {
      newsArchive.push(...newsItems);
    }

    await page.goBack();
    await page.waitForTimeout(1000);
  }

  for (const year of years) {
    await page.click(`.cntmn .btn a:has-text("${year}")`);
    await page.waitForTimeout(1000);

    const newsItems = await page.$$eval(`.news-arch .row`, async (items) => {
      const newsData = [];
      for (const item of items) {
        const title = item.querySelector(`.cell.text a`).innerText.trim();
        const dateText = item.querySelector(`.cell.date`).innerText.trim();

        const [
          day,
          month,
          year,
        ] = dateText.split(`.`)
          .map(Number);
        const date = `${year}-${String(month)
          .padStart(2, `0`)}-${String(day)
            .padStart(2, `0`)}`;

        const link = item.querySelector(`.cell.text a`)
          .getAttribute(`href`);

        const response = await fetch(link);
        const newsPage = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(newsPage, `text/html`);

        const text = doc.querySelector(`.text`).innerText.trim()
          .replace(/\n/g, ` `);

        const url = doc.querySelector(`meta[property="og:url"]`)
          ?.getAttribute(`content`) || ``;

        const metaTags = {
          title: doc.querySelector(`meta[property="og:title"]`)
            ?.getAttribute(`content`) || ``,
          description: doc.querySelector(`meta[property="og:description"]`)
            ?.getAttribute(`content`) || ``,
        };

        newsData.push({
          year,
          date,
          title,
          text,
          url,
          metaTags,
        });
      }
      return newsData;
    });

    if (newsItems.length > 0) {
      newsArchive.push(...newsItems);
    }

    await page.goBack();
    await page.waitForTimeout(1000);
  }

  fs.writeFileSync(`zoo_news_archive.json`, JSON.stringify(newsArchive, null, 2));

  await browser.close();
})();
