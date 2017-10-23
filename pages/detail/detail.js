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
    }
  },
  onLoad: function (query) {
    for (let item in query) {
      this.setData({
        currentVideoName: this.data.videoNameObj[query[item]]
      });
    }
  }
});
