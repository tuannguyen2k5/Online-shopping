import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faShoppingCart, faCog, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faShoppingCart, faCog, faPhone)
library.add(faFacebook, faGooglePlus, faTwitter, faInstagram, faPinterest)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
