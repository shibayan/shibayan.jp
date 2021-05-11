import * as path from 'path';
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'Tatsuro Shibamura',
  description: 'Tatsuro Shibamura a.k.a. shibayan / Developer / Azure Serverless / Windows on ARM Enthusiast',
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        'id': 'UA-772309-13'
      }
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  themeConfig: {
    contributors: false,
    lastUpdated: false,
    sidebar: false,
    navbar: [
      { text: 'Slides', link: '/slides/' },
      { text: 'GitHub', link: 'https://github.com/shibayan/shibayan.jp', target:'_blank' }
    ]
  }
});