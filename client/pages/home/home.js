// pages/home/home.js
var qcloud = require('../../vendor/wafer2-client-sdk/index');
var config = require('../../config');
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    first: [],
    opacity: 0,
    LOADING: true,
    SCROLL_TOP: 0,
    STATUSBAR_HEIGHT: 20
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
    var options = {
      url: config.service.getEasayList,
      login: true,
      success: (result) => {
       // console.log(result.data.shift());
        wx.setStorageSync('datas', result.data);
        this.setData({
          LOADING: false,
          first: result.data.shift(),
          item: result.data
        })
      },
      fail(error) {
        console.log('request fail', error);
      }
    }
    wx.request(options);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  scrollHandler: function (e) {
    var { scrollTop } = e.detail;
    console.log(scrollTop);
    // 计算透明度
    var opacity = parseFloat(scrollTop / 250).toFixed(2);
    if (opacity > 1) opacity = 1;
    if (opacity < 0.1) opacity = 0;
    // 这里设置<300是减少setData次数，节省内存
    if (scrollTop < 300) {
      this.setData({
        opacity
      })
    }
  },
  // 详情页面
  gotoDetail(e) {
    var objectId  = e.currentTarget.dataset.objectid;
    console.log(e.currentTarget);
    wx.navigateTo({
      url: '/pages/detail/detail?objectId='+objectId,
    })
  },
  // 设置页面
  gotoSetting: function () {
    wx.navigateTo({
      url: '/pages/setting/setting',
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