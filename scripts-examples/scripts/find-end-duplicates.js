// in this repo you can't run it, this is just an example

// This is a one-time script for finding duplicates of last segment of the URLs. 
// e.g. /puma-running, puma-running is our last segment

// without refactoring

// to run, enter command in terminal:
// node find-end-duplicates.js
// don't forget to add file to tsconfig.json:
// "include": ["find-end-duplicates.js"]

const fs = require(`fs`);

fs.readFile(`zoo_news_archive.json`, `utf8`, (err, data) => {
  const jsonData = JSON.parse(data);
  const urlCounts = {};

  if (err) {
    console.error(`Ошибка при чтении файла:`, err);
    return;
  }

  jsonData.forEach((item) => {
    const {
      url,
    } = item;

    const lastSlashIndex = url.lastIndexOf(`/`);
    const secondLastSlashIndex = url.lastIndexOf(`/`, lastSlashIndex - 1);

    const lastSegment = url.substring(secondLastSlashIndex);

    if (urlCounts[lastSegment]) {
      urlCounts[lastSegment]++;
    } else {
      urlCounts[lastSegment] = 1;
    }
  });

  const resultArray = Object.entries(urlCounts)
    .filter(([_, count]) => count > 1)
    .map(([lastSegment, count]) => ({
      lastSegment,
      count,
    }));

  fs.writeFileSync(`url_counts.json`, JSON.stringify(resultArray, null, 2));
});
