<template>
  <div class="porpular">
    <div class="porpular-title">porpular</div>
    <ul class="porpular-list d-flex flex-wrap justify-content-start">
      <li
        v-for="item in porpularListRef"
        :key="item"
        @click="clickTag(item.tag)"
      >
        {{ item.tag }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import api from '@/api/tag';
import { useRouter } from 'vue-router';

export default {
  setup() {
    // init
    const router = useRouter();
    const porpularListRef = ref([]);
    // 通过接口获取数据，更改porpularListRef
    // to do...
    api
      .getTagPorpular({
        page: 1,
        limit: 10,
      })
      .then((res) => {
        if (res.code === 200) {
          porpularListRef.value = res.data;
        }
      });

    // 点击标签进入文章列表
    function clickTag(tag) {
      router.push({ name: 'articleList', params: { tag } });
    }
    return {
      porpularListRef,
      clickTag,
    };
  },
};
</script>

<style scoped lang="less">
@import "../assets/css/porpular.less";
</style>
