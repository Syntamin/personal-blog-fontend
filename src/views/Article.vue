<template>
  <div class="row justify-content-center">
    <div class="article col-sm-8 col-sm-offset-2" v-html="article.content">
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import api from '@/api/blog';
import { reactive } from 'vue';

export default {
  setup() {
    // init
    const route = useRoute();

    const article = reactive({ title: 'title', content: 'content' });

    api.getBlog(route.params.id).then((res) => {
      console.log(res);
      if (res.code === 200) {
        article.title = res.data.title;
        article.content = res.data.content;
      }
    });
    return {
      article,
    };
  },
};
</script>

<style scoped lang="less">
</style>
