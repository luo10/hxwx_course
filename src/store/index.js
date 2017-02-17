import Vue from 'vue';
import Vuex from 'vuex';

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(Vuex);

const state = {
  topImgUrl: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
  topInfo: {
    h2: '全能UI视觉设计师——在线班',
    h3: '随到随学，学不会可重修',
    money: '1999'
  },
  bot_info: {
    time: '1702期（2017年02月27日）'
  }
};

const getters = {
  getData: state => state
};

export default new Vuex.Store({
  state,
  getters
});
