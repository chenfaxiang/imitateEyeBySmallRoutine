/**
 * @author        chenfaxiang
 * @email         998faxiang@gmail.com
 * @date          2017/10/23
 * @description   {视频详情页}
 **/
Page({
  data: {
    currentVideoName: '',
    videoNameObj: {
      0: 'dog.mp4',
      1: 'sky.mp4',
      2: 'sport.mp4'
    },
    recommendData: [
      {
        recommendImg: 'http://img.kaiyanapp.com/9bbe8f164606b493274152c516b3fbe5.jpeg?imageMogr2/quality/60/format/jpg',
        recommendTitle: '[ 蜘蛛侠正确的结束方式 ]',
        recommendInfo: '# 预告 敬请期待'
      },
      {
        recommendImg: 'http://img.kaiyanapp.com/51a0caff5edb03ba154c3996c0cc6f7b.jpeg?imageMogr2/quality/60/format/jpg',
        recommendTitle: '荒诞短片：我该杀谁？',
        recommendInfo: '威客 # 预告 敬请期待'
      }
    ]
  },
  onLoad: function (query) {
    // query拿到url中的search值
    for (let item in query) {
      this.setData({
        currentVideoName: this.data.videoNameObj[query[item]]
      });
    }
  }
});
