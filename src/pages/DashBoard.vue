<template>
  <v-container fluid="true">
    <ve-bar :data="chartData"></ve-bar>
  </v-container>
</template>

<script lang = "ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class DashBoard extends Vue {
  private chartData = {
    columns: ["date", "cost", "profit"],
    rows: [
      { date: "01/01", cost: 123, profit: 3 },
      { date: "01/02", cost: 1223, profit: 6 },
      { date: "01/03", cost: 2123, profit: 90 },
      { date: "01/04", cost: 4123, profit: 12 },
      { date: "01/05", cost: 3123, profit: 15 },
      { date: "01/06", cost: 7123, profit: 20 },
    ],
  };
  constructor() {
    super();
  }

  private created() {

  }

  private mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
