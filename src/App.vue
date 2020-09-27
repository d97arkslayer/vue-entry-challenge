<template>
  <v-app>
    <LoadLayout v-if="isLoading">
      <BaseLoading/>
    </LoadLayout>
    <MainLayout v-else/>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'
import LoadLayout from '@/layouts/LoadLayout'
import MainLayout from '@/layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading'

export default {
  name: 'App',

  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="stylus">
#app
  padding 60px 0
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #ffffff
  background-color #15202b
</style>
