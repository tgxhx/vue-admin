<template>
    <footer id="footer_bar">
      <a href="https://github.com/tgxhx" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>Github</a>
    </footer>
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

<style lang="scss" type="text/scss" scoped>
    @import '~util_scss';

  #footer_bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height:35px;
    padding-right:20px;
    border-top:1px solid #ddd;
    box-shadow:0px 0px 5px #CCCCCC;
    a {
      color:#333;
      text-decoration: none;
      font-size:14px;
      .fa {
        margin-right:5px;
        font-size:18px;
      }
    }
  }
</style>
