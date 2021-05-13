<template>
  <div class="content container-fluid message">
    <div class="row justify-content-center message-title">
      <h1>Message me</h1>
    </div>

    <div class="d-flex justify-content-center">
      <div class="col-sm-8">
        <form class="d-flex flex-column align-items-center message-input">
          <h2>Message with me</h2>
          <div class="col-sm-10 p-0 d-flex justify-content-between">
            <input
              type="text"
              class="form-control col-sm-6"
              placeholder="请输入邮箱"
              :value="emailRef"
            />
            <div class="col-sm-4 d-flex">
              <input
                type="text"
                class="form-control"
                placeholder="验证码"
                :value="vCodeRef"
              />
              <div
                class="v-code"
                @click="changeVcode"
                v-html="vCodeImgRef"
              ></div>
            </div>
          </div>
          <textarea
            class="form-control col-sm-10"
            id="formControlTextarea1"
            rows="3"
            placeholder="请输入留言"
            :value="commentRef"
          ></textarea>
          <button type="button" class="input-btn" @click="submitComment">
            submit
          </button>
        </form>

        <ul class="message-content">
          <li>
            <div class="d-flex justify-content-between user-info">
              <div class="user">972349576@qq.com</div>
              <div class="time">2018/6/26 12:35</div>
            </div>
            <div class="user-message">hello,everyone</div>
            <div class="reply d-flex justify-content-end">回复</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/comment';
import { ref } from 'vue';

async function getVcode() {
  const vCode = await api.getVcode();
  return vCode;
}

export default {
  setup() {
    // init
    const vCodeImgRef = ref('');

    const vCodeRef = ref('');
    const emailRef = ref('');
    const commentRef = ref('');
    const parentRef = ref('');

    // 进入时获取验证码
    getVcode().then((res) => {
      vCodeImgRef.value = res.data.data;
    });

    // 刷新验证码
    function changeVcode() {
      getVcode().then((res) => {
        vCodeImgRef.value = res.data.data;
      });
    }

    // 提交评论
    function submitComment() {
      console.log(vCodeRef.value, parentRef.value, commentRef.value, emailRef.value);
      api
        .addComment({
          vCode: vCodeRef.value,
          parent: parentRef.value,
          user_name: emailRef.value,
          comment: commentRef.value,
          email: emailRef.value,
        })
        .then((res) => {
          console.log(res);
        });
    }
    // parent, user_name, comment, email
    return {
      vCodeImgRef,
      vCodeRef,
      emailRef,
      commentRef,
      parentRef,
      submitComment,
      changeVcode,
    };
  },
};
</script>

<style scoped lang='less'>
@import "../assets/css/message.less";
</style>
