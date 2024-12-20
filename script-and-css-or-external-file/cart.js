/**
 *
 * @param {search} key search key
 * @param {*} description description
 * @param {*} price price
 */
function ProductMakeFunction(key, description, price, id) {
  this.key = key;
  this.description = description;
  this.price = price;
  this.id = id;
}
let product = [
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150,
    10.203
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    300,
    2
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    500,
    3
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150,
    5
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150,
    6
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150,
    7
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150,
    8
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150,
    9
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150,
    10
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),

  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction("pizza", "A tasty ce", 150),
  new ProductMakeFunction("briani", "", "solayman is a good boy"),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction("pizza", "A tasty ce", 150),
  new ProductMakeFunction("briani", "", "solayman is a good boy"),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
  new ProductMakeFunction(
    "pizza",
    "A tasty pizza made by our tecnology jhalakati home develivary dervice",
    150
  ),
];

const cartSection = document.querySelector("#main-cart-section");

for (let i = 0; i < product.length; i++) {
  let makeDiv = document.createElement("div");
  makeDiv.classList.add("product");
  makeDiv.classList.add("relative");
  makeDiv.innerHTML = `
  <img class="product-img" src="image/1000.webp" />
  <div>
     <p class="p-2">${product[i].description}</p>
     <p class="p-2 price-p price">${product[i].price}$</p>
  </div>
  <div class="cart-love p-2"><input type="checkbox" value="checkedValue" class="check-box-cart absolute left-1 bottom-1" /></div>
  <span class="hidden">${product[i].id}<span/>`;

  cartSection.appendChild(makeDiv);
}
