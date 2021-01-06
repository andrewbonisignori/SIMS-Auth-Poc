import { MutationTree } from "vuex";
import { AuthState } from "../../states";

export const mutations: MutationTree<AuthState> = {
    setAuthenticated(state: AuthState, isAuthenticated: boolean){
        state.isAuthenticated = isAuthenticated;
    }
};
