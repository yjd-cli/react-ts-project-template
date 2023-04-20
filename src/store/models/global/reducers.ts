import { GlobalStateDeclaration } from '@src/store/models/global/index';

export default {
  updateList(state) {
    // mutable changes to the state
    state.push({ todo: 'Tweet about it', done: false });
    state[1].done = true;
  },
  increment: (state: GlobalStateDeclaration, payload: number): GlobalStateDeclaration => {
    state.count += payload;
    return state;
  },
};
