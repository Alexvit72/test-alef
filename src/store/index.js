import { createStore } from 'vuex';

const state = () => {
  return {
    name: '',
    age: '',
    children: []
  };
};

const mutations = {

};

const actions = {

};

const store = createStore({
  state,
  mutations,
  actions
});

export default store;
