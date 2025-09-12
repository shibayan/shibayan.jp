import * as path from 'path';
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  title: 'Tatsuro Shibamura',
  description: 'Developer / Microsoft MVP for Microsoft Azure / Windows on Arm Enthusiast',
  bundler: viteBundler(),
  plugins: [
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
    ]
  })
});