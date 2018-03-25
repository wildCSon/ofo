// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    btntype:"primary",
    text:"登录",
    userInfo:{
      avaterUrl:"",
      nickName:"未登录",
    }
  },
  login:function(e){
    if(this.data.text == "登录"){
      wx.login({
        success: (res) => {
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                userInfo:{
                  avaterUrl:res.userInfo.avatarUrl,
                  nickName:res.userInfo.nickName,
                },
                isShow:true,
                text:"退出登录",
                btntype:"warn"
              })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    avaterUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName,
                  },
                  isShow: true,
                  text: "退出登录",
                  btntype: "warn"
                },
              })
            }
          })
        }
      })
    }else{
      this.setData({
        isShow: false,
        btntype: "primary",
        text: "登录",
        userInfo: {
          avaterUrl: "",
          nickName: "未登录",
        }
      });
      wx.removeStorage({
        key: 'userInfo',
        success: function(res) {},
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getStorage({
        key: 'userInfo',
        success: (res) => {
          this.setData(res.data);
        },
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
  
  }
})