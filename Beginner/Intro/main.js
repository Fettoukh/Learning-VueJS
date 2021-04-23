var app = new Vue({
  el: "#app", //connect to div with id app in our index.js
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    image: "./images/vmSocks-green-onWhite.jpg",
    inStock: true,
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./images/vmSocks-green-onWhite.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./images/vmSocks-blue-onWhite.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function (variantImage) {
      this.image = variantImage;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
  },
});
