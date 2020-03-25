import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import createLoadingPlugin from '@rematch/loading';
import history from './history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { RematchRootDispatch, RematchRootState } from '@src/d.ts/rematch-store';
import * as models from './models';

const immer = immerPlugin();
const loadingOptions = {};
const loading = createLoadingPlugin(loadingOptions);

export type RootState = RematchRootState<typeof models>;

export type RootDispatch = RematchRootDispatch<typeof models>;

const store = init({
    models,
    plugins: [loading, immer],
    redux: {
        middlewares: [routerMiddleware(history)],
        reducers: {
            router: connectRouter(history),
        },
    },
});

export default store;
