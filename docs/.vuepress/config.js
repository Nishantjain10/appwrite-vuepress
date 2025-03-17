import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'
import customTheme from './theme/index.js'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'en-US',

  title: 'Vuepress Docs Boilerplate',
  description: 'Your Ultimate Documentation Starter',

  theme: customTheme({
    logo: '/images/appwrite-light.svg',
    logoDark: '/images/appwrite-dark.svg',
    
    colorMode: {
      defaultMode: 'light',
    },

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' },
      { 
        text: 'Appwrite', 
        link: 'https://appwrite.io',
      },
    ],

    repo: 'appwrite/appwrite',
    docsRepo: 'appwrite/docs',
    docsBranch: 'main',
    editLink: true,
  }),

  bundler: viteBundler(),
})
