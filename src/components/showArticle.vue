<template>
  <div class="row justify-content-center article">
    <div class="col-sm-8 col-sm-offset-2">
      <div class="row no-gutters">
        <div class="col-sm-8 article-page">
          <p class="article-tag">{{ article.tags }}</p>
          <p class="article-title">
            {{ article.title }}
          </p>
          <div class="article-info">{{ article.c_time }}</div>
          <p class="article-content">
            {{ article.content }}
          </p>
        </div>
        <div class="col-sm-4 article-aside">
          <div class="aside-bg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
  },
  setup() {},
};
</script>

<style scoped lang="less">
@import "../assets/css/showArticle.less";
</style>
