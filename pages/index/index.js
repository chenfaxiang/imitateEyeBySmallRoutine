/**
 * @author        chenfaxiang
 * @email         998faxiang@gmail.com
 * @date          2017/10/20
 * @description   {首页}
 **/
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    intervalTime: 3000,
    durationTime: 1000,
    imgUrls: [
      {
        imgUrl: 'http://img.kaiyanapp.com/db6d68119a4cddb6d22a085f9afbcd92.jpeg?imageMogr2/quality/60/format/jpg',
        imgTitle: '清新的世界，需要探索',
        imgDetail: '这就是探索的理由'
      },
      {
        imgUrl: 'http://img.kaiyanapp.com/fca01d82e10a367cbb44808f2398524e.jpeg?imageMogr2/quality/60/format/jpg',
        imgTitle: '虚无缥缈星空，一望无垠',
        imgDetail: '星空的世界是如此美妙'
      },
      {
        imgUrl: 'http://img.kaiyanapp.com/0213fff11fa5dc0ffc868f8fffe0a2fa.jpeg?imageMogr2/quality/60/format/jpg',
        imgTitle: '运动需要勇气，坚持不懈',
        imgDetail: '总算搞清楚了为何如此轻松……'
      }
    ],
    detailData: [
      {
        detailImg: 'http://img.kaiyanapp.com/9bbe8f164606b493274152c516b3fbe5.jpeg?imageMogr2/quality/60/format/jpg',
        detailIcon: 'http://img.kaiyanapp.com/a52ebf1b9bc673561569ec60155968a7.png?imageMogr2/quality/60/format/jpg',
        detailTitle: '[ 蜘蛛侠正确的结束方式 ]',
        detailInfo: '精准吐槽大会开始了，英雄归来大团聚……'
      },
      {
        detailImg: 'http://img.kaiyanapp.com/51a0caff5edb03ba154c3996c0cc6f7b.jpeg?imageMogr2/quality/60/format/jpg',
        detailIcon: 'http://img.kaiyanapp.com/70716e90178d2ea35be9e550c26795f1.jpeg',
        detailTitle: '荒诞短片：我该杀谁？',
        detailInfo: '威客？威尔？傻傻的分不清楚，这到底是要玩儿啥？'
      }
    ]
  },
  onLoad: function () {

  },
  openVideo: function (e) {
    const nowClickItemIndex = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?list=' + nowClickItemIndex
    });
  }
});
