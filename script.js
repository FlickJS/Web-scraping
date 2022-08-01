let getItems = JSON.parse(window.localStorage.getItem("element"));
let data;

class Item {
  constructor(website, title, price, brand, image) {
    this.website = website;
    this.title = title;
    this.price = price;
    this.brand = brand;
    this.image = image;
  }
}

const getData = () => {
  getItems ? data = {products: [...getItems.products]} : data = {products: []};
  const website = document.location.origin + document.location.pathname;
  const title = document.querySelector("meta[property='og:title']").getAttribute("content");
  const price = document.querySelector("meta[property='product:price:amount']").getAttribute("content");
  const brand = document.querySelector("meta[property='product:brand']").getAttribute("content");
  const image = document.querySelector("meta[name='og:image']").getAttribute("content");
  const metaTags = [website, title, price, brand, image];
  return metaTags;
};

const savaData = (metaTags) => {
  for (let i = 0; i < metaTags.length; i++) {
    if (metaTags[i] === "") {
      console.error("Missing data");
    }
  }
  data.products.push(new Item(...metaTags));
  window.localStorage.setItem("element", JSON.stringify(data));
};

const scraping = () => {
  const metaTags = getData();
  savaData(metaTags);
};

scraping();