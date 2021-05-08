<template>
  <div class="sentence">
    <div class="bg-img"></div>
    <div class="sentence-content">
      <h3>sentence</h3>
      <span class="content-item">{{ sentence.content }}</span>
      <ul class="content-info">
        <li>{{ sentence.author }}</li>
        <li class="info-time">
          <span>{{ sentence.c_time }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import daySentence from '@/api/daySentence';
import timeFormat from '@/utils/timeFormat';

export default {
  setup() {
    // 初始化数据
    const sentence = reactive({
      author: '',
      content: '',
      c_time: '',
    });
    // 获取每日一句内容
    daySentence.querySentence().then((res) => {
      /* eslint-disable */
      const { content, c_time, author } = res.data;
       /* eslint-able */
      sentence.author = author;
      sentence.content = content;
      sentence.c_time = timeFormat.formatDate(c_time);
    });
    return {
      sentence,
    };
  },
};
</script>

<style scoped lang="less">
@import "../assets/css/daySentence.less";
</style>
