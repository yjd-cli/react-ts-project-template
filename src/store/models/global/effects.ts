import { RootDispatch } from '@src/store';

const effects = (dispatch: RootDispatch) => ({
  async incrementAsync(payload: number, rootState) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch.global.increment(payload);
  },
});

export default effects;
