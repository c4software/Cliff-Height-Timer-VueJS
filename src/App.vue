<template>
  <v-app toolbar fill-height>
    <myToolbar />
    <v-content>
      <v-container pa-0 fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import myToolbar from '@/components/MyToolbar'

export default {
  name: 'app',
  components: {myToolbar}
}
</script>

<style>
</style>
