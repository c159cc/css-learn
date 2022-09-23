import { defineConfig } from 'umi';
import getRoutes from './config/utils'
var routes = getRoutes()


export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.module.rule('html-loader')
      .test(/\.html$/i).use('html')
      .loader('html-loader')
  },
  routes,
  proxy: {
    '/api': {
      target: "http://localhost:999/",
      changeOrigin: true
    }
  },
  layout: {
    headerRender:false
  },
  fastRefresh: {},
  mfsu:{}
  // links: ['@/config/css/demo.css', '@/config/css/hl.css']
});
