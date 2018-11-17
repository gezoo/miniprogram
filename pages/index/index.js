//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotData: [],
  },

  onLoad: function() {

  },
  onShow: function() {
    this.getHotData();
  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading();
    this.getHotData(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    });
  },
  onReachBottom() {},
  getHotData(callback) {
    var that = this;
    wx.request({
      url: app.config.hotUrl,
      success(res) {
        that.setData({
          hotData: res.data
        })
      },
      complete() {
        if (callback) callback();
      }
    })
  },
  onTap(event) {

  }
})