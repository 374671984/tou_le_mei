// pages/cover/cover.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
  },
  onLoad(){
    let user=wx.setStorageSync('user')
    console.log('进入小程序的index页面获取缓存',user)
    this.setData({
      userInfo:user
    })
  },
  login(){
    wx.getUserProfile({
      desc: '必须授权才可以进入游戏',// 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        let user=res.userInfo
        wx.setStorageSync('user',user)// 缓存
        console.log('用户信息',user)
        this.setData({
          userInfo:user
        })
        this.gomodel()
      },
      fail: (res) => {
        console.log('授权失败',res)
      }
    })
  },
  loginOut(){
    this.setData({
      userInfo:''
    })
    wx.setStorageSync('user',null)
  },
  gomodel(){
    console.log("点击了允许")
    wx.navigateTo({
      url: '/pages/modelselection/modelselection',
    })
    console.log("跳转成功")
  },
    /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
})