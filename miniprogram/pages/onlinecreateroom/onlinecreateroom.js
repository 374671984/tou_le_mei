// pages/onlinecreateroom/onlinecreateroom.js
const app = getApp()
Page({
  data:{
    id:''
  },
  fetchId(){
    this.setData({
       id:app.globalData.uuid
    })
    //console.log('id',this.data.id)
  },
  onLoad(){
    //创建一个对局的接口
    wx.cloud.callContainer({ 
      "config": {
        "env": "prod-4g2liiho4036e03a"
      },
      "path": "/api/count",
      "header": {
        "X-WX-SERVICE": "express-bfa2",
        "Authorization": wx.getStorageSync('token')
      },
      "method": "POST",
      "data": {
        "private": false
      },
      "success": function (res) {
        console.log("res", res); 
        app.globalData.uuid = res.data.data.uuid 
        console.log(app.globalData.uuid)
        wx.showToast({
          title: '创建成功',
          icon: 'success',
          duration: 1500
        })
      },
      "fail": function (res) { 
        console.log("res", res); 
      },
      complete: function (res) { 
      },
    }) 
  },
  enter(){
    wx.navigateTo({
      url: '/pages/onlinecreateroomwaiting/onlinecreateroomwaiting?roomid='+this.data.id,
    })
  }
})