module.exports = {
  navTheme: 'light', // 菜单栏的背景色 dark, light
  primaryColor: '#1890FF', // primary color of ant design
  menuLayout: 'sidemenu', // 菜单位置: 侧边栏 sidemenu 和顶部栏 topmenu
  verifyLogin: {
    requiredLogin: false,  // 配置是否需要验证登录
    backIndex: '/login', // 验证不通过返回页面
    noVerify: ['/login'], // 配置不需要验证的页面
  },
};