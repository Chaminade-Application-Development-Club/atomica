<template>
  <v-container fluid="true">
    <v-data-table
      :headers="this.headers"
      :items="this.leaderboard"
      class="elevation-1"
      :loading="isLoading"
      :pagination.sync = "pagination"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.firstName }}</td>
        <td class="text-xs-left">{{ props.item.lastName }}</td>
        <td class="text-xs-left">{{ props.item.xp }}</td>
        <td class="text-xs-left">{{ props.item.gold }}</td>
        <td class="text-xs-left">{{ props.item.house }}</td>
        <td class="text-xs-left">{{ props.item.guild }}</td>
        <td class="text-xs-left">{{ props.item.level }}</td>
      </template>
    </v-data-table>

  </v-container>
</template>

<script lang = "ts">
import Vue from "vue";
import Component from "vue-class-component";
import SheetApi, { Ranges } from "@/api/sheet";
import Student from "@/api/student";
import { setTimeout } from 'timers';
import { db } from "@/main";

@Component
export default class HomePage extends Vue {
  private credential = require("@/api/credentials.json");
  private APChemID = "1GoROrqRqCu1Iho8u2Lt7cot_N181IJiocPpnDzb1ZLg";
  private googleAPI = gapi;
  private gapiClient: any;
  private leaderboard = [];
  private headers = [
      {
        text: "First Name",
        align: "left",
        sortable: false,
        value: "firstName",
      },
      { text: "Last Name", value: "lastName" , sortable: false},
      { text: "XP", value: "xp",  sortable: true},
      { text: "Gold", value: "gold" , sortable: true},
      { text: "House", value: "house" , sortable: false},
      { text: "Guild", value: "guild" , sortable: false},
      { text: "Level", value: "level" , sortable: false},
  ];
  private pagination = {
    sortBy: "xp",
    descending: true,
    rowsPerPage: 1000,
  };

  constructor() {
    super();
  }
  private created() {
    this.googleAPI.load("client", this.startGoogleAPI);
    console.log(this.leaderboard);
    console.log(typeof(this.leaderboard));
  }

  private mounted() {
    // setTimeout(() => {
    //   this.getSheet();
    // }, 2000);
    db.collection("ap").doc("students").collection("studentsLog").get().then((collect) => {
      console.log(collect.docs[0].data().students);
      this.leaderboard = collect.docs[0].data().students;
      console.log(this.leaderboard);
    });
  }

  private get isLoading() {
    console.log(this.leaderboard === undefined || this.leaderboard.length === 0);
    return (this.leaderboard === undefined || this.leaderboard.length === 0);
  }

  private startGoogleAPI() {
    this.googleAPI.client.init({
      apiKey: this.credential.config.apiKey,
      clientId: this.credential.web.client_id,
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    }).then(() => {
      return this.googleAPI.client;
    }).then((response: any) => {
      this.gapiClient = response;
      console.log(response);
      console.log(this.gapiClient);
      console.log(this.gapiClient.sheets);
    }, (reason: any) => {
      console.log(reason);
    });
  }

  // private getSheet() {
  //   console.log("getting client first" + this.gapiClient);
  //   if (this.gapiClient.sheets !== undefined) {
  //     console.log("I got the sheet!");
  //     let sheetAPI = new SheetApi(this.gapiClient, this.APChemID);
  //     // sheetAPI.loadLeaderBoard().then((res: Student[]) => {
  //     //   this.leaderboard = res;
  //     //   console.log(this.leaderboard);
  //     // });
  //     // sheetAPI.loadLeaderBoard();
  //     //this.leaderboard = sheetAPI.getLeaderboard;
  //     sheetAPI.loadLeaderBoard().then((res) => {
  //       this.leaderboard = res;
  //       console.log(this.leaderboard);
  //     });
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
