<template>
  <div class="addBlog">
    <div class="input">
      <a-input
        class="input-title"
        v-model:value="value"
        placeholder="输入标题"
      />
      <a-select
        class="input-tags"
        mode="tags"
        :size="size"
        placeholder="输入标签"
        v-model:value="value3"
        style="width: 200px"
      >
        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </a-select-option>
      </a-select>
    </div>
    <editor />
    <a-button class="submit-btn" type="primary">提交</a-button>
    <!-- <a-button type="primary" disabled>Primary(disabled)</a-button> -->
  </div>
</template>

<script>
import editor from '@/components/editor.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    editor,
  },
  setup() {
    const popupScroll = () => {
      console.log('popupScroll');
    };
    const value = ref('');

    return {
      value,
      popupScroll,
      size: ref('default'),
      value3: ref([]),
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
