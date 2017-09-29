<template>
  <div class="middle-centered deep-purple lighten-1">
    <div class="home">

    </div>

    <v-fab-transition>
      <v-btn v-bind:class="[isRunning?'red':'green']" dark fixed bottom right fab>
        <v-icon>play_arrow</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
    name: 'home',
    data: () => {
        return {isRunning: false}
    }
}
</script>

<style scoped>
  .home{
    text-align: center;
  }
</style>
