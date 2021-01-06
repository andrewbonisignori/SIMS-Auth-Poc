<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <page-header header="Student" sub-header="Profile Details"></page-header>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="student.firstName"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="student.lastName"
            label="Last Name"
            required
          ></v-text-field>

          <v-text-field v-model="student.email" label="E-mail" required>
          </v-text-field>

          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="student.birthDate"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="Birth Date"
                readonly
                v-bind="attrs"
                v-on="on"
                :value="student.birthDate | shortDate"
              ></v-text-field>
            </template>
            <v-date-picker v-model="student.birthDate" no-title scrollable>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(student.birthDate)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>

          <v-btn color="success" class="mr-4" @click="save">
            Save
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// import { State, Action, Getter } from 'vuex-class';
import { Component, Vue, Prop } from "vue-property-decorator";
import api from "../api/clientApi";
import StudentModel from "../api/student";
import Moment from "moment";
import PageHeader from "../components/pageHeader.vue";

@Component({
  components: {
    PageHeader,
  },
  filters: {
    shortDate: function(value: string) {
      return Moment(value).format("L");
    },
  },
})
export default class StudentsDetail extends Vue {
  @Prop({ required: true }) readonly id!: number;

  student = new StudentModel();
  menu = false;

  async created() {
    this.student =
      (await api.student.getStudent(this.id)) ?? new StudentModel();
    console.log(this.student);
  }

  async save() {
    console.log("Updating...");
    await api.student.update(this.student);
    console.log("Updated");
  }
}
</script>
