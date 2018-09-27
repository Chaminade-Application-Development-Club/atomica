import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from "./router";
import store from './store';
import './registerServiceWorker';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';

import firebase from "firebase/app";

const credential = require("@/api/credentials.json");

const apiKey = credential.config.apiKey;
const clientId = credential.web.client_id;
const scope = "https://www.googleapis.com/auth/spreadsheets.readonly";
const gapiConfig = {
  apiKey,
  clientId,
  scope,
};

Vue.config.productionTip = false;
Vue.use(Vuetify);

firebase.initializeApp(credential.config);
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/spreadsheets.readonly");
firebase.auth().useDeviceLanguage();
firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
