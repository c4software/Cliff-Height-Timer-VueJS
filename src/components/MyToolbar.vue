<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary>
      <myContentDrawer />
    </v-navigation-drawer>
    <v-toolbar class="primary deep-purple" fixed >
      <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title @click="goHome" class="white--text">{{ $t("title") }}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import myContentDrawer from "@/components/Drawer"

export default {
  name: "myToolbar",
  components: {myContentDrawer},
  data: function() {
    return {
      drawer: false
    }
  },
  methods: {
    goHome (){
      window.location.hash = "/";
    }
  }
}
</script>
