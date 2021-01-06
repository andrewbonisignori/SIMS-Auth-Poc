<template>
  <headered-page header="Notifications">
    <v-data-table
      :headers="headers"
      :items="notifications"
      :items-per-page="5"
      class="elevation-1"
      :loading="loadingList"
      loading-text="Loading... Please wait"
      cell
    >
    </v-data-table>
  </headered-page>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import HeaderedPage from "../components/headeredPage.vue";
import api from "../api/clientApi";
import { Notification } from "../store/states";

@Component({
  components: {
    HeaderedPage,
  },
})
export default class NotificationsList extends Vue {
  @Action("getAll", { namespace: "notifications" })
  getAllNotifications!: () => Promise<void>;

  students: Notification[] = [];
  loadingList = false;
  headers = [
    { text: "ID", align: "start", value: "id" },
    { text: "Title", value: "title" },
    { text: "Desription", value: "description" },
  ];

  async created() {
    this.loadingList = true;
    await this.getAllNotifications();
    this.loadingList = false;
  }

  get notifications() {
    return this.$store.state.notifications.notifications;
  }
}
</script>
