import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // test1
  '/test1/': { base: '/test1/', items: Sidebar_test1() },
  // test2
  '/test2/': { base: '/test2/', items: Sidebar_test2() }
}

// 文档记录
export function Sidebar_test1() {
  return [
    {
      // 分组名称
      // text: '',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/test1/',
      // 分组页面
      items: [
        { text: '测试文档1', link: '1' },
        { text: '测试文档2', link: '2' }
      ]
    }
  ]
}

// 华硕路由器固件
export function Sidebar_test2() {
  return [
    {
      // 分组名称
      // text: '',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/test2/',
      // 分组页面
      items: [
        { text: '测试文档1', link: '1' },
        { text: '测试文档2', link: '2' }
      ]
    }
  ]
}
