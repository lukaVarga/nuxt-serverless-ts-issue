import { NuxtAxiosInstance } from '@nuxtjs/axios';
import VueI18n from 'nuxt-i18n/types/vue';
import { IVueI18n } from 'vue-i18n';
import { VuetifyObject } from 'vuetify';
import { ErrorBag } from 'vee-validate';

declare module 'vue/types/vue' {
  // tslint:disable
  interface Vue {
    // tslint:enable
    $axios: NuxtAxiosInstance;
    // @ts-ignore
    readonly $i18n: VueI18n & IVueI18n;
    $nuxtI18nSeo: () => any;
    $vuetify: VuetifyObject;
    errors: ErrorBag;
  }
}
