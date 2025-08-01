const products = [
  {
    id: 1,
    name: "Dell Inspiron Laptop",
    price: 749.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRh5c_zaq65FtJFktXmylQhu0pIa0Uq9y0WvleS1ZV_0No0uK6InZazOaBIhYsPDCTd1j6ySrLezd6AVfLlyn556G-08igdKBbhyVgixQs"
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 999.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgbJAs0zIf1TyFM-RkkLdmF7EoVbs3FWMqi4R8bS1D13AmSzsA6EMIID9hFzpEKic2slDxh77y-hnhbvNAGGrl45zM21hHkiHcWFRsS2kX3YWkDMvnpvBqag"
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch",
    price: 199.99,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6TMk3ecFrNHWaOUTuEi3ONYLrdW2tpFPHnA2UVg-HZHAEje3x5j09oEZoSSwDkPhyEQprdT81LJGR8Hw9DeaugbP_-IN2GKi7eqI8uL2yd5IG3MLVUieV6Q"
  },
  {
    id: 4,
    name: "HP Pavilion Laptop",
    price: 699.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSme79kVfuUhfC5qQaNXoWZrWiT5bFeo_utfDgsucfre-INWZfPk95-C6SrL7ENtNka7LxiOt9N9E11a1J1nAPQibitR9prQGi_pfm63S3HUiRn31BEbpnflg"
  },
  {
    id: 5,
    name: "OnePlus 12",
    price: 849.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRiNCbul6fEeGPedSlWLeynCD57AFpm-c8osxoyWx9jju5TC0kEvP_fRjYMOOnvHeVEf_AomjUrxNxTTCpdheMwBLj-NPVe2iMg9F1S2BI3tJ54I0oKBt4T"
  },
  {
    id: 6,
    name: "Fossil Smartwatch",
    price: 149.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnpg318ZipzN8l-vv7zr6LagxWzEr_zPfaXkw-ni2uZUlq8_uvBUPk0Ej5ypegchamFyjFKXHNYC8vJi7lS-8flQwQXavcTI_OWhJdHK8w"
  },
  {
    id: 7,
    name: "Sony WH-1000XM5 Headphones",
    price: 299.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRL5-NA6DSRVYYwY3X5O8tL0AV24Z1YqorqN9VNY-8ZLVWBI1qklFaYCuK211rlY7bDF_2q7ffuN7f3CfKkpLYBTTyHHXb5S0sqV9v3rlClPryMLwrq0SH6Q"
  },
  {
    id: 8,
    name: "Apple MacBook Air",
    price: 1199.99,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRpNSy8Kb1mlt3j33qTLytZpH4EQqQm-6k9qUd4kzK7rVI41Wcz0Iut26XwyomdWSKPiSpQ60JbO8TSvYvjeo9b5SYT0SzynyW8EeIDc0n"
  },
  {
    id: 9,
    name: "Samsung Galaxy S24",
    price: 1099.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ81KbrEd2SfHLMEAdoKWGBKkOAvPXgmhzWXW8XqTHs7O_9UU5qhfYxz19sSvVQ4oTJo3gbMrUCoQZryNGvBaf_yh0OSGUXHGfcaiz0onXcEazsaWAzztpggg"
  }
];

const cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // clear existing
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalSpan = document.getElementById("total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalSpan.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

// Initialize
displayProducts();
