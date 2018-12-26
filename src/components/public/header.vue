<template>
<div class="header">
      <div>
      <span class="logo" @click="goto('/', '首页')">Logo</span>
      <span class="text">水电气管理平台</span>
      <img src="../../assets/line.png" class="line">
      <ul class="nav">
        <li class="navlist" id="/index" @click="goto('/', '首页')">首页</li>
        <li class="navlist" id="/userManage" @click="goto('/userManage', '用户管理')">用户管理</li>
        <li class="navlist" id="/meterManage" @click="goto('/meterManage', '表管理')">表管理</li>
        <li class="navlist" id="/" @click="goto('/userManage', '费率/规则管理')">费率/规则管理</li>
        <li class="navlist" id="/" @click="goto('/userManage', '用量分析')">用量分析</li>
        <li class="navlist" id="/" @click="goto('/userManage', '日志审计')">日志审计</li>
        <li class="lastli">
          <img src="../../assets/line.png" class="navimg">
        </li>
      </ul>
      <span class="user">
        <span class="username" ref="username" @click="showlogout=!showlogout">{{username}}</span>
        <br>
        <img src="../../assets/line.png" class="userline">
        <span v-if="showlogout" @click="logout" class="logout">
          <span class="triangle_border_up"></span>
          <img src="../../assets/power.png" width="16" class="power">
          <br>
          <p>退出</p>
        </span>
      </span>
    </div>
    <router-view class="content"></router-view>
</div>

</template>
<script>

export default {
  name: 'index',
  data () {
    return {
      token: localStorage.getItem('token'),
      username: '',
      showlogout: false
    }
  },
  created () {
  },
  mounted () {
    if (!this.token) {
      this.$router.push('/login')
    } else {
      if (localStorage.getItem('username')) {
        this.username = localStorage.getItem('username')
      } else {
        this.getinfo()
      }
    }
    const list = document.getElementsByClassName('navlist')
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === this.$route.path) {
        list[i].style.color = 'rgb(119, 106, 230)'
      } else {
        list[i].style.color = '#fff'
      }
    }
  },

  methods: {
    async getinfo () {
      const {data: res} = await this.$ajax.get('/v2/users/userinfo')
      if (res.status === 'ok') {
        if (res.result.username.length > 5) {
          this.username = res.result.username
          localStorage.setItem('username', res.result.username)
          setTimeout(() => {
            document.getElementsByClassName('userline')[0].style.width = this.$refs.username.offsetWidth + 'px'
          }, 300)
        } else {
          this.username = res.result.username
        }
      } else {
        this.$router.push('/')
      }
    },
    goto (nav, text) {
      this.$router.push(nav)
      const list = document.getElementsByClassName('navlist')
      for (let i = 0; i < list.length; i++) {
        if (list[i].innerHTML !== text) {
          list[i].style.color = '#fff'
        } else {
          list[i].style.color = 'rgb(119, 106, 230)'
        }
      }
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.header{
  position: relative;
  height: 100%;
  background-color: rgb(125, 189, 240);
}
.content{
  position: relative;
  background-color: rgb(125, 189, 240);
}
div .logo{
  color:#ffffff;
  font-size: 20px;
  font-weight: 500;
  float: left;
  margin: 10px 16px 0 20px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
 div .text{
  float: left;
  font-size: 16px;
  color:#fff;
  margin-top: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
 div .line{
  width: 170px;
  float: left;
  margin-top: 46px;
  margin-left: -170px;
  overflow: hidden;
}
 div .nav{
  list-style: none;
  width: 640px;
  margin:0 auto;
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
 div .nav li{
  float: left;
  margin: 0 auto;
  margin-left: 16px;
  margin-top: 10px;
  color: #fff;
  cursor: pointer;
}
 div .nav li.lastli{
  margin: 0 0 0 10px;
}
 div .nav li.lastli img.navimg{
  width: 464px;
  height: 2px;
  margin: 0;
}
 div .user{
  position: absolute;
  color: #fff;
  font-size: 18px;
  top: 12px;
  right: 0px;
  z-index: 1000000;
}
 div .user .username{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
 div .user .userline{
  height: 2px;
  width: 70px;
}
 div .user span:last-child{
  width: 54px;
  background-color: #fff;
  position: absolute;
  top: 52px;
  height: 60px;
  cursor: pointer;
  right: 2px;
}
 div .user span:last-child .power{
  margin-top: 10px;
  margin: 6px;
}
 div .user span:last-child p{
  margin: 0;
  color: rgb(123, 167, 224);
  font-size: 14px;
}
.triangle_border_up{
  width:0;
  height:0;
  border-width:0 10px 10px;
  border-style:solid;
  border-color:transparent transparent #fff;/*透明 透明  灰*/
  position:absolute;
  top: -10px;
  right: 0;
  transform: translateX(-96%);
}
</style>
