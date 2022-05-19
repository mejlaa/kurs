const fetch = require("node-fetch");
const randomQuoteFromAuthor = async (author) => {
  try {
    const checkedAuthor = await authorCheck(author);

    if (!checkedAuthor) {
      return "That author doesn't exist";
    }

    const response = await fetch(
      `https://api.quotable.io/random${
        checkedAuthor ? `?author=${checkedAuthor}` : ""
      }`
    );
    const result = await response.json();

    return console.log(result.content + "; author: " + result.author);
  } catch (error) {
    console.log(error);
  }
};

const authorCheck = async (author) => {
  try {
    const response = await fetch(
      `https://api.quotable.io/search/authors?query=${author}`
    );
    const result = await response.json();

    if (result.count < 1) {
      return false;
    }

    return result.results[0].name;
  } catch (error) {
    console.log(error);
  }
};

const getQuotes = async (page) => {
  try {
    const response = await fetch(
      `https://api.quotable.io/quotes?page=${page || sortBy ? "?" : ""}${
        page ? `?page${page}` : ""
      }`
    );
    const result = await response.json();
    // console.log(result.results);
    return result.results;
  } catch (error) {
    console.log(error);
  }
};

//ispisuje 20 quotes

getQuotes(5).then((result) => {
  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    console.log(element.content + " by: " + element.author);
  }
});
