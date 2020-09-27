<template>
  <v-app-bar
    color="blue accent-4"
    dense
    dark>
    <v-toolbar-title><strong>Vue Challenge</strong></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/" dark text>
        Fill
      </v-btn>
      <v-btn to="/list" dark text>
        Buyers
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped>

</style>
