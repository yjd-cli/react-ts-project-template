// 添加状态
const INCREMENT = 'INCREMENT';
import { RootDispatch } from '@src/store';

export interface LoginStateDeclaration {
    pageName?: string;
    count: number;
}

const state: LoginStateDeclaration = {
    pageName: 'login',
    count: 0,
};

export default {
    name: 'login',
    state,
    reducers: {
        // 两种写法：一种用常量作为 key ，一种直接定义方法，个人认为第二种使用更舒服
        [INCREMENT]: (state: LoginStateDeclaration, payload?: any): LoginStateDeclaration => {
            // 打印输出的是一个 proxy 代理实例对象
            // console.log(state);
            state.count += 1;
            // 最终要返回整棵 state 树（当前 model 的 state 树——login）
            return state;
        },
        decrement: (state: LoginStateDeclaration, payload?: any): LoginStateDeclaration => {
            state.count -= 1;
            return state;
        },
    },
    // effects 可以是一个函数，也可以是一个对象
    // 还没研究过源码，猜测：是函数时可以派发其他 model 中的 action；是对象时只能派发当前 model 中的 action
    effects: (dispatch: RootDispatch) => ({}),
    // effects: {},
};
