// pages/detail/detail.js
var INFO = wx.getSystemInfoSync();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    date: ["2018","08","27"],
    // _item: '',
    LOADING: true,
    // 是否已经喜欢
    IS_LIKED: false,
    // 是否是点击分享进来的页面
    IS_SHARE_PAGE: false,
    SCROLL_TOP: 0,
    // 导航栏透明度
    opacity: 0,
    HEIGHT: INFO.windowHeight,
    STATUSBAR_HEIGHT: INFO.statusBarHeight
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    const { objectId } = options;
    this.getDataById(objectId).then(function(data){
      self.setData({
        LOADING: false,
        data: {
          title: data.title,
          picture_author: data.author,
          content: data.content,
          text_authors: '胡明飞',
          img_url: 'http://pic.oh100.com/allimg/201612/3957-16121314125cb.png?x-oss-process=style/qr.oh100'
        }
      })
    })
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

  getDataById(objectId) {
    return new Promise((RES, REJ) => {
      const datas = wx.getStorageSync('datas');
      if (datas) {
        var data = {};
        datas.map(d => {
          if (d.objectId === objectId) data = d;
        });
        RES(data);
      } else {
        REJ();
      }
    })
  },

  /**
   * 喜欢/取消
   */
  toggleLikeHandler: function (e) {
   // vPush.add(e);
    var { IS_LIKED, data } = this.data;
    if (IS_LIKED) {
      // 取消
     // FAV.del(data.id);
      // TOAST.info("不能被您欢真是遗憾！")
    } else {
      //FAV.add(data);
      // TOAST.success("很高兴能得到您的喜欢！")
    }
    this.setData({
      IS_LIKED: !IS_LIKED
    })
  },

  /**
   * 滚动事件
   */
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
  /**
   * 返回
   */
  goBackHandler: function () {
    wx.navigateBack({});
  },
  goHomeHandler: function () {
    wx.redirectTo({
      url: '/pages/home/index',
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