// 添加状态
const INCREMENT = 'INCREMENT';

import { RootDispatch, RootState } from '@src/store';

export interface RegisterStateDeclaration {
    pageName?: string;
    count: number;
}

const state: RegisterStateDeclaration = {
    pageName: 'register',
    count: 0,
};

export default {
    name: 'register',
    state,
    reducers: {
        [INCREMENT]: (state: RegisterStateDeclaration, payload): RegisterStateDeclaration => {
            // 打印输出的是一个 proxy 代理实例对象
            // console.log(state);
            state.count += 1;
            // 最终要返回整棵 state 树（当前 model 的 state 树——login）
            return state;
        },
    },
    effects: (dispatch: RootDispatch) => ({
        // async incrementAsync(payload, rootState: RootState) {
        async incrementAsync() {
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, 1000),
            );
            // 派发 login 里面的 action
            // dispatch.login.INCREMENT();
            this.INCREMENT();
        },
    }),
    // effects: {
    //     async incrementAsync(payload, rootState: RootState) {
    //         await new Promise(resolve =>
    //             setTimeout(() => {
    //                 resolve();
    //             }, 1000),
    //         );
    //         this.INCREMENT();
    //     },
    // },
};
