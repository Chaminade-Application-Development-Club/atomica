<template>
  <v-container fluid="true">
    <iframe height="800" width="800" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vShPLKlmzyCODOTAM0K2YzOy5FVqmf1T1v2XYUGnohZ0aAhrn-UsoPu32xNGrgOHv1EOr7KzIEpB9UA/pubhtml?gid=931231422&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    <!--
    <v-data-table
      :headers="this.headers"
      :items="this.people"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.rank }}</td>
        <td class="text-xs-right">{{ props.item.xp }}</td>
        <td class="text-xs-right">{{ props.item.class }}</td>
        <td class="text-xs-right">{{ props.item.group }}</td>
      </template>
    </v-data-table>
    -->
  </v-container>
</template>

<script lang = "ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {sheetApi} from "@/api/sheet";

@Component
export default class HomePage extends Vue {
  headers = [
      {
        text: 'Name',
        align: 'left',
        sortable: true,
        value: 'name',
      },
      { text: 'Rank', value: 'rank' , sortable: true},
      { text: 'XP', value: 'xp',  sortable: true},
      { text: 'Class', value: 'class' , sortable: false},
      { text: 'Group', value: 'group' , sortable: false},
  ];
  people = [
    {
      value: false,
      name: 'Zoya Azfar',
      rank: 43,
      xp: 425,
      gold: 0,
      class: 'Palemoon',
      group: 'Clerics of Palemoon',
    },
    {
      value: false,
      name: 'Anthony Carrion',
      rank: 19,
      xp: 725,
      gold: 0,
      class: 'Palemoon',
      group: 'Knights of Palemoon',
    },
    {
      value: false,
      name: 'Winston Chloupek',
      rank: 28,
      xp: 625,
      gold: 0,
      class: 'Palemoon',
      group: 'Knights of Palemoon',
    },
    {
      value: false,
      name: 'Christopher Collins',
      rank: 11,
      xp: 1000,
      gold: 250.00,
      class: 'Palemoon',
      group: 'Archers of Palemoon',
    },
    {
      value: false,
      name: 'John	Conroy',
      rank: 19,
      xp: 725,
      gold: 0,
      class: 'Palemoon',
      group: 'Knights of the periodic table',
    },
  ];
  constructor() {
    super();
  }
  created() {
    //console.log(sheetApi.getLeaderboard());
  }
  mounted() {
    //sheetApi.getLeaderboard();
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
