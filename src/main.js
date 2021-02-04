import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from "vue-textarea-autosize";

import firebase from "firebase/app";
import "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwwM5LTevv_DOYONfKR-KvWc7R-TL28_s",
  authDomain: "vue-calendar-7f16b.firebaseapp.com",
  projectId: "vue-calendar-7f16b",
  storageBucket: "vue-calendar-7f16b.appspot.com",
  messagingSenderId: "181606327419",
  appId: "1:181606327419:web:9921a5d2bc71a0cc50eede"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
