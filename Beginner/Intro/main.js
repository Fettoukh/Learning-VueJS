var app = new Vue({
  el: "#app", //connect to div with id app in our index.js
  data: {
    product: "Socks",
    image: "./images/vmSocks-green-onWhite.jpg",
    inStock: true,
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
      },
      {
        variantId: 2235,
        variantColor: "blue",
      },
    ],
    cart: 0,
  },
});
