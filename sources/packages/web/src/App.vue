<template>
  <v-app>
    <v-navigation-drawer
      app
      absolute
      dark
      clipped
      permanent
      v-if="isAuthenticated"
    >
      <v-list>
        <v-list-item link to="/students/list">
          <v-list-item-icon>
            <v-icon>mdi-account-supervisor-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Students</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/notifications">
          <v-list-item-icon>
            <v-icon>mdi-account-supervisor-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Notifications </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark clipped-left>
      <v-toolbar-title>Student Aid Portal</v-toolbar-title>
      <v-spacer></v-spacer>
      <notifications-header></notifications-header>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app>
      Britsh Columbia 2021
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import notificationsHeader from "./components/notificationsHeader.vue";

@Component({
  components: {
    notificationsHeader,
  },
})
export default class App extends Vue {
  @State("isAuthenticated", { namespace: "auth" })
  isAuthenticated!: boolean;
}
</script>
