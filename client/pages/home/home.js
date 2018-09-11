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
        console.log(result.data);
        wx.setStorageSync('datas', result.data);
        this.setData({
          LOADING: false,
          first: result.data.shift(),
          item: result.data
        })
        console.log(this.data.first);
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
    console.log(this.data.first);
  },

  scrollHandler: function (e) {
    var { scrollTop } = e.detail;
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

  // 添加页面
  goToAddpaeg: function() {

    util.showBusy('正在登录')

    const session = qcloud.Session.get();

    console.log(session);

    if (session) {
      // 第二次登录
      // 或者本地已经有登录态
      // 可使用本函数更新登录态
      qcloud.loginWithCode({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          util.showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    } else {
      // 首次登录
      qcloud.login({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          util.showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    }
    
    // wx.navigateTo({
    //   url: '/pages/addStory/addStory',
    // })
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