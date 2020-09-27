<template>
  <div class="text-center py-5">
    <v-progress-circular class="v-progress-circular"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <h1>Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    button: {
      required: false,
      type: String,
      validator: (value) => {
        return [true, false].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
</style>
