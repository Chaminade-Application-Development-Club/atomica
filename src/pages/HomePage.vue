<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-data-table
          :headers="headers"
          :items="people"
          hide-actions
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
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
  },
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Rank', value: 'rank' , sortable: true},
        { text: 'XP', value: 'xp',  sortable: true},
        { text: 'Class', value: 'class' , sortable: false},
        { text: 'Group', value: 'group' , sortable: false}
      ],
      people: [
        {
          value: false,
          name: 'Zoya Azfar',
          rank: 43,
          xp: 425,
          gold: 0,
          class: 'Palemoon',
          group: 'Clerics of Palemoon'
        },
        {
          value: false,
          name: 'Anthony Carrion',
          rank: 19,
          xp: 725,
          gold: 0,
          class: 'Palemoon',
          group: 'Knights of Palemoon'
        },
        {
          value: false,
          name: 'Winston Chloupek',
          rank: 28,
          xp: 625,
          gold: 0,
          class: 'Palemoon',
          group: 'Knights of Palemoon'
        },
        {
          value: false,
          name: 'Christopher Collins',
          rank: 11,
          xp: 1000,
          gold: 250.00,
          class: 'Palemoon',
          group: 'Archers of Palemoon'
        },
        {
          value: false,
          name: 'John	Conroy',
          rank: 19,
          xp: 725,
          gold: 0,
          class: 'Palemoon',
          group: 'Knights of the periodic table'
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
