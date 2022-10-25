// pages/modelselection/modelselection.js
Page({
  go_self(){
    console.log("点击了go_self")
    wx.navigateTo({
      url: '/pages/self/self',
    })
    console.log("跳转成功")
  },
  go_ai(){
    console.log("点击了go_ai")
    wx.navigateTo({
      url: '/pages/ai/ai',
    })
    console.log("跳转成功")
  },
  go_online(){
    console.log("点击了go_online")
    wx.navigateTo({
      url: '/pages/onlineselect/onlineselect',
    })
    console.log("跳转成功")
  },
  /**
   * 视图弹窗页面的初始数据：隐藏
   */
  data: {
    modalHidden: true
  },
  rule(){
    // 打开视图弹窗
    this.setData({
      modalHidden: false
    })
  },
    /**
   * 弹窗中点击取消：隐藏弹窗
   */
  modalCandel: function() {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   *  弹窗中点击确认：隐藏弹窗
   */
  modalConfirm: function() {
    // do something
    this.setData({
      modalHidden: true
    })
  },
  scores(){
    wx.showToast({
      title: '该功能待开发',
      icon: 'error',
      duration: 2000
    })
  },
  setting(){
    wx.showToast({
      title: '该功能待开发',
      icon: 'error',
      duration: 2000
    })
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