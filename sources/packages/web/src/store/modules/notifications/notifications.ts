import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { NotificationState, RootState } from "../../states";

export const state: NotificationState = {
    notifications: []
};

const namespaced = true;

export const notifications: Module<NotificationState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};