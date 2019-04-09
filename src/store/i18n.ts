import { IStoreState, TAvailableLocales } from '../interfaces/store.interfaces';

interface IMutations {
  i18nSetLocale: (_state: IStoreState['i18n'], locale: TAvailableLocales) => void;
}

interface IGetters {
}

export function state(): IStoreState['i18n'] {
  return {
    locale: 'en',
  };
}

export const mutations: IMutations = {
  i18nSetLocale(_state: IStoreState['i18n'], locale: TAvailableLocales): void {
    _state.locale = locale;
  },
};

export const getters: IGetters = {
};
