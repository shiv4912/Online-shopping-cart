let cart = [];

fetch("http://localhost:8080/products")
  .then(res => res.json())
  .then(data => {
    const productsDiv = document.getElementById("products");
    data.forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = `${p.name} - ₹${p.price} 
        <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>`;
      productsDiv.appendChild(div);
    });
  });

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.innerText = `${item.name} - ₹${item.price}`;
    cartDiv.appendChild(div);
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}
