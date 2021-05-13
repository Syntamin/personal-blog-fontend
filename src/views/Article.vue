<template>
  <div class="container-fluid">
    <div class="row justify-content-center content-title">
      <h2>{{ article.title }}</h2>
    </div>
    <div class="row justify-content-center">
      <div
        class="article col-sm-8 col-sm-offset-2"
        v-html="article.content"
      ></div>
    </div>
    <div class="row justify-content-center article-info">
      <div class="col-sm-8 col-sm-offset-2 d-flex justify-content-between info-content">
        <div class="tags">{{ article.tags }}</div>
        <div class="views">{{ `访问次数: ${article.views}` }}</div>
      </div>
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

    const article = reactive({
      title: '',
      content: '',
      views: 0,
      tags: '',
    });

    api.getBlog(route.params.id).then((res) => {
      if (res.code === 200) {
        article.title = res.data.title;
        article.content = res.data.content;
        article.views = res.data.views;
        article.tags = res.data.tags;
      }
    });
    return {
      article,
    };
  },
};
</script>

<style scoped lang="less">
.article {
  padding: 50px 50px;
  background-color: #ffffff;
}

.article-info {
  margin-top: 30px;
  .info-content {
    padding: 50px 50px;
    background-color: #ffffff;
  }
}
</style>
