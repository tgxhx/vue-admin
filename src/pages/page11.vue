<template>
  <div class="forms2 animated fadeIn">
    <header class="content-title"><a href="http://element.eleme.io/#/zh-CN/component/form" target="_blank">Element-UI Form</a></header>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form>
          <el-form-item>
            <label>用户名：</label>
            <el-input v-model="input" placeholder="请输入内容" type="text"></el-input>
          </el-form-item>
          <el-form-item>
            <label>密码：</label>
            <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <label>文本框</label>
            <el-input v-model="input" placeholder="请输入内容" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        input: '',
        password: '',
        checked: false
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    filters: {}
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~util_scss';

  .forms2 {

  }

  .el-row {
    padding:20px 0;
  }

  .el-form-item {
    margin-bottom:10px;
  }
</style>
