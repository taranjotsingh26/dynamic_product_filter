const products = [
  { name: "Laptop", price: 55000 },
  { name: "Smartphone", price: 25000 },
  { name: "Headphones", price: 2000 },
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "Monitor", price: 12000 }
];

const productGrid = document.getElementById("productGrid");
const filter = document.getElementById("filter");

function displayProducts(productList) {
  productGrid.innerHTML = "";

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
    `;

    productGrid.appendChild(card);
  });
}

filter.addEventListener("change", () => {
  let sortedProducts = [...products];

  if (filter.value === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (filter.value === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
});

displayProducts(products);
