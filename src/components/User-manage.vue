<template>
  <div class="usermanage">
    <h2 class="title">用户管理</h2>
    <br>
    <br>
    <div>
      每页显示&nbsp;&nbsp; <el-select value="10"></el-select> &nbsp;条
      <el-input class="search" placeholder="房间/用户/设备类型/设备ID"></el-input>
      <el-button type="primary">搜索</el-button>
      <el-button type="info" style="margin-left:40px">新建/批量新建</el-button>
    </div>
    <br>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="房间号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名">
    </el-table-column>
    <el-table-column
      prop="admin"
      label="管理员">
    </el-table-column>
    <el-table-column
      prop="num"
      label="设备ID">
    </el-table-column>
    <el-table-column
      prop="type"
      label="设备类型">
    </el-table-column>
    <el-table-column
      label="功能">
      <template slot-scope="scope">
        <el-button class="icon" type="text" size="small" @click="goto"> <i class="el-icon-edit"></i> </el-button>
        <el-button class="icon" type="text" @click.native.prevent="deleteRow(scope.$index, tableData)" size="small"> <i class="el-icon-error"></i></el-button>
      </template>
    </el-table-column>
  </el-table>
  <br>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
  </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '1',
        name: 'admin',
        address: '1102',
        admin: '系统管理员',
        num: '无效',
        type: '无效'
      }, {
        date: '2',
        name: 'audit',
        address: '1103',
        admin: '审计管理员',
        num: '无效',
        type: '无效'
      }, {
        date: '3',
        name: '王小虎',
        address: '1104',
        admin: '否',
        num: 'GB1199923123',
        type: '水表'
      }, {
        date: '4',
        name: '王小虎',
        address: '1105',
        admin: '否',
        num: 'GB1123876123',
        type: '水表'
      }, {
        date: '5',
        name: '王小虎',
        address: '1106',
        admin: '否',
        num: 'GB11544423123',
        type: '电表'
      }, {
        date: '6',
        name: '王小虎',
        address: '1107',
        admin: '否',
        num: 'GB1123777123',
        type: '水表'
      }, {
        date: '7',
        name: '王小虎',
        address: '1108',
        admin: '否',
        num: 'GB1166623123',
        type: '气表'
      }, {
        date: '8',
        name: '王小虎',
        address: '1109',
        admin: '否',
        num: 'GB11231231123',
        type: '气表'
      }, {
        date: '9',
        name: '王小虎',
        address: '1110',
        admin: '否',
        num: 'GB1123555123',
        type: '电表'
      }, {
        date: '10',
        name: '王小虎',
        address: '1111',
        admin: '否',
        num: 'GB11214124123',
        type: '水表'
      }]
    }
  },
  mounted () {
  },
  methods: {
    goto () {
      this.$router.push('/userinfo')
    },
    deleteRow (index, rows) {
      this.$confirm('此操作将永久删除此数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        rows.splice(index, 1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
<style scoped>
.usermanage{
  padding: 50px 100px;
}
.usermanage .title{
  float: left;
  margin-top: -20px;
  color: aliceblue;
}
.usermanage .el-select{
  width: 90px;
}
.usermanage .search{
  width:250px;
  margin-left: 50px;
}
.el-icon-edit,.el-icon-error{
  color: black;
  font-size: 16px;
}
.el-pagination{
  float: right;
}
.icon{
  width: 30%;
}
</style>
