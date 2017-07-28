<template>
    <div id="container">
      <side-nav></side-nav>
      <section id="wrap">
        <header-bar></header-bar>
        <app-main></app-main>
        <footer-bar></footer-bar>
      </section>
    </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {mapState} from 'vuex'
  import AppMain from '@/layout/AppMain'
  import HeaderBar from '@/layout/HeaderBar'
  import FooterBar from '@/layout/FooterBar'
  import SideNav from '@/layout/SideNav'

  export default {
    data() {
      return {}
    },
    computed: {
    },
    mounted() {

    },
    components: {
      AppMain, HeaderBar, SideNav, FooterBar
    },
    methods: {},
    filters: {},
  }
</script>

<style lang="scss" type="text/scss">
    @import '~util_scss';

    html,body,#app {
      min-height: 100%;
      height: 100%;
    }

    #container {
      display: flex;
      height: 100%;

    }

    #aside {
      height: 100%;
      background-color: $baseColor;
    }

    #wrap {
      flex:1;
      display: inline-block;
      overflow: hidden;
    }

    .content-title {
      margin:10px 0 30px 0;
      a {
        font-size: 20px;
        color:$baseColor3;
        text-decoration: none;
      }
    }
</style>
