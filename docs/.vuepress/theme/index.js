import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default (options) => {
  return {
    name: 'vuepress-theme-appwrite',
    extends: defaultTheme(options),

    // Override default theme CSS variables
    alias: {
      '@theme/styles/vars.css': path.resolve(__dirname, 'styles/vars.css'),
    },
  }
} 