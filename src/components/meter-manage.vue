<template>
  <div class="metermanage">
    <h2 class="title">表管理</h2>
    <br>
    <br>
    <div class="boxone">
      <h3>搜索</h3>
      <span class="top">姓名：<el-input></el-input></span>
      <span class="top">房间号：<el-input placeholder="支持通配符,支持逗号分隔的多个房间"></el-input></span>
      <br>
      <br>
      <br>
      <span class="bot">表号：<el-input></el-input></span>
      <span class="bot">
        表类型：<el-select value v-model="value">
          <el-option value="水表">水表</el-option>
          <el-option value="电表">电表</el-option>
          <el-option value="气表">气表</el-option>
        </el-select></span>
      <span class="bot">表状态：<el-select value="正常" disabled></el-select></span>
      <br>
      <br>
      <br>
      <span>
        <el-button type="primary">搜索</el-button>
        <el-button type="info">重置</el-button>
      </span>
      <br>
      <br>
    </div>
    <br>
    <div class="boxtwo">
      <el-button type="success">抄表</el-button>
      <el-button type="danger">关停</el-button>
      <el-button type="warning">恢复</el-button>
      <el-button type="primary">软件升级</el-button>
    </div>
    <br>
    <div class="boxthree">
       <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="序号"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="表号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="类型"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="version"
          label="版本描述"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="num"
          label="房间"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="money"
          label="费用结算"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="action"
          label="操作"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <br>
      <span style="float:left;">每页显示&nbsp;&nbsp; <el-select style="width:80px" value="10"></el-select> &nbsp;条</span>
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      tableData3: [{
        date: '1',
        name: 'GB23332111',
        address: '电表',
        version: 'v1.1,os 1.0',
        num: '1101',
        status: '正常',
        money: '2018-9',
        action: '完成/错误'
      }, {
        date: '2',
        name: 'GB23332112',
        address: '水表',
        version: 'v1.1,os 1.0',
        num: '1102',
        status: '欠费',
        money: '2018-10',
        action: '完成/错误'
      }, {
        date: '3',
        name: 'GB23332113',
        address: '水表',
        version: 'v1.1,os 1.0',
        num: '1103',
        status: '正常',
        money: '2018-7',
        action: '完成/错误'
      }, {
        date: '4',
        name: 'GB23332114',
        address: '气表',
        version: 'v1.1,os 1.0',
        num: '1104',
        status: '正常',
        money: '2018-8',
        action: '完成/错误'
      }, {
        date: '5',
        name: 'GB23332115',
        address: '电表',
        version: 'v1.1,os 1.0',
        num: '1105',
        status: '报警',
        money: '2018-10',
        action: '完成/错误'
      }, {
        date: '6',
        name: 'GB23332116',
        address: '水表',
        version: 'v1.1,os 1.0',
        num: '1106',
        status: '离线',
        money: '2018-12',
        action: '完成/错误'
      }, {
        date: '7',
        name: 'GB23332117',
        address: '水表',
        version: 'v1.1,os 1.0',
        num: '1108',
        status: '正常',
        money: '2018-8',
        action: '完成/错误'
      }, {
        date: '8',
        name: 'GB23332118',
        address: '电表',
        version: 'v1.1,os 1.0',
        num: '1109',
        status: '离线',
        money: '2018-11',
        action: '完成/错误'
      }, {
        date: '9',
        name: 'GB23332119',
        address: '电表',
        version: 'v1.1,os 1.0',
        num: '1110',
        status: '正常',
        money: '2018-9',
        action: '完成/错误'
      }, {
        date: '10',
        name: 'GB23332120',
        address: '气表',
        version: 'v1.1,os 1.0',
        num: '1111',
        status: '正常',
        money: '2018-11',
        action: '完成/错误'
      }],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style scoped>
.metermanage{
  padding: 50px 100px;
  min-width: 1004px;
}
.metermanage .title{
  float: left;
  margin-top: -20px;
  color: aliceblue;
}
.boxone{
  border:2px dashed rgb(119, 106, 230);
  width: 100%;
}
.boxone .top{
  margin: 50px;
}
.boxone .top .el-input{
  width: 30%;
}
.boxone .bot .el-input{
  width: 30%;
}
.boxone span.bot+span.bot{
  margin-left: 80px;
}
.boxone .bot .el-select{
  width: 10%;
}
.boxtwo{
  text-align: left;
}
.boxthree{
  width: 100%;
}
.el-pagination{
  display: inline-block;
  float: right;
}
</style>
