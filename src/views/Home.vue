<template>
  <div class="middle-centered">
    <div class="home">
      <h4>{{$t("title")}}</h4>
      <v-btn @click.stop="openMenu">{{$t("openMenu")}}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    openMenu: () => {
      // When user tap the button dispatch an event into the dom.
      // Its will trigger the drawer Open event in (componnents/Drawer.vue)
      document.dispatchEvent(new CustomEvent("toggleDrawer", {}));
    }
  }
}
</script>

<style scoped>
  .home{
    text-align: center;
  }
  img.logo{
    display: inline;
    width: 90px;
    padding: 10px;
  }
</style>
