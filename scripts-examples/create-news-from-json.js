/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */

// This script is for create news in strapi from json (from last to first item of array)
// without refactoring
// and for now without seo mata tags (they are commented)

// to run enter command in terminal:
// node create-news-from-json.js
// dont forget to add file to tsconfig.json:
// "include": ["create-news-from-json.js"]

const fs = require(`fs`);
const axios = require(`axios`);

const NEWS_API_ENDPOINT = `${process.env.API_URL || `http://localhost:1337/api`}/news`;

async function createNewsFromJson() {
  try {
    const data = fs.readFileSync(`zoo_news_archive.json`, `utf8`);
    const newsArray = JSON.parse(data);

    for (let i = newsArray.length - 1; i >= 0; i--) {
      const news = newsArray[i];

      const {
        title, text, metaTags,
      } = news;

      const description = (metaTags.description === `-` || metaTags.description === `*`)
        ? ``
        : metaTags.description || ``;

      await createTestNews({
        title,
        description,
        innerContent: text,
        // seo: {
        //   metaTitle: metaTags.title || ``,
        //   metaDescription: metaTags.description || ``,
        // },
      });
    }

    console.log(`All news successfully created!`);
  } catch (error) {
    console.error(`Error creating news:`, error.message);
  }
}

async function createTestNews({
  title,
  description,
  innerContent,
  // seo,
}) {
  try {
    const response = await axios.post(NEWS_API_ENDPOINT, {
      data: {
        title,
        description,
        innerContent,
        // seo,
      },
    });

    if (response.status !== 201) {
      throw new Error(`Error creating news: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Failed to create news: ${(error).message}`);
  }
}

createNewsFromJson();
