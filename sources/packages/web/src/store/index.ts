import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./states";
import { auth } from "./modules/auth/auth";
import { notifications } from "./modules/notifications/notifications";

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
    state: {
        version: "1.0.0",
    },
    modules: {
        auth,
        notifications,
    },
};

export default new Vuex.Store<RootState>(storeOptions);
