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
    wx.request({ 
      url: 'http://my-test-5gsknxhh42d2909f-1314291073.tcloudbaseapp.com/api/game',
      config: {
        "env": "my-test-5gsknxhh42d2909f"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": wx.getStorageSync('token')
      },
      method: "POST",
      data: {
        "private": false
      },
      success: function (res) {
        console.log("res", res); 
        app.globalData.uuid = res.data.data.uuid 
        console.log(app.globalData.uuid)
        wx.showToast({
          title: '创建成功',
          icon: 'success',
          duration: 1500
        })
      },
      fail: function (res) { 
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