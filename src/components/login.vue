<template>
  <div class="login">
    <div class="container">
      <img v-if="water" src="../assets/waters.jpg" width="800">
      <img v-if="qi" src="../assets/qi.jpg" width="800">
      <img v-if="dian" src="../assets/dian.jpg" width="800">
      <div class="content">
        <h3 class="title">水电气管理平台</h3>
        <div class="form">
          <input type="text" placeholder="用户名" v-model="username">
        </div>
        <div class="form">
          <input type="password" placeholder="密码" v-model="password">
        </div>
        <div class="form mar">
          <input type="text" placeholder="验证码" v-model="code">
          <div class="img">
            <img :src="vpic" width="90" @click="changePic">
            <p><a href="javascript:" @click="changePic">看不清,换一张</a></p>
          </div>
        </div>
        <br>
        <button class="btn-access" @click="goindex">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      water: false,
      qi: false,
      dian: false,
      username: '',
      password: '',
      code: '',
      next: true,
      vpicClientId: '',
      vpic: ''
    }
  },

  mounted () {
    window.removeEventListener('resize', () => {})
    window.removeEventListener('scroll', () => {})
    this.changePic()
    const num = Math.ceil(Math.random() * 3)
    if (num === 1) {
      this.water = true
    }
    if (num === 2) {
      this.qi = true
    }
    if (num === 3) {
      this.dian = true
    }
  },

  methods: {
    createGUID () {
      const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
      }
      return `${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`
    },
    changePic () {
      if (this.next) {
        this.next = false
        this.vpicClientId = this.createGUID()
        var seconds = Date.now()
        this.vpic = `https://api.ileapcloud.com/auth-center/v2/imagesecurity/securityimagebytes?clientid=${this.vpicClientId}&time=${seconds}`
        setTimeout(() => {
          this.next = true
        }, 800)
      }
    },
    goindex () {
      if (this.password && this.code && this.username) {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        this.$ajax.post('/login', {username: this.username, password: this.password, clientid: this.vpicClientId, vcode: this.code}).then(res => {
          if (res.headers.authorization) {
            localStorage.setItem('token', res.headers.authorization)
            this.$router.push('/')
          } else if (this.next) {
            this.next = false
            this.$alert('登录失败,请重新登录')
            setTimeout(() => {
              this.next = true
            }, 1500)
          }
          loading.close()
        })
      } else if (!this.username) {
        this.$alert('用户名不能为空！')
      } else if (!this.password) {
        this.$alert('密码不能为空！')
      } else if (!this.code) {
        this.$alert('验证码不能为空！')
      }
      this.changePic()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 100%;
    background-image: url('../assets/BG@2x.jpg');
    background-size: 100% 100%;
  }
  .container{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .container .content{
    position: absolute;
    height: 70%;
    width: 44%;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    top: 46px;
    left: 76px;
  }
  .container .content .form input{
    height: 28px;
    width: 230px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding-left: 6px;
    float: left;
  }
  .container .content .form.mar input{
    width: 110px;
  }
  .container .content .title{
    font-family: 'NotoSansHans-Medium';
    text-align: left;
    color: #333333;
    margin-bottom: 26px;
  }
   .container .content .mar .img img{
     margin-right: 30px;
   }
  .container .content .form{
    height: 46px;
  }
  .container .content .img p{
    margin: 0;
    text-align: right;
    width: 80%;
  }
  .container .content .img p a{
    text-decoration: none;
    font-size: 12px;
    margin-right: 12px;
  }
  .btn-access{
    background-color: rgb(40, 150, 221);
    height: 28px;
    width: 100px;
    float: left;
    border:none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
</style>
