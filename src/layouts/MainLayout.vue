<template>
  <v-container>
    <HeaderBar/>
    <router-view/>
    <Footer/>
  </v-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import Footer from '@/components/Footer/Index'
export default {
  name: 'MainLayout',
  components: { Footer, HeaderBar }
}
</script>

<style scoped>

</style>
