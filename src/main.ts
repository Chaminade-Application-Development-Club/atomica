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
import VueGAPI from "./api/VueGAPI";
import firebase from "firebase";
//const VueGAPI = require("vue-gapi");
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
Vue.use(VueGAPI, gapiConfig);

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

//console.log(VueGAPI);


/**
 * https://docs.google.com/spreadsheets/d/e/2PACX-1vShPLKlmzyCODOTAM0K2YzOy5FVqmf1T1v2XYUGnohZ0aAhrn-UsoPu32xNGrgOHv1EOr7KzIEpB9UA/pubhtml?gid=2034026116&single=true
 *
 *https://docs.google.com/spreadsheets/d/e/2PACX-1vShPLKlmzyCODOTAM0K2YzOy5FVqmf1T1v2XYUGnohZ0aAhrn-UsoPu32xNGrgOHv1EOr7KzIEpB9UA/pubhtml?gid=1992208139&single=true
 *
 *https://docs.google.com/spreadsheets/d/e/2PACX-1vShPLKlmzyCODOTAM0K2YzOy5FVqmf1T1v2XYUGnohZ0aAhrn-UsoPu32xNGrgOHv1EOr7KzIEpB9UA/pubhtml?gid=648631773&single=true
 */
