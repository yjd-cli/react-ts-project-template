import { createModel } from '@rematch/core';
import { RootModel } from '../index';

export interface LoginStateDeclaration {
  pageName?: string;
  count: number;
}

const state: LoginStateDeclaration = {
  pageName: 'login',
  count: 0,
};

export default createModel<RootModel>()({
  name: 'login',
  state,
  reducers: {
    increment: (state: LoginStateDeclaration, payload: number): LoginStateDeclaration => {
      state.count += payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.login.increment(payload);
    },
  }),
});
