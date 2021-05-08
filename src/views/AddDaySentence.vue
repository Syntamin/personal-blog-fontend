<template>
  <div class="addDaySentence">
    <editor
      class="editor"
      :isGetContent="isGetContentRef"
      @getContent="getContent"
    />
    <div class="wrapper">
      <a-input
        class="author-input"
        v-model:value="authorRef"
        placeholder="作者"
        allow-clear
      />
      <a-button class="submit-btn" type="primary" @click="submit"
        >提交</a-button
      >
    </div>
  </div>
</template>

<script>
import editor from '@/components/editor.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import daySentence from '@/api/daySentence';
import { message } from 'ant-design-vue';

export default {
  components: {
    editor,
  },
  setup() {
    // init
    const router = useRouter();

    // input
    const authorRef = ref('');

    // editor
    // 触发获取子组件的数据
    const isGetContentRef = ref(false);
    function getContent(value) {
      daySentence
        .addSentence({
          author: authorRef.value,
          content: value,
        })
        .then((res) => {
          if (res.code === 200 && res.data) {
            message.info('添加成功');
            // 重置触发状态
            isGetContentRef.value = false;
          } else {
            message.info(res.msg);
            router.push({ name: 'login' });
          }
        });
    }

    // button
    // 点击事件
    function submit() {
      // 点击后触发获取状态
      isGetContentRef.value = true;
    }
    return {
      isGetContentRef,
      getContent,
      submit,
      authorRef,
    };
  },
};
</script>

<style scoped lang="less">
.addDaySentence {
  display: flex;
  flex-direction: column;
  .editor {
    margin: 20px;
  }
  .wrapper {
    align-self: center;
    .author-input {
      width: 100px;
      margin-right: 50px;
    }
    .submit-btn {
      width: 100px;
    }
  }
}
</style>
