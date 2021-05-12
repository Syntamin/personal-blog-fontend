<template>
  <div
    class="row justify-content-center article"
    @click="clickArticle(article.id)"
  >
    <div class="col-sm-8 col-sm-offset-2">
      <div class="row no-gutters">
        <div class="col-sm-8 article-page">
          <p class="article-tag">{{ article.tags }}</p>
          <p class="article-title">
            {{ article.title }}
          </p>
          <div class="article-info">{{ formatDate(article.c_time) }}</div>
          <p class="article-content">
            {{ article.content }}
          </p>
        </div>
        <div class="col-sm-4 article-aside">
          <div
            class="aside-bg"
            :style="{ backgroundImage: `url(${article.imgUrl})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '@/utils/timeFormat';
import { useRouter } from 'vue-router';

export default {
  props: {
    article: Object,
  },
  setup() {
    // init
    const router = useRouter();

    // 进入文章详情页面
    function clickArticle(id) {
      router.push({ name: 'artilce', params: { id } });
    }
    return {
      formatDate: util.formatDate,
      clickArticle,
    };
  },
};
</script>

<style scoped lang="less">
@import "../assets/css/showArticle.less";
</style>
