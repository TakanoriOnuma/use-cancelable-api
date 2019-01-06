// CancelableAPIを使用する
import CancelableAPI from 'cancelable-api';

// storeにcommitする
import store from './store/';
import * as mutationTypes from './store/api/mutationTypes';

class API extends CancelableAPI {
  /**
   * API通信をする
   * @param {Object} requestOptions - リクエストオプション
   * @param {string} requestOptions.method - 通信メソッド名
   * @param {string} requestOptions.endpoint - 通信先
   * @param {Object?} requestOptions.query - 通信につけるクエリ
   * @param {Object?} requestOptions.header - 通信につけるヘッダー
   * @param {number?} requestOptions.timeout - 通信のタイムアウト
   * @returns {PCancelable} - キャンセル可能なPromise
   */
  request(requestOptions) {
    return super.request(requestOptions, {
      // 各イベントをフックする
      onRequestStart: ({ method, url }) => { store.commit(mutationTypes.REQUESTING, { method, url }); },
      onSuccess: ({ method, url }) => { store.commit(mutationTypes.SUCCESS, { method, url }); },
      onFailure: ({ method, url }) => { store.commit(mutationTypes.FAILURE, { method, url }); },
      onCancel: ({ method, url }) => { store.commit(mutationTypes.CANCEL, { method, url }); },
      // onRequestEnd: () => { console.log('request end'); }
    });
  }

  /**
   * リクエストのテスト
   * @returns {PCancelable}
   */
  fetch() {
    return this.request({
      method: CancelableAPI.GET,
      endpoint: '/exec'
    });
  }
}

export default API;
