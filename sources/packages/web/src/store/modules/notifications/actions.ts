import { ActionTree } from "vuex";
import { NotificationState, RootState } from "../../states";
import api from "../../../api/clientApi";

export const actions: ActionTree<NotificationState, RootState> = {
    async getAll(context): Promise<void> {
        const notifications = await api.notifications.getNotifications();
        context.commit("updateAll", notifications);
    },
}