<template>
  <div>
    <v-toolbar class="primary deep-purple" />
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-divider dark v-if="item.divider" :key="i"></v-divider>
        <v-list-tile :href="item.action" :key="i" v-else>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "drawer",
  data: function() {
    return {
      items: [
        { icon: 'home', text: this.$t("drawer.home"), action: '#/' },
        { icon: 'history', text: this.$t("drawer.history"), action: '#/history' },
        { icon: 'help', text: this.$t("drawer.about"), action: '#/about' },
        { divider: true },
        { icon: 'pets', text: this.$t('see_on_github'), action: 'https://github.com/c4software/Cliff-Height-Timer-VueJS' },
      ]
    }
  }
}
</script>
