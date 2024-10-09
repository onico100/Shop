const getProduct = (product) => {
  return `
    <div class="product">
    <h2 class="prod-title">${product.title}</h2>
    <img src="images/02.jpg" alt="${product.title}" class="prod-image" />
    <p>${product.price}</p>
    </div>`;
};

const renderProducts = (products) => {
  let htmlProducts = products.map((product) => getProduct(product)).join("");
  document.getElementById("prod-area").innerHTML = htmlProducts;
};
