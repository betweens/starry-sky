var config = require('../../config')
var util = require('../../utils/util.js');
var INFO = wx.getSystemInfoSync();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SCROLL_TOP: 0,
    // 导航栏透明度
    opacity: 1,
    HEIGHT: INFO.windowHeight,
    STATUSBAR_HEIGHT: INFO.statusBarHeight,
    img_url: ''
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  bindFormSubmit: function(e) {
    this.verificationData(e.detail.value);
  },
  //校验输入的数据
  verificationData: function(target) {
    const title = target.title;
    const auther = target.auther;
    const content = target.content;
    const img_url = this.data.img_url;

    if (!title) {
      util.showError('歌曲名不能为空');
      return false;
    }

    if (!auther) {
      util.showError('作者不能为空');
      return false;
    }

    if (!content) {
      util.showError('内容不能为空');
      return false;
    }

    if (!img_url) {
      util.showError('图片不能为空');
      return false;
    }
    util.showBusy('wait...');
 
    this.uploadImg(img_url).then((url) => {
      this.submitStoryData({
        title,
        auther,
        content,
        url,
      });
    });
  },

  // 保存提交信息
  submitStoryData: function(params) {
    console.log(params);
    var options = {
      method: 'POST',
      url: config.service.addEasay,
      login: true,
      data: params,
      success: (result) => {
        console.log(result.data);
        util.hideLoading();
      },
      fail(error) {
        console.log('request fail', error);
      }
    }
    wx.request(options);
  },
  // 上传图片
  uploadImg: function(img_url) {
    return new Promise(function (resolve, reject){
      // 上传图片
      wx.uploadFile({
        url: config.service.uploadUrl,
        filePath: img_url[0],
        name: 'file',
        success: function (res) {
          res = JSON.parse(res.data)
          resolve(res.data.imgUrl);
        },
        fail: function (e) {
          reject(e);
        }
      })
    })
  },
  // 选择图片
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          img_url:  res.tempFilePaths
        });
      }
    })
  },
  // 预览图片
  previewImage: function (e) {
    wx.previewImage({
      current: 0, // 当前显示图片的http链接
      urls: this.data.img_url // 需要预览的图片http链接列表
    })
  },
  /**
   * 返回
   */
  goBackHandler: function () {
    wx.navigateBack({});
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