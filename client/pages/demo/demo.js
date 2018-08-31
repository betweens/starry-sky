// pages/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var viewport = wx.getSystemInfoSync();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('监听页面显示'); 
  },
 
  // 选择图片
  selectImg: function() {
    console.log('选择图片');
    var self = this;
    wx.chooseImage({
      success: function (res) {
        self.context.drawImage(res.tempFilePaths[0], 0, 0, 320, 504,0,0)
        self.context.draw()
      }
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})