import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://nangongxiulin.github.io/',
  lang: 'zh-CN',
  title: '一个二次元',
  author: {
    name: 'Hoshino',
  },
  description: '咕咕咕~',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 群 955861015',
      link: 'https://qm.qq.com/q/YRT98hQ4gu',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/NanGongXiuLin',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=8990658523',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/nahida-38',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1571669482',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/xiangyu231',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'E-Mail',
      link: 'NAnGongXiuLin@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: false,
  },
})
