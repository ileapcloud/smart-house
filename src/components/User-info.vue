<template>
  <div class="usermanage">
    <h2 class="title">用户信息编辑</h2>
    <el-button type="success" class="goback" @click="$router.push('/userManage')">返回</el-button>
    <br>
    <br>
    <div class="info">
      <h3>用户信息</h3>
      姓名：<el-input value="王小虎"></el-input>
      房间号：<el-input value="1102"></el-input>
      电话：<el-input value="13888888888"></el-input>
      <br>
      <br>
      表号：<el-input disabled value="GB230999"></el-input>
      表类型：<el-select value placeholder="水表">
        <el-option value>水表</el-option>
        <el-option value>电表</el-option>
        <el-option value>气表</el-option>
      </el-select>
      操作：<span class="el-input">
        <el-button type="primary">确认修改</el-button>
        <el-button type="info">取消修改</el-button>
      </span>
      <br>
      <br>
    </div>
    <br>
    <br>
    <br>
    <div class="infotwo">
      <h3>修改密码</h3>
      <div style="margin: 20px;"></div>
      <el-form label-width="80px">
        <el-form-item label="原密码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-button type="primary">确认修改</el-button>
      <el-button type="info">取消修改</el-button>
      <br>
      <br>
    </div>
  </div>
</template>
<script>
export default{
  mounted () {
  }
}
</script>
<style scoped>
.usermanage{
  padding: 50px 100px;
  min-width: 1100px;
}
.usermanage .title{
  float: left;
  margin-top: -20px;
  color: aliceblue;
}
.usermanage .goback{
  float: right;
  margin-top: -20px;
}
.usermanage .info{
  border:2px dashed rgb(119, 106, 230);
  width: 100%;
}
.usermanage .info .el-input,.el-select{
  width: 20%;
}
.usermanage .infotwo{
  padding-left: 12%;
  border:2px dashed rgb(119, 106, 230);
  width: 100%;
  box-sizing: border-box;
}
.usermanage .infotwo h3{
  margin-left: -12%
}
.usermanage .infotwo .el-input,.el-select{
  width: 20%;
}
.usermanage .infotwo .el-form {
  text-align: left;
}
.footer{
  position: absolute;
  bottom: 0;
}
</style>
