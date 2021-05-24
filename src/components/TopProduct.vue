<template>
  <div class="container">
    <div class="topProduct">
      <div class="topProduct__category">
        <h2>Top Selling</h2>
      </div>
      <div class="topProduct__item">
        <div class="row">
          <div class="col-md-6">
            <img
              src="http://kute-themes.com/html/boutique/html/images/b/2.jpg"
              alt=""
              class="topProduct__item-imgBig"
            />
          </div>
          <div class="col-md-6">
            <div class="row">
              <div
                v-for="(topProduct, index) in topProducts"
                :key="index"
                class="topProduct__item-list col-md-6"
              >
                <img
                  :src="topProduct.img"
                  alt=""
                  class="topProduct__item-img"
                />
                <h4 class="list__content">{{ topProduct.name }}</h4>
                <a href="#" class="btn">Add to cart</a>
              </div>
            </div>
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
      topProducts: [
        {
          name: "San pham 1",
          img: require("../assets/images/topProducts/topProduct1.jpg"),
        },
        {
          name: "San pham 2",
          img: require("../assets/images/topProducts/topProduct2.jpg"),
        },
        {
          name: "San pham 3",
          img: require("../assets/images/topProducts/topProduct3.jpg"),
        },
        {
          name: "San pham 4",
          img: require("../assets/images/topProducts/topProduct1.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.topProduct {
  margin-top: 60px;
}
.topProduct__category > h2 {
  text-align: center;
  padding: 20px;
}
.topProduct__item .topProduct__item-imgBig {
  height: 100%;
}
.topProduct__item .topProduct__item-list {
  margin-bottom: 20px;
}
.topProduct__item .topProduct__item-list:hover > .topProduct__item-img {
  opacity: 0.7;
}

.topProduct__item .topProduct__item-list .list__content {
  font-size: 20px;
  font-weight: 100;
}
</style>