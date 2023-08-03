import * as path from 'path';
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  title: 'Tatsuro Shibamura',
  description: 'Developer / Microsoft MVP for Microsoft Azure / Windows on ARM Enthusiast',
  plugins: [
    googleAnalyticsPlugin({
      'id': 'UA-772309-13'
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],
  theme: defaultTheme({
    contributors: false,
    lastUpdated: false,
    sidebar: false,
    navbar: [
      { text: 'Presentations', link: '/slides/' },
      { text: 'Become a sponsor', link: 'https://github.com/sponsors/shibayan', target: '_blank' }
    ],
    themePlugins: {
      externalLinkIcon: false
    }
  })
});