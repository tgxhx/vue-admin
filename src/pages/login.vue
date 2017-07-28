<template>
    <div class="login">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Please Sign In</span>
        </div>
        <div class="text item">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="">
              <el-input v-model="form.name" placeholder="username"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="form.password" placeholder="password" type="password" @keydown.native.enter="login"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox v-model="form.checked">Remember me</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn" type="primary" @click="login">Login</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        form: {
          name: '',
          password: '',
          checked: false
        }
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
      login() {
        if (this.form.name === 'admin' && this.form.password === 'admin') {
          sessionStorage.setItem('login', 'true')
          this.$router.push({path: '/'})
        } else {
          alert('请输入用户名和密码')
        }
      },
    },
    filters: {}
  }
</script>

<style lang="scss" type="text/scss">
    @import '~util_scss';

    .login {
      display: flex;
      justify-content: center;
    }

    .el-card {
      margin-top:150px;
      width:360px;
      .el-card__header {
        padding-top:10px;
        padding-bottom:10px;
        > div {
          text-align: center;
          color:#5e6d82;
        }
      }
      .el-form-item {
        margin-bottom:15px;
      }
      input {
        font-size:12px;
        color:#5e6d82;
      }
      .login-btn {
        width:100%;
      }
    }
</style>
