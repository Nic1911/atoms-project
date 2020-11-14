import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		showAppNavigation: false,
	},
	mutations: {
		toggleAppNavigation: (state) => {
			state.showAppNavigation = !state.showAppNavigation;
		},
	},
	actions: {},
	modules: {},
});
