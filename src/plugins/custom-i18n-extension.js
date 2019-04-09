import Vue from 'vue';
import VeeValidate from 'vee-validate';
import en from 'vee-validate/dist/locale/en';
import sl from 'vee-validate/dist/locale/sl';

import SLO from '../lang/sl';
import EN from '../lang/en';

export default ({ app }) => {
  app.i18n.pluralizationRules = {
    sl: slovenePluralization
  };

  if (!app.$tc) {
    app.$tc = app.i18n.tc
  }

  if (!app.$n) {
    app.$n = app.i18n.n
  }

  if (!app.$d) {
    app.$d = app.i18n.d
  }

  if (!app.$te) {
    app.$te = app.i18n.te
  }

  Vue.use(VeeValidate, {
    i18nRootKey: 'validations',
    i18n: app.i18n,
    dictionary: {
      en: {...en, messages: {...en.messages, ...EN.validations.messages}},
      sl: {...sl, messages: {...sl.messages, ...SLO.validations.messages}}
    },
    events: 'input|blur'
  });
}

function slovenePluralization(number, choicesLength) {
  let option = null;

  if (number === 0) {
    option = 3;
  }

  if (number % 100 === 1) {
    option = 0;
  }

  if (number % 100 === 2) {
    option = 1;
  }

  if (number % 100 === 3 || number % 100 === 4) {
    option = 2;
  }

  if (option === null) {
    option = 3;
  }

  return option > choicesLength ? choicesLength : option;
}
