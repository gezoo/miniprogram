// pages/member_topics/member_topics.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicsData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(`&${options.key}=${options.value}`)
    wx.setNavigationBarTitle({
      title: options.title || options.key ,
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

  },
  getData(params){
    const that =this
    wx.request({
      url: app.config.topicUrl + params,
      success(res){
        that.setData({
          topicsData: res.data
        })
      }
    })
  },
  onTap(event){
    
  }
})