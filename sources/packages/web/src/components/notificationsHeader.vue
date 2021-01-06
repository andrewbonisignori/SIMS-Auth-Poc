<template>
  <v-btn icon>
    <v-badge :content="messagesCount" color="red">
      <v-icon>mdi-message-text</v-icon>
    </v-badge>
  </v-btn>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class StudentsList extends Vue {
  @Getter("total", { namespace: "notifications" })
  messagesCount!: number;

  @Action("getAll", { namespace: "notifications" })
  getAllNotifications!: () => Promise<void>;

  get showMessagesCounter(): boolean {
    return this.messagesCount > 0;
  }

  async created() {
      this.getAllNotifications();
      this.getAllNotificationsTimer();
  }

  getAllNotificationsTimer(){
    setTimeout(() => {
        console.log("getAllNotifications");
        this.getAllNotifications();
        this.getAllNotificationsTimer();
      }, 30000);
  }
}
</script>
