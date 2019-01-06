<template lang="pug">
div
  RequestArea(name="API1")
  hr
  RequestArea(name="API2")
  hr
  p リクエスト中のAPI数:
  button(@click="onCancelAllButtonClick") cancel all API
</template>

<script>
import RequestArea from './components/RequestArea.vue';
import CancelableAPI from 'cancelable-api';

export default {
  components: {
    RequestArea
  },
  methods: {
    /**
     * 全APIをキャンセルするボタンをクリックした時
     */
    onCancelAllButtonClick() {
      CancelableAPI.cancelAll();
    }
  }
};
</script>
