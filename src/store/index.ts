import { IStoreState } from '../interfaces/store.interfaces';

export function state(): any {
  return {
    version: null,
  };
}

export const mutations: any = {
  setVersion(_state: IStoreState, version: string): void {
    _state.version = version;
  },
};

export const actions: any = {
  async nuxtServerInit({ commit }: any, { req }: any): Promise<void> {
    if (req.cookies.vuex) {
      const STATE: IStoreState = JSON.parse(req.cookies.vuex);
      commit('setVersion', STATE.version);
    }
  },
};
