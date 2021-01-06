import { ActionTree, Commit } from "vuex";
import { AuthState, RootState } from "../../states";

export const actions: ActionTree<AuthState, RootState> = {
    login(context): void {
        console.log("auth/login");
        context.commit("setAuthenticated", true);
    },
    logout(context): void {
        console.log("auth/logout");
        context.commit("setAuthenticated", false);
    },
}