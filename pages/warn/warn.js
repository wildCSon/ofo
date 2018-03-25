// pages/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bikeValue:{
        num:0,
        text:""
      },
      text:"拍照/相册",
      checkboxList:[],
      checkboxValue:[{
        title:"私锁私用",
        check:false
      },{
        title:"车牌缺损",
        check:false,
      },{
        title:"轮胎坏了",
        check:false,
      },{
        title:"车损坏了",
        check:false,
      },{
        title:"刹车坏了",
        check:false,
      },{
        title:"其他故障",
        check:false,
      }],
      imgUrl:[],
      color:"#f2f2f2"
  },
  bindchange: function(e){
    this.checkboxList = e.detail.value;
    this.setData({
      color:"#d9bb08",
    })
  },
  takePhoto:function(e){
    wx.chooseImage({
      success: (res) => {
        var _picUrl = this.data.imgUrl;
        var _currentUrl = _picUrl.concat(res.tempFilePaths);
        this.setData({
          imgUrl:_currentUrl,
          text:"+",
        })
      },
    })
  },
  delete:function(e){
    var src = e.target.dataset.id;
    var curUrl = this.data.imgUrl;
    curUrl.splice(src,1);
    if(!curUrl.length){
      this.setData({
        text:"拍照/相册"
      })
    }else{
      this.setData({
        text:"+"
      })
    }
    this.setData({
      imgUrl:curUrl
    })
  },
  changeNum:function(e){
    this.data.bikeValue = {
      num:e.detail.value,
      text:this.data.bikeValue.text
    }
  },
  changeText:function(e){
    this.data.bikeValue = {
      num:this.data.bikeValue.num,
      text:e.detail.value
    }
  },
  submit:function(e){
    if(this.data.imgUrl.length == 0||this.checkboxList.length == 0){
      wx.showModal({
        title: '警告',
        content: '请填写信息',
        confirmText:"好的",
        cancelText:"不填",
        success: (res) => {
          if(res.confirm){

          }else{
            wx.redirectTo({
              url:'../index/index',
            })
          }
        }
      })
    }else{
      wx.request({
        url: 'https://www.easy-mock.com/project/5a95684b828cdb02ffa7e9cc',
        success: (res) => {
          wx.showToast({
            title: '提交成功',
          })
          wx.redirectTo({
            url: '../index/index',
          })
        }
        })
    }
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