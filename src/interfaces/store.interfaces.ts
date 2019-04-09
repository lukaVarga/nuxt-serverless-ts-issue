import * as Vuex from 'vuex';

export type TAvailableLocales = 'en' | 'sl';

export interface IStoreState {
  version: string;
  i18n: {
    locale: TAvailableLocales;
  };
}

export type TStore = Vuex.Store<IStoreState>;
