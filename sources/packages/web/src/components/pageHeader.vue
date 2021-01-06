<template>
  <span>
    <strong><h2>{{ headerText }}</h2></strong>
    <template v-if="subHeader"> - 
      <span class="subHeader">{{ subHeader }}</span>
    </template>
  </span>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class PageHeader extends Vue {
  @Prop() header!: string | null;
  @Prop() subHeader!: string | null;
  headerText: string | null = null;

  created() {
    this.headerText = this.header;
  }
}
</script>

<style scoped>
h2 {
  display:inline
}

.subHeader{
  color: gray;
}
</style>
