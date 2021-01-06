<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <page-header :header="header" :sub-header="subHeader"></page-header>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-5">
      <v-col cols="12">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageHeader from "./pageHeader.vue";

@Component({
  components: {
    PageHeader
  }
})
export default class HeaderedPage extends Vue {
  @Prop() header!: string | null;
  @Prop() subHeader!: string | null;
}
</script>