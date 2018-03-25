// pages/scan/scan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: "7",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var t = 7;
      this.setData({
        pass: options.pass,
        num: options.num,
      })
      var timer = setInterval(
        () => {
          this.setData({
            time : t--
          })
          if(t == 0 || this.flag){
            clearInterval(timer);
            wx.redirectTo({
              url: '../billing/billing?num='+options.num,
            })
          }
        }
      ,1000);
  },
  bindtap: function () {
    wx.redirectTo({
      url: '../index/index',
    })
    var flag = true;
    // clearInterval(this.timer);
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
  
  }
})