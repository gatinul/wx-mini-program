//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'DEMO',
    userInfo: '',
    array:['沈阳','大连','哈尔滨','上海'],
    condition:true,
    index:'',
    img:{
      'sy':'./img/shenyang.jpg',
      'dl':'./img/dalian.jpg',
      'heb':'./img/haerbin.jpg',
      'sh':'./img/shanghai.jpg'
    }
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  bindCityTap: function(){
    var that = this
    var name = this.data.array[this.data.index]
    console.log(name)
    wx.navigateTo({
      url: '../city/city?cityName='+name,
      success: function(res){
        // success
      },
      fail: function(error) {
        console.log(error)
      },
     
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      condition:false
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
