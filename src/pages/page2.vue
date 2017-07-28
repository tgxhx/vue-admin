<template>
    <div class="table1">
      <header class="content-title"><a href="http://element.eleme.io/#/zh-CN/component/table" target="_blank">Element-UI Table</a></header>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="#"
          prop="id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="电话">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="tableDataTemp.length">
        </el-pagination>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        tableData: [],
        tableDataTemp: [],
        curpage: 1
      }
    },
    computed: {
      ...mapState([])
    },
    created() {
      this.fetchData()
    },
    mounted() {

    },
    methods: {
      fetchData() {
        axios.get('../../static/mock/data.json').then((res) => {
          this.tableDataTemp = res.data.list
          this.tableData = this.tableDataTemp.slice(0, 10)
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        let i = (this.curpage - 1) * 10 + index
        this.tableDataTemp.splice(i, 1)
        this.tableData = this.tableDataTemp.slice(10 * (this.curpage- 1), 10 * this.curpage)
        console.log(i);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.tableData = this.tableDataTemp.slice(10 * (val- 1), 10 * val)
        this.curpage = val
        console.log(`当前页: ${val}`);
      }
    },
    filters: {}
  }
</script>

<style lang="scss" type="text/scss">
    @import '~util_scss';

    .table1 {
      .el-table__header {
        th {
          text-align: center;
        }
      }
      .el-table__row {
        height:55px;
        td {
          text-align: center;
        }
      }
      .block {
        margin-top:30px;
        display: flex;
        justify-content: flex-end;
      }
    }
    .el-table__body {

    }


</style>
