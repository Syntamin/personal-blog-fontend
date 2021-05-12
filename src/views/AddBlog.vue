<template>
  <div class="addBlog">
    <div class="input">
      <a-input
        class="input-title"
        v-model:value="titleRef"
        placeholder="输入标题"
      />
      <a-select
        class="input-tags"
        mode="tags"
        :size="size"
        placeholder="输入标签"
        v-model:value="tagsRef"
        style="width: 200px"
      >
        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </a-select-option>
      </a-select>
    </div>
    <editor :isGetContent="isGetContentRef" @getContent="getContent" />
    <a-button class="submit-btn" type="primary" @click="submit">提交</a-button>
    <!-- <a-button type="primary" disabled>Primary(disabled)</a-button> -->
  </div>
</template>

<script>
import editor from '@/components/editor.vue';
import blogApi from '@/api/blog';
import { defineComponent, ref, getCurrentInstance } from 'vue';
import utils from '@/utils/getImageUrl';
import { message } from 'ant-design-vue';

export default defineComponent({
  components: {
    editor,
  },
  setup() {
    const popupScroll = () => {
      // console.log('popupScroll');
    };

    // init
    const titleRef = ref('');
    const tagsRef = ref([]);
    const contentRef = ref('');
    const { proxy } = getCurrentInstance();

    // 获取editor的控制条件
    const isGetContentRef = ref(false);

    // 从子组件editor获取内容
    async function getContent(value) {
      contentRef.value = value;
      // 获取的bing图片作为blog背景
      const imgUrl = await utils.getImageUrl();
      blogApi
        .addBlog({
          title: titleRef.value,
          tags: tagsRef.value,
          content: value,
          imgUrl: imgUrl.data.url,
          views: 0,
        })
        .then((res) => {
          isGetContentRef.value = false;
          message.success(res.msg);
          proxy.reset();
        })
        .catch((err) => {
          isGetContentRef.value = false;
          message.success(err);
        });
      // console.log(imagUrl, value);
    }

    // button submit的点击事件
    function submit() {
      console.log('点击了btn');
      isGetContentRef.value = true;
    }

    // 重置所有输入
    function reset() {
      titleRef.value = '';
      tagsRef.value = [];
    }

    return {
      titleRef,
      popupScroll,
      size: ref('default'),
      tagsRef,
      isGetContentRef,
      submit,
      getContent,
      reset,
    };
  },
});
</script>

<style scoped lang="less">
.addBlog {
  display: flex;
  flex-direction: column;
  .input {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .input-title {
      flex: 0 0 45%;
      margin-right: 20px;
    }

    .input-tags {
      flex: 1 1 auto;
    }
  }
  .submit-btn {
    width: 100px;
    margin-top: 30px;
    margin-right: 50px;
    align-self: center;
  }
}
</style>
