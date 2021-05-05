<template>
  <div class="addDaySentence">
    <editor class="editor"/>
    <a-button class="submit-btn" type="primary">提交</a-button>
  </div>
</template>

<script>
import editor from '@/components/editor.vue';

export default {
  components: {
    editor,
  },
  setup() {},
};
</script>

<style scoped lang="less">
.addDaySentence {
  display: flex;
  flex-direction: column;
  .editor {
    margin: 20px;
  }
  .submit-btn {
    width: 100px;
    align-self: center;
    margin: 30px 50px 0 0;
  }
}
</style>
