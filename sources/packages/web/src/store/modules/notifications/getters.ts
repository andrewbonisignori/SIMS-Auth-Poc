import { GetterTree } from "vuex";
import { NotificationState, RootState } from "../../states";

export const getters: GetterTree<NotificationState, RootState> = {
    total(state: NotificationState): number {
        return state.notifications.length;
    }
};
