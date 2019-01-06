<template lang="pug">
div
  p {{ $props.name }}
  button(@click="onRequestButtonClick") request
  button(@click="onCancelAllButtonClick") cancel all
  p 通信ステータスリスト
  div
    template(v-for="status in $data.statusList")
      div(style="display: inline-block; margin-right: 10px;")
        //- 通信中はbuttonタグにして、クリック時にキャンセルを実行する
        template(v-if="status.label === 'requesting'")
          button(@click="status.pCancelable.cancel()") {{ status.label }}
        template(v-else)
          span {{ status.label }}
</template>

<script>
import VueTypes from 'vue-types';
import API from '../API';
import { API_ROOT } from '../constants/ApiRoot';

export default {
  props: {
    name: VueTypes.string.isRequired
  },
  data() {
    this.api = new API(API_ROOT);
    return {
      statusList: []
    };
  },
  methods: {
    onRequestButtonClick() {
      // pCancelableを受け取る
      // ※.then(...).catch(...)とメソッドチェーンを書いた後に受け取ってはいけない
      const pCancelable = this.api.fetch();
      // ステータス情報をdataに保存する
      const status = {
        label: 'requesting',
        pCancelable
      };
      this.$data.statusList.push(status);

      // 通信の成功・失敗時にステータスを更新する
      pCancelable
        .then(() => {
          // 参照先の変数をいじっているけど変更を検知してくれる模様
          status.label = 'success';
        })
        .catch(({ isCancel }) => {
          status.label = isCancel ? 'cancel' : 'error';
        });
      // pCancelable.cancel()で通信をキャンセルできる
    },
    onCancelAllButtonClick() {
      this.api.cancelAll();
    }
  }
};
</script>
