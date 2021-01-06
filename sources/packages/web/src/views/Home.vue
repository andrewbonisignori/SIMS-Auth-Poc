<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Welcome to Student Aid Portal</h1>
      </v-col>
    </v-row>
    <template v-if="isAuthenticated">
      <v-row>
        <v-col align-self="center" cols="12">
          <v-btn depressed color="secondary" @click="logout">Logout</v-btn>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-row>
        <v-col cols="12">
          <v-spacer></v-spacer>
          <h4>Use one of below options to get access to the portal</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn depressed color="primary" @click="login"
            >Login using BCSC</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col align-self="center" cols="12">
          <v-btn depressed color="primary" @click="login('bceid')"
            >Login using BCeID</v-btn
          >
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import AuthHelper from "../Helpers/AuthHelper";

@Component({
  components: {},
})
export default class Home extends Vue {
  @State("isAuthenticated", { namespace: "auth" })
  isAuthenticated!: boolean;

  login(idp: string) {
    AuthHelper.login({idpHint: "bceid"});
  }

  logout() {
    AuthHelper.logout();
  }
}
</script>