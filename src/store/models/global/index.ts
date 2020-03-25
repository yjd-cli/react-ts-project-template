/**
 * 如果一个模块中的 model 体积很大时，可以考虑将其拆分成一个个文件（action-types、effects、reducers）
 */

import reducers from './reducers';
import effects from './effects';

export interface GlobalStateDeclaration {
    projectName?: string;
}

const state: GlobalStateDeclaration = {
    projectName: 'react-ts-app',
};

export default {
    name: 'global',
    state,
    reducers,
    effects,
};
