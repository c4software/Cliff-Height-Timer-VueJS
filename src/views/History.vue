<template>
  <v-container fluid>
    <v-list v-if="history.length > 0">
      <v-subheader>{{ $t("history.title") }}</v-subheader>
      <v-list-tile v-for="item in history" v-bind:key="item.time">
        <v-list-tile-content>
          <v-list-tile-title>{{item.time}}s</v-list-tile-title>
          <v-list-tile-sub-title>{{item.m}}m, {{item.ft}}ft</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <div v-else>
      {{ $t("history.noHistory") }}
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'history',
    computed: {
      history () {
        let history = JSON.parse(localStorage.getItem('history'))
        return !Array.isArray(history) ? [] : history
      }
    }
  }
</script>

<style>
  .list{
    background: transparent !important;
  }
</style>
