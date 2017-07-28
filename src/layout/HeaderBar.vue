<template>
  <header id="header_bar">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="fa fa-user"></i><i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><i class="fa fa-user" aria-hidden="true"></i>用户信息</el-dropdown-item>
        <el-dropdown-item><i class="fa fa-cog" aria-hidden="true"></i>用户设置</el-dropdown-item>
        <el-dropdown-item divided><i class="fa fa-power-off" aria-hidden="true"></i>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
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

  #header_bar {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: $baseColor;
    color: $baseColor2;
    justify-content: flex-end;
    .el-dropdown {
      margin-right:20px;
      color: $baseColor2;
      .fa {
        margin-right:5px;
        font-size:20px;
      }
    }
  }
  .el-dropdown-menu__item {
    padding:0 20px;
    color:#444;
    i {
      margin-right:5px;
    }
  }
  .el-dropdown-menu__item--divided:hover:before {
    background-color: #e4e8f1;
  }
</style>
