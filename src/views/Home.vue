<template>
  <div class="content container-fluid Home">
    <div class="row justify-content-center content-title">
      <h2>Trending Post</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-4 col-sm-offset-2">
        <porpular />
        <newComments />
      </div>
      <div class="col-sm-4">
        <daySentence />
      </div>
    </div>
    <div class="article-list">
      <showArticle
        v-for="article in blogListRef"
        :key="article.c_time"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import porpular from '@/components/porpular.vue';
import newComments from '@/components/newComments.vue';
import showArticle from '@/components/showArticle.vue';
import daySentence from '@/components/daySentence.vue';
import { ref } from 'vue';
import api from '@/api/blog';

export default {
  components: {
    porpular,
    newComments,
    showArticle,
    daySentence,
  },
  setup() {
    // 文章列表
    const blogListRef = ref([]);

    api.getBlogList({
      page: 1,
      limit: 10,
    }).then((res) => {
      if (res.code === 200) {
        res.data.forEach((item) => {
          blogListRef.value.push(item);
        });
      }
    });
    return {
      blogListRef,
    };
  },
};
</script>

<style lang="less">
@import "../assets/css/home.less";
</style>
