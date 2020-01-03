import Vue from "vue";
import Vuex, { StoreOptions, Store } from "vuex";

Vue.use(Vuex);

type RootState = { dev: number; ops: number };

const store: StoreOptions<RootState> = {
  state: {
    dev: 0,
    ops: 0,
  },
  mutations: {
    incrementDev: state => state.dev++,
    incrementOps: state => state.ops++,
  },
  modules: {},
};

export default new Vuex.Store<RootState>(store);
