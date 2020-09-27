<template>
  <div class="fill-database-form my-5">
      <form>
        <DatePicker/>
        <v-btn
          class="mr-4"
        >
          submit
        </v-btn>
        <v-btn>
          clear
        </v-btn>
      </form>
  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker/Index'
export default {
  name: 'HomeForm',
  data () {
    return {
      form: {
        date
      }
    }
  }
  components: { DatePicker }
}
</script>

<style scoped>

</style>
