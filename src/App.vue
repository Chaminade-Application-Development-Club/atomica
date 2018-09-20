<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <AvatarMenu :photoURL="avatarURL" :userName="userName"></AvatarMenu>
    </v-toolbar>
    <v-content>
      <v-container fluid="true">
          <v-layout align-center="true" justify-center="true">
            <v-flex xs12 sm12 md12 lg10 xl10>
              <v-slide-x-transition mode="out-in">
                <router-view transition="fade-transition"></router-view>
              </v-slide-x-transition>
            </v-flex>
          </v-layout>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span> &copy; 2018 @ Chaminade Application Development Club</span>
    </v-footer>
  </v-app>
</template>

<script lang = "ts">
import Vue from "vue";
import Component from "vue-class-component"
import firebase from "firebase";
import AvatarMenu from "@/components/AvatarMenu.vue";

const credential = require("@/api/credentials.json");

@Component({
  components: {AvatarMenu},
})
export default class App extends Vue{
  clipped = true;
  drawer = false;
  fixed = false;
  items = [{
    icon : 'bubble_chart',
    title : 'Leaderboard'
  }];
  miniVariant = false;
  title = 'Atomica';
  provider = new firebase.auth.GoogleAuthProvider();
  token: string  = "";
  constructor() {
    super();
  }
  
  mounted() {
    console.log(firebase.auth().currentUser);
    console.log(credential);//.installed.client_id);
    // console.log(credential.installed.client_secret);
    // console.log(credential.installed.redirect_uris[0]);
    // console.log(this.clinet);
    if (!firebase.auth().currentUser) {
      //this.$getGapiClient
      this.signInWithGoogle();
    }
    
    //this.getToken();
    console.log(this.token);
  }
  get avatarURL() {
    if (firebase.auth().currentUser) {
      return firebase.auth().currentUser!.photoURL;
    }
    else {
      return "";
    }
  }
  get userName() {
    if (firebase.auth().currentUser) {
      return firebase.auth().currentUser!.displayName;
    }
    else {
      return "Who are you?";
    }
  }
  private signInWithGoogle() {
    this.provider.addScope("https://www.googleapis.com/auth/spreadsheets.readonly");
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithRedirect(this.provider);
    
  }

  private getToken() {
    let token = ""
    firebase.auth().getRedirectResult().then(function(result:any) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      if (result.credential) {
        if (result.credential!.hasOwnProperty("accessToken")) {
          console.log(result.credential.accessToken)
          token = result.credential.accessToken;
        }
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    this.token = token;
  }
}
</script>
