// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        env: "prod-4g2liiho4036e03a",
        traceUser: true,
      });
      wx.cloud.callContainer({
        url: 'https://10.11.110.116:3306/api/count',
        config: {
          env: "prod-4g2liiho4036e03a", // 微信云托管环境ID，不能为空，替换自己的
        },
        path: '/api/count', 
        method: 'POST',
        header: {
          'content': 'application/json',
        }
      });
    }

    this.globalData = {};
  },
  globalData:{
    token: wx.getStorageSync('token'),
    uuid: wx.getStorageSync('uuid'),
  },
});