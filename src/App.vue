<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__logo">
            <a href="#logo" class="header__logo-link"></a>
            <img src="./assets/images/logo.png" class="header__logo-image" />
          </div>
          <div class="header__right">
            <ul class="header__right-menu">
              <li class="menu__item">
                <a href="#">Home</a>
                <div class="sub__menu">
                  <div class="row">
                    <Menu
                      v-for="(menu, index) in menus"
                      :key="index"
                      :menu="menu"
                      class="col-3"
                    >
                    </Menu>
                  </div>
                </div>
              </li>
              <li class="menu__item"><a href="#">Pages</a></li>
              <li class="menu__item"><a href="#">Shop</a></li>
              <li class="menu__item"><a href="#">Feature</a></li>
              <li class="menu__item"><a href="#">Blog</a></li>
            </ul>
            <ul class="header__right-icon">
              <li class="icon__search icon--ml icon--item">
                <font-awesome-icon :icon="['fas', 'search']" />
              </li>
              <li class="icon__cart icon--ml icon--item">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
              </li>
              <li class="icon__setting icon--ml icon--item">
                <font-awesome-icon icon="cog" />
              </li>
            </ul>
          </div>
        </div>
        <Slider></Slider>
      </div>
    </div>
    <TopProduct></TopProduct>
    <Product></Product>
    <IconSupport></IconSupport>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import TopProduct from "./components/TopProduct";
import Product from "./components/Product";
import IconSupport from "./components/IconSupport";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Menu,
    Slider,
    TopProduct,
    Product,
    IconSupport,
    Footer,
  },
  data() {
    return {
      menus: [
        { content: "Home1" },
        { content: "Home2" },
        { content: "Home3" },
        { content: "Home4" },
        { content: "Home5" },
      ],
    };
  },
};
</script>

<style>
.btn {
  color: #fff;
  display: inline-block;
  padding: 9px 25px;
  text-align: center;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background: transparent;
  position: relative;
  background-color: #111111;
  font-size: 12px;
  border: none;
}
.btn:hover {
  background-color: #c99947;
}
</style>
