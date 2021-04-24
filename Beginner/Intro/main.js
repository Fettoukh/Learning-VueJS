Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image"> <!--we bind the attribute to the expression "variable image"-->
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>

        <!-- Conditionnal rendering -->

        <!-- <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p> -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping : {{shipping}}</p>
      
        <!-- List Rendering -->

        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
  
        <div v-for="(variant , index) in variants" 
          :key="variant.variantId"
          class="color-box"
          :style="{backgroundColor : variant.variantColor}"
          @mouseover ="updateProduct(index)"
        >
          <p></p>
        </div>

        <button v-on:click="addToCart" 
              :disabled= "!inStock"
              :class="{disabledButton : !inStock}"
              
        >
          Add to Cart
        </button>
      </div>                
    </div> `,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      inventory: 100,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./images/vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./images/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      // To communicate the event to parent / Passing a method
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99 + " $";
    },
  },
});

var app = new Vue({
  el: "#app", //connect to div with id app in our index.js
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart: function (id) {
      this.cart.push(id);
    },
  },
});
