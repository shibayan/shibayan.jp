module.exports = {
  title: 'Tatsuro Shibamura',
  description: 'Tatsuro Shibamura a.k.a. shibayan / Developer / Azure Serverless / Windows on ARM Enthusiast',
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