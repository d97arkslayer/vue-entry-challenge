<template>
  <div class="home">
    <HomeTitle/>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeTitle from '@/views/Home/HomeTitle'
export default {
  name: 'Home',
  components: { HomeTitle }
}
</script>
