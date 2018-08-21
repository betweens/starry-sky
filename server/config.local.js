module.exports = {
  port: '5757',
  mysql: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      pass: '123456',
      db: 'cAuth',
      char: 'utf8mb4'
  },
  serverHost: 'localhost',
  tunnelServerUrl: '',
  tunnelSignatureKey: '',
  // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.qcloud.com/capi
  qcloudAppId: '1256588190',
  qcloudSecretId: 'AKIDTpzxgIBv1vd9SZkHtJI8mFWaS8bxqMTR',
  qcloudSecretKey: 'ucBYjZTDl7GE0ayAA1g9RXSBi3BUikaD',
  wxMessageToken: 'abcdef'
}