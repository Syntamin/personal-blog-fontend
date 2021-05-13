<template>
  <div class="article-list">
    <showArticle
      v-for="article in blogListRef"
      :key="article.c_time"
      :article="article"
    />
  </div>
</template>

<script>
import showArticle from '@/components/showArticle.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/api/blog';

export default {
  components: {
    showArticle,
  },
  setup() {
    // init
    const route = useRoute();
    const blogListRef = ref([]);

    api.getBlogByTag({ tag: route.params.tag, limit: 10, page: 1 }).then((res) => {
      if (res.code === 200) {
        blogListRef.value = res.data;
        console.log(blogListRef.value);
      }
    });
    return {
      blogListRef,
    };
  },
};
</script>
