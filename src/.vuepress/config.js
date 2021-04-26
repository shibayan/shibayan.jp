module.exports = {
  title: 'Tatsuro Shibamura',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-772309-13'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Slides', link: '/slides/' },
      { text: 'GitHub', link: 'https://github.com/shibayan/shibayan.jp', target:'_blank' }
    ]
  },
  evergreen: true
}