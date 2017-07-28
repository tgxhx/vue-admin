<template>
  <aside id="aside">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse" theme="dark">
        <section class="logo">
          <router-link to="/"><img v-show="!isCollapse" src="../assets/images/element.png" alt=""></router-link>
          <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false" v-if="isCollapse"><i class="el-icon-arrow-right"></i></el-radio-button>
            <el-radio-button :label="true" v-else><i class="el-icon-arrow-left"></i></el-radio-button>
          </el-radio-group>
        </section>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="1-1">
            <router-link to="/page1">form1</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/page1/page11">form2</router-link>
          </el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">
              <router-link to="/page2/page22">page22</router-link>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i><span slot="title">导航二</span></template>
          <el-menu-item index="2-1">
            <router-link to="/page2">table</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/page2/page22">page22</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/page3">page3</router-link>
          </el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">
              <router-link to="/page3/page33">page33</router-link>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i><span slot="title">
            <router-link to="/page3">page3</router-link>
          </span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </aside>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    computed: {
      ...mapState([])
    },
    created() {

    },
    mounted() {

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    filters: {}
  }
</script>

<style lang="scss" type="text/scss">
  @import '~util_scss';

  .logo {
    height: 40px;
    position: relative;
    margin-right: -1px;
    padding: 10px 0;
    border-right: 1px solid #aaa;
    background-color: $baseColor;
    > a {
      display: inline-block;
      margin-left: 15px;
    }
    .el-radio-group {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
    .el-radio-button__inner {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
      padding: 5px;
      border: none;
      i[class^="el-icon-"] {
        color: #bfcbd9;
      }
    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
  }

  .el-menu {
    height: 100%;
  }

  .el-menu-item {
    a {
      color: #bfcbd9;
      text-decoration: none;
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    &.is-active {
      a {
        color: #20a0ff;
      }
    }
  }
</style>
