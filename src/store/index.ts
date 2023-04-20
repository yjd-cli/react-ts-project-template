import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import { models, RootModel } from './models';

type FullModel = ExtraModelsFromLoading<RootModel>

export type Store = typeof store;
export type RootState = RematchRootState<RootModel>;
export type RootDispatch = RematchDispatch<RootModel>;

// https://rematchjs.org/docs/recipes/redux-plugins/
const store = init<RootModel, FullModel>({
  models,
  plugins: [immerPlugin(), loadingPlugin()],
  redux: {
    // devtoolOptions: {
    // 禁用 redux devtools
    //   disabled: true,
    // },
  },
});

export default store;
