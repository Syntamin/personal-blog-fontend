<template>
  <div class="porpular">
    <div class="porpular-title">porpular</div>
    <ul class="porpular-list d-flex flex-wrap justify-content-start">
      <li v-for="item in porpularListRef" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

function setPropularListRef(list) {
  const porpularListRef = ref(list);
  return {
    porpularListRef,
  };
}
export default {
  setup() {
    // 通过接口获取数据，更改porpularListRef
    // to do...
    return {
      ...setPropularListRef([
        'Fashion',
        'Art',
        'Lifestyle',
        'Love',
        'Travel',
        'Health',
        'Education',
        'Movie',
        'Games',
        'Sports',
      ]),
    };
  },
};
</script>

<style scoped lang="less">
@import "../assets/css/porpular.less";
</style>
