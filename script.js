const getItems = JSON.parse(window.localStorage.getItem("element"));
let dataItems;

class createItem {
  constructor(website, title, price, brand, image) {
    this.website = document.location.origin + document.location.pathname || "";
    this.title = document.querySelector("meta[property='og:title']")?.getAttribute("content") || "";
    this.price = document.querySelector("meta[property='product:price:amount']")?.getAttribute("content") || "";
    this.brand = document.querySelector("meta[property='product:brand']")?.getAttribute("content") || "";
    this.image = document.querySelector("meta[name='og:image']")?.getAttribute("content") || "";
  }
};
class scrapeWeb extends createItem {
  constructor(website, title, price, brand, image) {
    super(website, title, price, brand, image);
    this.#scraping();
  }

  #getData = () => {
    getItems ? dataItems = {products: [...getItems.products]} : dataItems = {products: []};
    const metaTags = [this.website, this.title, this.price, this.brand, this.image];
    return metaTags;
  }

  #savaData = (metaTags) => {
    for (let i = 0; i < metaTags.length; i++) {
      if (metaTags[i] === "") {
        return console.log(`Item of index ${[i]} is empty string. Missing data.`);
      }
    }
    dataItems.products.push(new createItem(...metaTags));
    window.localStorage.setItem("element", JSON.stringify(dataItems));
  }
  
  #scraping = () => {
    const metaTags = this.#getData();
    this.#savaData(metaTags);
    console.log(`The scraping was successful, your item will be stored in your local storage in an object named dataItems.`);
  };
}

const initItem = new scrapeWeb();

