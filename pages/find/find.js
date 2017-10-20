const app = getApp();

Page({
  data: {
    findData: '发现页面数据'
  },
  onLoad: function () {
    this.setData({
      findData: '加载时更改发现页面数据'
    })
  }
});
