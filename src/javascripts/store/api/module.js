import * as mutationTypes from './mutationTypes';

export default {
  state: {
    requestingNum: 0,  // リクエスト中の数
  },
  mutations: {
    // リクエスト中のミュテーション
    [mutationTypes.REQUESTING](state) {
      state.requestingNum += 1;
    },
    // 通信成功した時のミュテーション
    [mutationTypes.SUCCESS](state) {
      state.requestingNum -= 1;
    },
    // 通信失敗した時のミュテーション
    [mutationTypes.FAILURE](state) {
      state.requestingNum -= 1;
    },
    // 通信をキャンセルした時のミュテーション
    [mutationTypes.CANCEL](state) {
      state.requestingNum -= 1;
    }
  }
};
