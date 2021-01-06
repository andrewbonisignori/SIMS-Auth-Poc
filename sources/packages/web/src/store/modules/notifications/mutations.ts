import { MutationTree } from "vuex";
import { NotificationState, Notification, RootState } from "../../states";

export const mutations: MutationTree<NotificationState> = {
    updateAll(state: NotificationState, notifications: Notification[]){
        state.notifications = notifications ?? [];
    }
};
