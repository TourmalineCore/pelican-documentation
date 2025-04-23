// in this repo you can't run it, this is just an example for the future

// This is one-time script for find end duplicates in news archive, without refactoring

// to run enter command in terminal:
// node find-end-duplicates.js
// dont forget to add file to tsconfig.json:
// "include": ["find-end-duplicates.js"]

const fs = require(`fs`);

fs.readFile(`zoo_news_archive.json`, `utf8`, (data) => {
  const jsonData = JSON.parse(data);
  const urlCounts = {};

  jsonData.forEach((item) => {
    const {
      url,
    } = item;

    const lastSlashIndex = url.lastIndexOf(`/`);
    const secondLastSlashIndex = url.lastIndexOf(`/`, lastSlashIndex - 1);

    const urlEnd = url.substring(secondLastSlashIndex);

    if (urlCounts[urlEnd]) {
      urlCounts[urlEnd]++;
    } else {
      urlCounts[urlEnd] = 1;
    }
  });

  const resultArray = Object.entries(urlCounts)
    .filter(([_, count]) => count > 1)
    .map(([urlEnd, count]) => ({
      urlEnd,
      count,
    }));

  fs.writeFileSync(`url_counts.json`, JSON.stringify(resultArray, null, 2));
});
