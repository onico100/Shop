const getProduct = (products) => {
  return `
    <div class="products">
    <h2>${products.title}</h2>
    <p>${products.price}</p>
    </div>`;
};

const renderProducts = (products) => {
  let htmlProducts = products.map((product) => getProduct(product)).join("");
  document.getElementById("prod-area").innerHTML = htmlProducts;
};
