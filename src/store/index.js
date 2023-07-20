import Vue from "vue";
import Vuex from 'vuex'
import tab from "./tab";
import asideMenu from "./asideMenu";


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tab,
        asideMenu
    }
})