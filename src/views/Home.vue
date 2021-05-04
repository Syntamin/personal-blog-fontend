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
        <!-- <div class="sentence">
          <div class="bg-img"></div>
          <div class="sentence-content">
            <h3>sentence</h3>
            <span class="content-item"
              >很多遗憾，其实力所能及，只是因为没想到，事后就会格外遗憾</span
            >
            <ul class="content-info">
              <li>whiteAlso</li>
              <li class="info-time"><span>4 Nov 2021</span></li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
    <div class="article-list">
      <showArticle
        v-for="article in articleList"
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
import { reactive } from 'vue';

/**
 * 设置articleList的值
 */
function setArticleList(list) {
  const articleList = reactive(list);
  return {
    articleList,
  };
}

export default {
  components: {
    porpular,
    newComments,
    showArticle,
    daySentence,
  },
  setup() {
    return {
      ...setArticleList([
        {
          tags: 'Love',
          title: 'A Funny Thing That Happens In Relationships',
          c_time: '2 Feb 2021 344',
          content:
            'Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc...',
          bg: 'http://www.baidu.com',
        },
        {
          tags: 'Love',
          title: 'A Funny Thing That Happens In Relationships',
          c_time: '2 Feb 2021 344',
          content:
            'Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc...',
          bg: 'http://www.baidu.com',
        },
        {
          tags: 'Love',
          title: 'A Funny Thing That Happens In Relationships',
          c_time: '2 Feb 2021 344',
          content:
            'Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc...',
          bg: 'http://www.baidu.com',
        },
      ]),
    };
  },
};
</script>

<style lang="less">
@import "../assets/css/home.less";
</style>
