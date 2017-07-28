<template>
  <div class="charts">
    <header class="content-title"><a href="http://echarts.baidu.com/" target="_blank">ECharts</a></header>
    <el-row>
      <el-col :span="24">
        <div id="myChart" class="chart" :style="{height: '600px'}"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="myChart2" class="chart" :style="{height:'400px'}"></div>
      </el-col>
      <el-col :span="12">
        <div id="myChart3" class="chart" :style="{height:'400px'}"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import {mapState} from 'vuex'
  import echars from 'echarts'

  const changeSize = () => {
    let chartWraps = document.querySelectorAll('.charts .el-col')
    chartWraps.forEach((wrap) => {
      wrap.querySelector('.chart').style.width = wrap.style.width + 'px'
    })
  }

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
      changeSize()
      let myChart = echars.init(document.getElementById('myChart'))
      const dataX = [], dataY = []
      let i = 0
      while (i < 12) {
        i++
        dataX.push(`2017.${i < 10 ? `0${i}` : i}`)
        dataY.push(Math.round(Math.random() * (50 - 10) + 10))
      }
      const options1 = {
        title: {
           text: 'ECharts 入门示例'
        },
        color: ['#20a0ff'],
        tooltip: {
          show: true,
          formatter: '{b}<br>{c}人'
        },
        legend: {
          data: ['人数']
        },
        xAxis: {
          data: dataX,
          splitLine: {
            show: true
          },
          axisLabel: {
            textStyle: {
              fontSize: 16
            }
          }
        },
        yAxis: {
          splitLine: {
            show: true
          }
        },
        series: [{
          name: '人数',
          type: 'line',
          data: dataY,
          label: {
            normal: {
              show: true,
              position: 'top',
              offset: [0, -10],
              formatter: '{c}人'
            }
          },
          symbolSize: 10,
          lineStyle: {
            normal: {
              width: 3
            }
          },
          itemStyle: {
            normal: {
              color: '#20a0ff',
              borderWidth: 5
            }
          }
        }]
      }
      myChart.setOption(options1)

      let myChart2 = echars.init(document.getElementById('myChart2'))
      const option2 = {
        title: {
          text: '深圳月最低生活费组成（单位:元）',
          subtext: 'From ExcelHome',
          sublink: 'http://e.weibo.com/1341556070/AjQH99che'
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type : 'category',
          splitLine: {show:false},
          data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
        },
        yAxis: {
          type : 'value'
        },
        series: [
          {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
          },
          {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data:[2900, 1200, 300, 200, 900, 300]
          }
        ]
      };
      myChart2.setOption(option2)

      let myChart3 = echars.init(document.getElementById('myChart3'))
      const option3 = {
        title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart3.setOption(option3)
    },
    methods: {},
    filters: {}
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '~util_scss';

  .el-row {
    margin-top:40px;
  }
</style>
