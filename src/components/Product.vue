<template>
  <div class="container">
    <div class="product">
      <div class="product__category">
        <h2>Product</h2>
      </div>
      <div class="product__list">
        <div class="row">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="product__list-item col-md-3"
          >
            <img :src="product.img" alt="" class="item__img" />
            <h4 class="item__text">{{ product.name }}</h4>
            <a href="#" class="btn">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          name: "San pham 1",
          img: require("../assets/images/products/product1.jpg"),
        },
        {
          name: "San pham 2",
          img: require("../assets/images/products/product2.jpg"),
        },
        {
          name: "San pham 3",
          img: require("../assets/images/products/product3.jpg"),
        },
        {
          name: "San pham 4",
          img: require("../assets/images/products/product4.jpg"),
        },
        {
          name: "San pham 5",
          img: require("../assets/images/products/product5.jpg"),
        },
        {
          name: "San pham 6",
          img: require("../assets/images/products/product6.jpg"),
        },
        {
          name: "San pham 7",
          img: require("../assets/images/products/product7.jpg"),
        },
        {
          name: "San pham 8",
          img: require("../assets/images/products/product8.jpg"),
        },
      ],
    };
  },
};
</script>
<style>
.product {
  margin-top: 60px;
  margin-bottom: 60px;
}
.product__category > h2 {
  text-align: center;
  padding: 20px;
}
.product .product__list .product__list-item {
  margin-bottom: 20px;
}
.product .product__list .product__list-item:hover > .item__img {
  opacity: 0.7;
}
.product .product__list .product__list-item .item__text {
  font-size: 20px;
  font-weight: 100;
}
</style>