const dateTimeFormats = require('./dateTimeFormats.js');
const numberFormats = require('./numberFormats.js');

require('dotenv').config({ path: '.env.' + process.env.NODE_ENV });
const express = require('express');
const cookieParser = require('cookie-parser');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const IS_DEV = process.env.NODE_ENV !== 'prod' && process.env.NODE_ENV !== 'staging';

const en = require('vuetify/es5/locale/en').default;
const sl = require('vuetify/es5/locale/sl').default;

module.exports = {
  mode: 'universal',
  srcDir: 'src',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    [
      'nuxt-i18n',
      {
        vueI18n: {
          dateTimeFormats,
          numberFormats
        },
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.ts' },
          { code: 'sl', iso: 'sl-SI', file: 'sl.ts' }
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang/',
        parsePages: false,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'lang',
          alwaysRedirect: true,
          fallbackLocale: 'en'
        },
        seo: false,
        baseUrl: process.env.BASE_URL,
        vuex: {
          moduleName: 'i18n',
          mutations: {
            setLocale: 'i18nSetLocale',
            setMessages: false
          },
          preserveState: false
        },
        onLanguageSwitched: (_previous, current) => {
          // @ts-ignore
          if (process.client) {
            const DATE = new Date();
            DATE.setTime(DATE.getTime() + 365 * 24 * 3600 * 1000);
            document.cookie =
              'lang=' + current + '; path=/; expires=' + DATE.toUTCString();
          }
        }
      }
    ]
  ],
  plugins: [
    { src: '@plugins/storage.js', ssr: false },
    { src: '@plugins/vuex-shared-mutations.js', ssr: false },
    { src: '@plugins/custom-i18n-extension.js', ssr: true },
  ],
  head: {
    titleTemplate: '%s | Example page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Some content'
      },
      { name: 'app-version', content: process.env.NUXT_ENV_GIT_VERSION }
      // ...i18nSeo.meta
    ],
    link: [
      { name: 'apple-mobile-web-app-title', content: 'Example' },
      { name: 'application-name', content: 'Example' },
      { name: 'msapplication-TileColor', content: '#0d004c' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
      // ...i18nSeo.link
    ]
  },
  extensions: ['js', 'ts'],
  serverMiddleware: [express.json(), cookieParser()],
  css: [{ src: '@/assets/styles/index.scss', lang: 'scss' }],
  styleResources: {
    scss: [
      '@/assets/styles/layouts/index.scss',
      '@/assets/styles/pages/index.scss'
    ]
  },
  render: {
    etag: false
  },
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  },
  vuetify: {
    treeShake: true,
    lang: {
      locales: { en, sl },
      current: 'en'
    }
  },
  axios: {
    debug: IS_DEV,
    baseURL: process.env.NUXT_ENV_EXAMPLE_API
  },
  build: {
    publicPath: `https://assets.example.com/`,
  },
};
