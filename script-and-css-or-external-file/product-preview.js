import * as productData from "./product-data.js";

let data = productData.productList;

let productPreviewSec = document.getElementById("product-preview-sec");

let h1, price, text, image;

window.addEventListener("load", () => {
  const theFunction = () => {
    let id = localStorage.getItem("product-preview-id");
    data.forEach((data) => {
      if (data.id == id) {
        h1 = data.desEng + " <br/> " + data.desBangla;
        price = data.price;
        image = data.image;
        text = data.longDes;
      }
    });

    let html = `
  <div class="p-0 md:p-5 block md:grid place-items-center">
    <img src="${image}" alt="" class="w-full" />
  </div>
  <div class="grid place-items-center">
    <div class="w-[96%] mx-auto px-0 md:px-5">
      <h2 class="text-xl">${h1}</h2>
      <h3 class="text-3xl text-orange-500 mt-2"> ৳ ${price}</h3>
      <div class="p-5 flex gap-4">
        <div class="w-10 aspect-square border border-orange-500 cursor-pointer grid place-items-center text-2xl">-</div>
        <div class="grid place-items-center">1</div>
        <div class="w-10 aspect-square border border-orange-500 cursor-pointer grid place-items-center text-2xl">+</div>
      </div>
      <p id="delivery-date" class="mb-5">Delevery Date : 20 november - 22 november</p>
    </div>
  </div>
  <div id="add-to-cart-btn" class="py-3 w-full text-white bg-orange-500 grid place-items-center fixed bottom-0 left-0 cursor-pointer">
    Add To Cart
  </div>
  
  `;

    productPreviewSec.innerHTML = html;

    let previewDiv = document.getElementById("longDes");
    const lines = text.trim().split("\n");
    lines.forEach((line) => {
      const p = document.createElement("p");
      p.textContent = line.trim();
      previewDiv.appendChild(p);
    });
  };

  // the time out for the function fully load
  setTimeout(theFunction, 300);
});
