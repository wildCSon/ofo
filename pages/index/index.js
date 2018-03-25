// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      latitude : "45",
      longitude: "126",
  },

  /**`
   * 生命周期函数--监听页面加载
   */
  bindcontroltap: function(e){
    // console.log(this.map);
    switch(e.controlId){
      case 1: this.map.moveToLocation();
      break;
      case 2:
      if(this.timer){
        wx.navigateBack({
          delta:1,
        })
      }else{
        wx.scanCode({
          success: (res) => {
            wx.showLoading({
              title: '正在获取密码',
            })
            wx.request({
              url: "https://www.easy-mock.com/mock/5a95684b828cdb02ffa7e9cc/ofo/ofo#!method=get",
              success: (res) => {
                wx.redirectTo({
                  url: "../scan/scan?pass=" + res.data.data.password + "&num=" + res.data.data.number,
                })
                // console.log(res);
              }
            })

          }
        })
      };
      break;
      case 3: 
          wx.redirectTo({
            url: '../warn/warn',
          })

    }
  },
  onLoad: function (options) {
      // var that = this;
      this.map = wx.createMapContext("ofomap");
      this.timer = options.timer;
      // console.log(this.map);
      wx.getLocation({
        success: (res) =>{
          this.setData({
            latitude:res.latitude,
            longitude:res.longitude,
          })
        },
      });
      wx.getSystemInfo({
        success: (res) => {
            this.setData({
              controls:[{
                id:1,
                iconPath:"/image/location.jpg",
                position: {
                  width:50,
                  height:50,
                  left:20,
                  top: res.windowHeight - 80,
                },
                clickable: true,
              },{
                id:2,
                iconPath:"/image/using.jpg",
                position:{
                  width:90,
                  height:90,
                  left:res.windowWidth/2 - 45,
                  top:res.windowHeight -150,
                },
                clickable:true,
              },{
                id:3,
                iconPath:"/image/person.jpg",
                position: {
                  width:50,
                  height:50,
                  left:res.windowWidth - 70,
                  top:res.windowHeight - 80,
                },
                clickable: true,
              },{
                id:4,
                iconPath:"/image/located.jpg",
                position : {
                    width:20,
                    height:20,
                    left:res.windowWidth/2 - 10,
                    top:res.windowHeight/2 - 20,
                }
              }]
            })
        },
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      this.map.moveToLocation();
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