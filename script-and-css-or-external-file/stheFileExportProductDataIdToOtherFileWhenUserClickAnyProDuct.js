let sec = document.getElementById("main-product-section");

const getId = () => {
  let product = document.querySelectorAll(".product");
  product.forEach((pro) => {
    const clicked = (x) => {
      let target = x.target.parentElement.parentElement.childNodes;
      let exportProdactId = target[target.length - 1].innerHTML;
      localStorage.setItem("product-preview-id", exportProdactId);
      window.location.href = "./product-preview.html";
    };
    pro.addEventListener("click", (x) => clicked(x));
  });
};

sec.addEventListener("mouseenter", (x) => {
  getId();
});
sec.addEventListener("touchend", (x) => {
  getId();
});
