<template>
  <div class="comments">
    <div class="comments-title">comments</div>
    <div class="comments-list">
      <ul class="d-flex flex-wrap">
        <li
          class="row col-sm-6"
          v-for="comment in commnetsList"
          :key="comment.c_time"
        >
          <div
            class="comments-content col-sm-12 align-self-start d-flex flex-column"
          >
            <div class="content-info d-flex justify-content-between">
              <span>{{ comment.user_name }}</span>
              <span>{{ comment.c_time }}</span>
            </div>
            <p>
              {{ comment.comments }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

function setCommentsList(list) {
  const commnetsList = reactive(list);
  return {
    commnetsList,
  };
}
export default {
  setup() {
    // 通过接口请求数据
    // to do
    return {
      ...setCommentsList([
        {
          user_name: '用户名',
          c_time: '时间',
          comments: "It's time to do itIt's time to do itIt's time to do itIt's time to do it",
        },
        {
          user_name: '用户名',
          c_time: '时间',
          comments: "It's time to do itIt's time to do itIt's time to do itIt's time to do it",
        },
        {
          user_name: '用户名',
          c_time: '时间',
          comments: "It's time to do itIt's time to do itIt's time to do itIt's time to do it",
        },
        {
          user_name: '用户名',
          c_time: '时间',
          comments: "It's time to do itIt's time to do itIt's time to do itIt's time to do it",
        },
        {
          user_name: '用户名',
          c_time: '时间',
          comments: "It's time to do itIt's time to do itIt's time to do itIt's time to do it",
        },
        {
          user_name: '用户名',
          c_time: '时间',
          comments: "It's time to do itIt's time to do itIt's time to do itIt's time to do it",
        },
      ]),
    };
  },
};
</script>

<style scoped lang="less">
@import "../assets/css/newComments.less";
</style>
