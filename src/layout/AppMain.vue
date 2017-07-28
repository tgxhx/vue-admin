<template>
  <section id="main">
    <router-view></router-view>
  </section>
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
    methods: {},
    filters: {}
  }
</script>

<style lang="scss" type="text/scss">
  @import '~util_scss';

  #main {
    overflow-y: auto;
    box-sizing: border-box;
    height:calc(100% - 95px);
    padding: 15px;
    background-color: #f1f4f5;
    > * {
      box-sizing: border-box;
      min-height:100%;
      @include bgc;
    }
  }
</style>
