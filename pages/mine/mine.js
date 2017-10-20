const app = getApp();

Page({
  // 页面初始数据
  data: {
    mineData: '我的界面数据'
  },
  // 生命周期函数 —— 监听页面加载
  onLoad: function () {
    this.setData({
      mineData: '我的界面load完成后重新设置的数据'
    });
  },
  // 生命周期函数 —— 监听页面初次渲染
  onReady: function () {
    // TODO something
    wx.setNavigationBarTitle({
      title: "我的"
    });
  },
  // 生命周期函数 —— 监听页面显示
  onShow: function () {
    // todo something
  },
  // 生命周期函数 —— 监听页面隐藏
  onHide: function () {
    // todo something
  },
  // 生命周期函数 —— 监听页面卸载
  onUnload: function () {
    // todo something
  },
  // 页面相关事件处理函数 —— 监听用户下拉动作
  onPullDownRefresh: function () {
    // todo something
  },
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    // todo something
  },
  // 右上角分享
  onShareAppMessage: function () {
    // todo something
    return {
      title: "分享页面标题",
      desc: "分享页面描述",
      path: "/"
    };
  },
  // 其他自定义事件，页面中用this进行访问
  userDefineEvent: function () {
    // todo user define event
  }
});
