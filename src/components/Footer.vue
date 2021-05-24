<template>
  <div class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="row">
          <div class="col-md-4">
            <div class="footer__top-contact widget">
              <span class="text-primary PlayfairDisplay">Talk to us now!</span>
              <h3 class="widget--title">Contact us</h3>
              <div class="contact__content">
                <p class="contact__content-address">
                  Dai hoc tai chinh,Nam Tu Liem,Ha Noi
                </p>
                <p class="contact__content-phone">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  0123456789
                </p>
                <p>Copyright @ Nguyen Tien Tuan</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer__top-product widget">
              <span class="text-primary PlayfairDisplay">Talk to us now!</span>
              <h3 class="widget--title">Our product</h3>
              <ul class="product__content">
                <li class="product__content-item">
                  <a href="#">About us</a>
                </li>
                <li class="product__content-item">
                  <a href="#">Order History</a>
                </li>
                <li class="product__content-item">
                  <a href="#">Returns</a>
                </li>
                <li class="product__content-item">
                  <a href="#">Blog</a>
                </li>
                <li class="product__content-item">
                  <a href="#">Term & Condition</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer__top-social widget">
              <span class="text-primary PlayfairDisplay">Talk to us now!</span>
              <h3 class="widget--title">Follow us</h3>
              <div class="social__list">
                <a href="#">
                  <font-awesome-icon
                    :icon="{ prefix: 'fab', iconName: 'facebook' }"
                  />
                </a>
                <a href="#">
                  <font-awesome-icon
                    :icon="{ prefix: 'fab', iconName: 'twitter' }"
                  />
                </a>
                <a href="#">
                  <font-awesome-icon
                    :icon="{ prefix: 'fab', iconName: 'google-plus' }"
                  />
                </a>
                <a href="#">
                  <font-awesome-icon
                    :icon="{ prefix: 'fab', iconName: 'instagram' }"
                  />
                </a>
                <a href="#">
                  <font-awesome-icon
                    :icon="{ prefix: 'fab', iconName: 'pinterest' }"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom-head">
          <span>We accept</span>
          <span class="PlayfairDisplay">Online Payment Be Secured</span>
        </div>
        <div class="footer__bottom-list">
          <a href="#"
            ><img src="../assets/images/payments/visa.png" alt=""
          /></a>
          <a href="#"
            ><img src="../assets/images/payments/paypal.png" alt=""
          /></a>
          <a href="#"
            ><img src="../assets/images/payments/citibank.png" alt=""
          /></a>
          <a href="#"
            ><img src="../assets/images/payments/discover.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.footer {
  background-color: #111111;
  padding-top: 50px;
}

.footer .footer__top .widget {
  text-align: center;
}
.footer .footer__top .widget .widget--title::after {
  content: "";
  width: 23px;
  height: 6px;
  background: url(../assets/images/driver.png) no-repeat center center;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}
.footer .footer__top .widget .widget--title {
  font-size: 19px;
  color: #eeeeee;
  margin-bottom: 30px;
}
.footer .footer__top .footer__top-contact .contact__content-phone {
  color: #fff;
}
.footer .footer__top .footer__top-social .social__list > a {
  display: inline-block;
  width: 44px;
  height: 44px;
  line-height: 44px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  margin: 0 3px;
  color: #2c2c2c;
  text-align: center;
  font-size: 24px;
  background-color: #fff;
  margin-bottom: 10px;
}
.footer .footer__top .footer__top-social .social__list > a:hover {
  background-color: #c99947;
}
.footer .footer__bottom {
  padding: 40px 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(25, 25, 25, 0.9);
  text-align: center;
  font-size: 12px;
}
.footer .footer__bottom .footer__bottom-head,
.footer .footer__bottom .footer__bottom-list {
  display: inline-block;
}
.footer .footer__bottom .footer__bottom-head {
  padding-right: 100px;
}
.footer .footer__bottom .footer__bottom-head span:first-child {
  display: block;
  font-size: 11px;
  color: #fff;
  text-transform: uppercase;
}
.footer .footer__bottom .footer__bottom-list a {
  padding: 0 25px;
  float: left;
}
</style>
