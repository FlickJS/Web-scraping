let getItems = JSON.parse(window.localStorage.getItem("element"));
let data;

(() => {
  getItems ? data = {products: [...getItems.products]} : data = {products: []};
  class Item {
    constructor(website, title, price, brand, image) {
      this.website = website;
      this.title = title;
      this.price = price;
      this.brand = brand;
      this.image = image;
    }
  }
  const website = document.location.origin + document.location.pathname;
  const title = document.querySelector("meta[property='og:title']").getAttribute("content");
  const price = document.querySelector("meta[property='product:price:amount']").getAttribute("content");
  const brand = document.querySelector("meta[property='product:brand']").getAttribute("content");
  const image = document.querySelector("meta[name='og:image']").getAttribute("content");
  if (website && title && price && brand && image) {
    data.products.push(new Item(website, title, price, brand, image));
    window.localStorage.setItem("element", JSON.stringify(data));
  } else {
    console.error("Missing data");
  }
})();