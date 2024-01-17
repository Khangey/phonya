import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'HOME', link: '/', activeMatch: '^/' },
  { text: 'test1', link: '/test1/1' },
  { text: 'test2', link: '/test2/1' }
]
