import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'

export default defineConfig({
  // 站点名称
  title: 'ཕོ་ཉ་དྲ་བ།',

  // 站点语言
  lang: 'zh-Hans',

  // 站点介绍
  description: '',

  // 网站头部
  head,

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'min-light',
      dark: 'min-dark'
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  // 源目录
  srcDir: 'src',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  themeConfig: {
    // // logo
    // logo: { src: '', width: 24, height: 24 },

    // 社交链接
    // socialLinks: [{ icon: 'github', link: 'https://github.com/Theo-messi' }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    // editLink: {
    //   pattern: 'https://github.com/Theo-messi/Theo-Docs/blob/main/src/:path',
    //   text: '为此页提供修改建议',
    // },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: { text: '上次更新' },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // algolia搜索
    // search: {
    //   provider: 'algolia',
    //   options: algolia
    // },

    // 底部信息
    footer: {
      message: `Released Under The MIT License.`,
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} khangey . All Rights Reserved.`
    }
  }
})
