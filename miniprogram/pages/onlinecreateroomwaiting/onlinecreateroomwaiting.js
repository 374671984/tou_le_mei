// pages/onlinecreateroomwaiting/onlinecreateroomwaiting.js
const app = getApp()
Page({
  data: {
    timer: '',
    roomid:'',
    flag:0
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      roomid:options.roomid
    })
    console.log('roomid:',this.data.roomid)
  },
  
  listen(){
    var that=this
    wx.request({
      url: 'http://my-test-5gsknxhh42d2909f-1314291073.tcloudbaseapp.com/api/game/' + app.globalData.uuid + '/last',
      data: {
      },
      header: { 
        "Content-Type": "application/x-www-form-urlencoded" ,//用于post
        "Authorization": wx.getStorageSync('token'),
        // "Content-Type": "application/x-www-form-urlencoded" 用于post
      },
      method: 'GET',
      success: function (res) {
        console.log("res", res); 
        if(res.data.code == "200"){
          wx.showToast({
            title: '对局开始啦',
            icon: 'success',
            duration: 1500
          })
          /*//登录成功跳转页面
           wx.navigateTo({
              url: '/pages/onlinecreatebattle/onlinecreatebattle',
            })*/
            that.setData({
              flag:1
            })
            setTimeout(() => {
              wx.navigateTo({
                url: '/pages/onlinecreatebattle/onlinecreatebattle',
              })
            }, 3000)
        }
        else{
          wx.showToast({
            title: '人还没齐',
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
    /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
		let that = this
		this.setData({
			timer: setInterval(() => {
				that.listen() 
			}, 6000),
		})
  },
    /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
		clearInterval(this.data.timer)
		this.setData({
			timer: null,
		})
  },
    /**
   * 生命周期函数--监听页面卸载
   */
	onUnload: function () {
		clearInterval(this.data.timer)
		this.setData({
			timer: null,
		})
  },
  go(){
    //登录成功跳转页面
    wx.navigateTo({
      url: '/pages/onlinecreatebattle/onlinecreatebattle',
    })
  }
})

