import { createStore } from 'vuex';
import {
  SET_NAME,
  SET_AGE,
  SET_CHILDREN
} from './mutation-types';

const state = () => {
  return {
    name: '',
    age: '',
    children: []
  };
};

const mutations = {
  [SET_NAME](state, name) {
    state.name = name;
  },
  [SET_AGE](state, age) {
    state.age = age;
  },
  [SET_CHILDREN](state, children) {
    state.children = children;
  }
};

const actions = {
  setName({ commit }, name) {
    commit('SET_NAME', name);
  },
  setAge({ commit }, age) {
    commit('SET_AGE', age);
  },
  setChildren({ commit }, children) {
    commit('SET_CHILDREN', children);
  },
};

const store = createStore({
  state,
  mutations,
  actions
});

export default store;
