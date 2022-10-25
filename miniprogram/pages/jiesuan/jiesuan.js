// pages/jiesuan/jiesuan.js
const app = getApp();
Page({
  data:{
    cnt1 : '',
    cnt2 : '',
    win : 0
  },
  onLoad(){
    this.setData({
      cnt1 : app.cnt1,
      cnt2 : app.cnt2,
    })
    console.log('cnt1:',this.data.cnt1)
    console.log('cnt2:',this.data.cnt2)
    if(parseInt(this.data.cnt1) < parseInt(this.data.cnt2)){
      console.log('玩家二胜利！')
      this.setData({
        win:1
      })
    } 
    else if(parseInt(this.data.cnt1) > parseInt(this.data.cnt2)){
      console.log('玩家一胜利！')
    }
    else
      console.log('平局了！')
    console.log(this.data.win)
    
  },
  go_self(){
    wx.navigateTo({
      url: '/pages/self/self',
    })
  },
  go_select(){
    wx.navigateTo({
      url: '/pages/modelselection/modelselection',
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