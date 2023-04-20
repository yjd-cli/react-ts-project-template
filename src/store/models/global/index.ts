/**
 * 如果一个模块中的 model 体积很大时，可以考虑将其拆分成一个个文件（action-types、effects、reducers）
 */
import { createModel } from '@rematch/core';
import { RootModel } from '../index';
import reducers from './reducers';
import effects from './effects';

export interface GlobalStateDeclaration {
  projectName?: string;
  count: number;
  list: any[];
}

const state: GlobalStateDeclaration = {
  projectName: 'vite-react-ts-app',
  count: 0,
  list: [
    {
      todo: 'Learn typescript',
      done: true,
    },
    {
      todo: 'Try immer',
      done: false,
    },
  ],
};

export default createModel<RootModel>()({
  name: 'global',
  state,
  reducers,
  effects,
});

