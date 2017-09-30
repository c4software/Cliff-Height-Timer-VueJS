<template>
    <v-container>
        <h2>{{ $t("history.title") }}</h2>
        <v-list v-if="history.length > 0">
            <v-list-tile v-for="item in history" v-bind:key="item.time" @click="">
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.time"></v-list-tile-title>
                    <v-list-tile-sub-title v-text="display_history(item)"></v-list-tile-sub-title>
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
          history(){
              let history = JSON.parse(localStorage.getItem("history"));
              return !Array.isArray(history)?[]:history;
          }
        },
        methods:{
            display_history(item){
                return item.m + "m, " + item.ft + "ft"
            }
        }
    }
</script>

<style>
    .list{
        background: transparent !important;
    }
</style>