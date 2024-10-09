const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const getProduct = (product) => {
  const imageUrl = getRandomImage();
  return `
    <div class="product">
    <div class="prod-title-box">
      <h2 class="prod-title">${product.title}</h2>
    </div>
      <img src="${imageUrl}" alt="${product.title}" class="prod-image" />
    <p>${product.price}</p>
    </div>`;
};

const renderProducts = (products) => {
  let htmlProducts = products.map((product) => getProduct(product)).join("");
  document.getElementById("prod-area").innerHTML = htmlProducts;
};

