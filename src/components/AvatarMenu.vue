<template>
  <v-menu
    bottom
    left
    :close-on-content-click="false"
    open-on-hover
  >
    <v-btn icon @click.native="openMenu" ref="avatarBtn" slot="activator">
      <v-avatar :size="avatarSize" :tile="false" color="grey lighten-4" >
        <img :src="photoURL" alt="avatar">
      </v-avatar>
    </v-btn>

    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="photoURL" alt="John">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{userName}}</v-list-tile-title>
            <v-list-tile-sub-title>Student</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
            >
              <v-icon>favorite</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="message" color="purple"></v-switch>
          </v-list-tile-action>
          <v-list-tile-title>Enable Cheatsheet for Test</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="hints" color="purple"></v-switch>
          </v-list-tile-action>
          <v-list-tile-title>Enable 120% for Chem</v-list-tile-title>
        </v-list-tile>

      </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="menu = !menu">Cancel</v-btn>
          <v-btn color="error" flat @click.native="signOut">Log Out</v-btn>
        </v-card-actions>
      </v-card>  
  </v-menu>
</template>

<script lang = "ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import firebase from "firebase";

@Component
export default class AvatarMenu extends Vue {
  @Prop(String) photoURL!:string;
  @Prop(String) userName!:string;

  avatarSize = 36
  fav = true;
  menu = false;
  message = false;
  hints = true;

  mounted() {
    this.onResize();
  }
  openMenu() {
    this.menu = !this.menu;
    console.log("open");
  }

  private onResize() {
    var btn:any = this.$refs.avatarBtn;
    console.log(btn.$el.clientHeight);
    this.avatarSize =  btn.$el.clientHeight;
  }

  private signOut() {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut();
    }
    this.menu = false;
  }
}
</script>