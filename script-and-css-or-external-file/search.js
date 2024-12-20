import * as data from "./product-data.js";
let productData = data.productList,
  productKeyArr = data.keyArr;
/**
 * It is the main main search function
 * it made by fuse.js
 */
const mainSearchFunction = (key) => {
  let options = {
    keys: ["desEng", "desBangla", "category", "keyword"],
    threshold: 0.5,
  };
  const fuse = new Fuse(productData, options);
  return fuse.search(key);
};
// it works for filter key
const keySearchFunction = (key) => {
  let options = {
    threshold: 0.7,
  };
  const fuse = new Fuse(productKeyArr, options);
  return fuse.search(key);
};
/**
 * searchItemShowToUserFunc
 */ const section = document.querySelector("#main-product-section");
/**
 * This func get the most filter arr from other function
 *        ---------------------------------------  make div for each prodiuct
 * then the every div show to the section
 * @param {*} array the mostFilter item
 */ const mainSearchfunc = (array) => {
  localStorage.setItem("lastSearch", JSON.stringify(array));
  section.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let makeDiv = document.createElement("div");
    makeDiv.classList.add("product", "cursor-default", "pointer-events-auto");
    makeDiv.innerHTML = `<div class="bg-default"><img class="product-img" src="${array[i].item.image}" /></div><div><p class="p-2 des max-h-[3.9rem] overflow-y-hidden">${array[i].item.desEng}</p><p class="p-2 des max-h-[3.9rem] overflow-y-hidden">${array[i].item.desBangla}</p><p class="p-2 price-p price">${array[i].item.price}$</p></div><span class="hidden">${array[i].item.id}</span>`;
    section.appendChild(makeDiv);
  }
  if (array.length === 0)
    section.style.backgroundImage = `url("https://i.postimg.cc/RZv8JH1V/noresult-found.png")`;
  else section.style.backgroundImage = `url("")`;
};
let navSearchParadiv = document.getElementById("nav-filter-div");
/**
 *  the func recived the input value to show to the user the most filtered value para
 * @param {*} theInputvalue theInputValue
 */ const filterFunc = (theInputvalue) => {
  navSearchParadiv.innerHTML = "";
  if (theInputvalue.trim() !== "") {
    const filteredProductArr = keySearchFunction(theInputvalue);
    filteredProductArr.forEach((key) => {
      const html = key.item;
      let newPara = document.createElement("p");
      newPara.classList.add("filterPara");
      newPara.innerHTML = html;
      navSearchParadiv.appendChild(newPara);
    });
  }
  /**
   * the function filter and give a arr when user click a para
   */ const makefilterArr = (e) => {
    let filterItem = mainSearchFunction(e.trim());
    mainSearchfunc(filterItem);
  };
  /**
   * the function add the click event to the each --> filter pare <-- (class)
   */ document.querySelectorAll(".filterPara").forEach((para) => {
    para.addEventListener("click", (e) => {
      navSearchParadiv.innerHTML = "";
      let a = mainSearchFunction(e.target.innerHTML);
      mainSearchfunc(a);
    });
  });
};
let inputValue = document.getElementById("search-input-field");
const search = () => {
  const makeProductArr = mainSearchFunction(inputValue.value.trim());
  navSearchParadiv.innerHTML = "";
  section.innerHTML = "";
  mainSearchfunc(makeProductArr);
};
document.getElementById("search-btn").addEventListener("click", () => search());
inputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") search();
});
inputValue.addEventListener("input", (e) => filterFunc(e.target.value));
mainSearchfunc(JSON.parse(localStorage.getItem("lastSearch")));
