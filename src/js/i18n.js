/* eslint-disable no-param-reassign */
import Vue from 'vue';
import VueI18n from 'vue-i18n';

import ja from '../i18n/ja.json';
import en from '../i18n/en.json';

Vue.use(VueI18n);

const locale = window.navigator.language || 'en';

const i18n = new VueI18n({
  locale,
  fallbackLocale: 'en',
  messages: {
    ja,
    en,
  },
});

export default i18n;
