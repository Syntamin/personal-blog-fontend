<template>
  <div class="content container-fluid map">
    <div class="row justify-content-center map-title">
      <h1>White's blog</h1>
    </div>
    <div class="d-flex justify-content-center">
      <div class="col-sm-8 col-sm-offset-2">
        <ul class="map-list row d-flex flex-wrap justify-content-around">
          <li
            class="blog col-sm-3 p-0"
            v-for="tag in tagsRef"
            :key="tag.c_time"
            @click="click(tag.tag)"
          >
            <a href="#">
              <div class="blog-bg">
                <div
                  class="bg-image"
                  :style="{ backgroundImage: `url(${tag.imgUrl})` }"
                ></div>
              </div>
              <div class="blog-title d-flex justify-content-center">
                <span class="align-self-center">{{ tag.tag }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/tag';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    // init
    const tagsRef = ref([]);
    const pageRef = ref(1);
    const router = useRouter();

    api
      .getTagPorpular({
        page: 1,
        limit: 10,
      })
      .then((res) => {
        if (res.code === 200) {
          tagsRef.value.push(...res.data);
        }
      });

    function click(tag) {
      router.push({ path: `/articleList/${tag}` });
    }
    return {
      tagsRef,
      pageRef,
      click,
    };
  },
};
</script>

<style scoped lang='less'>
@import "../assets/css/map.less";
</style>
