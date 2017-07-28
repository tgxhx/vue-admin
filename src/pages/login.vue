<template>
    <div>
      <button @click="login">login</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState([])
    },
    created() {

    },
    mounted() {

    },
    methods: {
      login() {
        sessionStorage.setItem('login', 'true')
      }
    },
    filters: {}
  }
</script>

<style lang="scss" type="text/scss">
    @import '~util_scss';

</style>
