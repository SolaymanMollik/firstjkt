import * as productData from "./product-data.js";

let data = productData.productList;

let productPreviewSec = document.getElementById("product-preview-section");
let imgThumbDiv = document.getElementById("img-thumb-div");

let productId = localStorage.getItem("product-preview-id");
let product = data.filter((x) => x.id == productId)[0];

/**
 * add all heading
 */
let desBangla = document.getElementById("des-bangla");
let desEng = document.getElementById("des-Eng");
let price = document.getElementById("price");
desEng.innerHTML = product.desEng;
desBangla.innerHTML = product.desBangla;
price.innerHTML = product.price + " ৳";

/**
 * product quantity set
 */

let itemQuntity = document.getElementById("product-quntity");
let minus = document.getElementById("count-plus");
let plus = document.getElementById("count-minus");
let count = 1;
itemQuntity.innerHTML = count;
plus.addEventListener("click", () => {
  count++;
  itemQuntity.innerHTML = count;
});
minus.addEventListener("click", () => {
  if (count > 1) {
    count--;
    itemQuntity.innerHTML = count;
  }
});

/**
 * make the image
 */

// img carusel start here
let mainImg = document.getElementById("main-image");
let imgThumb = document.querySelectorAll(".img-thumb");
imgThumb.forEach((img) => {
  img.addEventListener("click", () => {
    mainImg.src = img.src;
  });
});

/**
 * img thumb set here
 */
let longDes = document.getElementById("long-des");
let text = product.longDes;
const lines = text.trim().split("\n");

lines.forEach((line) => {
  const p = document.createElement("p");
  p.textContent = line.trim();
  longDes.appendChild(p);
});
