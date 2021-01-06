<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      label="Last Name"
      required
    ></v-text-field>

    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-select
      v-model="selectedItem"
      :items="items"
      label="Item"
      required
    ></v-select>

    <v-checkbox v-model="checkbox" label="Do you agree?" required></v-checkbox>

    <v-switch
      v-model="isAuth"
      label="Authenticated"
      ></v-switch>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="save">
      Save
    </v-btn>

    <v-btn color="error" class="mr-4" @click="authenticate">
      Authenticate
    </v-btn>

    <v-btn color="warning" @click="logoff">
      Logoff
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { State, Action, Getter } from 'vuex-class';
import { Component, Vue } from "vue-property-decorator";
import api from "../api/clientApi"

@Component({})
export default class Students extends Vue {
  valid = true;
  name = "";
  lastName = "";
  email = "";
  selectedItem = "";
  items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  checkbox = false;

  @State(state => state.auth.isAuthenticated)
  isAuthenticated!: boolean;

  @Action("login", { namespace: "auth" })
  login!: () => void;

  @Action("logout", { namespace: "auth" })
  logout!: () => void;
  
  async created() {
    const student = await api.student.getStudent(1);
    if(student){
        this.name = student.firstName;
        this.lastName = student.lastName;
        this.email = student.email;
    }
  }

  get isAuth(){
    return this.isAuthenticated;
  }
  set isAuth(value){
    if(value){
      this.login();
    }
    else {
      this.logout();
    }
  }

  public save() {
    alert(this.isAuthenticated);
  }

  authenticate(){
    this.login();
  }

  logoff(){
    this.logout();
  }
}
</script>
