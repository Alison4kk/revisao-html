import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import InfoBox from './components/InfoBox.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App)
});

Vue.use(VueSweetalert2);
Vue.component('info-box', InfoBox);

app.$mount('#app')