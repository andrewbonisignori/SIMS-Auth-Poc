<template>
  <headered-page header="Students" sub-header="List of all students">
    <v-data-table
      :headers="headers"
      :items="students"
      :items-per-page="5"
      class="elevation-1"
      :loading="loadingStudents"
      loading-text="Loading... Please wait"
      cell
    >
      <template v-slot:[`item.birthDate`]="{ item }">
        <span>{{ item.birthDate | shortDate }}</span>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      </template>
    </v-data-table>
  </headered-page>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import HeaderedPage from "../components/headeredPage.vue";
import api from "../api/clientApi";
import StudentModel from "../api/student";

@Component({
  components: {
    HeaderedPage,
  },
})
export default class StudentsList extends Vue {
  students: StudentModel[] = [];
  loadingStudents = false;
  headers = [
    { text: "ID", align: "start", value: "id" },
    { text: "First Name", value: "firstName" },
    { text: "Last Name", value: "lastName" },
    { text: "Email", value: "email" },
    { text: "Birth Date", value: "birthDate" },
    { text: "Actions", value: "actions", sortable: false },
  ];

  async created() {
    this.loadingStudents = true;
    this.students = await api.student.getStudents();
    this.loadingStudents = false;
  }

  editItem(student: StudentModel) {
    this.$router.push({
      name: "StudentsDetail",
      params: { id: student.id.toString() },
    });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
</script>
