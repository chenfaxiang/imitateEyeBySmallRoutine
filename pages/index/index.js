const app = getApp();

Page({
  data: {
    motto: 'Start imitate the eye app',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  /*
   isHomeActive: true,
   isFollowActive: false,
   isFindActive: false,
   isMineActive: false
   */
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /*
   * 首页nav切换事件
  navSwitchSelected: function (eve) {
    switch (eve.currentTarget.dataset.id) {
      case '1':
        this.setData({
          isHomeActive: true,
          isFollowActive: false,
          isFindActive: false,
          isMineActive: false
        });
        this.switchTabNav('../index/index');
        break;
      case '2':
        this.setData({
          isHomeActive: false,
          isFollowActive: true,
          isFindActive: false,
          isMineActive: false
        });
        this.switchTabNav('../follow/follow');
        break;
      case '3':
        this.setData({
          isHomeActive: false,
          isFollowActive: false,
          isFindActive: true,
          isMineActive: false
        });
        this.switchTabNav('../find/find');
        break;
      default:
        this.setData({
          isHomeActive: false,
          isFollowActive: false,
          isFindActive: false,
          isMineActive: true
        });
        this.switchTabNav('../mine/mine');
        break;
    }
  },*/
  /*
   * 切换tabNav事件
  switchTabNav: function (goToPageUrl) {
    wx.navigateTo({
      url: goToPageUrl
    });
  },*/
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
