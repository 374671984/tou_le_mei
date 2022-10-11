// pages/onlinelogin/onlinelogin.js
const app = getApp()
Page({
  data:{
    student_id:'',
    password:'',
  },
  getID(event){
    let id = event.detail.value
    // console.log(id)
    this.setData({
      student_id:id
    })
  },
  getPassword(event){
    let pw = event.detail.value
    this.setData({
      password:pw
    })
  },
  sign(){
     console.log(this.data.student_id)
     console.log(this.data.password)
    wx.cloud.callContainer({ 
      url: 'https://10.11.110.116:3306/api/count',
      config: {
        env: "prod-4g2liiho4036e03a"
      },
      path: "/api/count",
      header: {
        "content-type": "application/json"
      },
      method: "POST",
      data: {
        student_id: this.data.student_id,
        password:this.data.password,
      },
      success: function (res) {
        console.log("res", res); 
        if(res.data.status == "200"){
          console.log(res.data.data.token)
          app.globalData.token = res.data.data.token
          console.log(app.globalData.token)
          wx.setStorageSync('token',res.data.data.token)
          wx.showToast({
            title: '登陆成功',
            icon: 'success',
            duration: 1500
          })
          //登录成功跳转页面
          wx.navigateTo({
            url: '/pages/onlineselect/onlineselect',
          })
        }
        else{
          wx.showToast({
            title: '账号或密码错误',
            icon: 'error',
            duration: 1500
          })
        }
      },
      fail: function (res) { 
        wx.showToast({
          title: '出错了，请重试',
          icon: 'error',
          duration: 1500
        })
      },
      complete: function (res) { },
    })
  },
})
