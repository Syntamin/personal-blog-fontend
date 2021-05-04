<template>
  <div class="sentence">
    <div class="bg-img"></div>
    <div class="sentence-content">
      <h3>sentence</h3>
      <span class="content-item"
        >{{ sentence.content }}</span
      >
      <ul class="content-info">
        <li>whiteAlso</li>
        <li class="info-time"><span>{{ sentence.c_time }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

function setSentence(data) {
  const sentence = reactive(data);
  return { sentence };
}
export default {
  setup() {
    // 接口获取数据
    // to do
    return {
      ...setSentence({
        content: '很多遗憾，其实力所能及，只是因为没想到，事后就会格外遗憾',
        c_time: '4 Nov 2021',
      }),
    };
  },
};
</script>

<style scoped lang="less">
@import "../assets/css/daySentence.less";
</style>
