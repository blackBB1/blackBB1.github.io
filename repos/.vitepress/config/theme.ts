import DefaultTheme from 'vitepress/theme'
import { nav } from './nav'
import { sidebar } from './sidebar'

export const themeConfig: DefaultTheme.Config = {
  nav, // 导航栏配置
  sidebar, // 侧边栏配置

  logo: '/logo.png',
  outlineTitle: '目录', // 右侧边栏的大纲标题文本配置
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  // 编辑链接配置
  editLink: {
    pattern: 'https://github.com/Charles7c/charles7c.github.io/edit/main/repos/:path',
    text: '不妥之处，敬请雅正'
  },
  // 全文搜索配置
  algolia: {
    appId: 'DBZ0G9HBUY',
    apiKey: '00cef480a543003d05d9808110ea5f65',
    indexName: 'charles7c'
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: 'github', link: 'https://github.com/Charles7c/charles7c.github.io' }
  ],

  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: true, // 是否显示页脚
    recordNo: '津ICP备2022005864号-2', // 备案信息
    copyright: `Copyright © 2019-${new Date().getFullYear()} Charles7c` // 版权信息
  },
  // 自定义扩展: 文章元数据配置
  articleMetadataConfig: {
    author: '查尔斯', // 文章全局默认作者名称
    authorLink: '/about/me' // 点击作者名时默认跳转的链接
  },
  // 自定义扩展: 评论配置
  commentConfig: {
    type: 'gitalk',
    options: {
      clientID: '1de126ce1fbdbe049709',
      clientSecret: '97e359a006ba7b0d8e9d9bf38b83de59eb69ecba',
      repo: 'https://github.com/Charles7c/charles7c.github.io-comments',
      owner: 'Charles7c',
      admin: ['Charles7c'],
      language: 'zh-CN',
      distractionFreeMode: false,
      pagerDirection: 'last', // 按评论创建时间倒序排序
      proxy: 'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token'
    },
    hideComments: false // 全局隐藏评论，默认 false
  }
}