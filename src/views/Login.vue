<template>
  <div class="login">
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item
        ref="name"
        label="账户"
        name="user_name"
        :label-col="{ span: 2 }"
      >
        <a-input v-model:value="formState.user_name" type="text" />
      </a-form-item>
      <a-form-item
        has-feedback
        label="密码"
        name="password"
        type="password"
        :label-col="{ span: 2 }"
      >
        <a-input
          v-model:value="formState.password"
          type="password"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 10 }">
        <a-button type="primary" @click="onSubmit">登录</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">清空</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';
import { message } from 'ant-design-vue';
import Login from '@/api/login';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      user_name: '',
      password: '',
    });
    const rules = {
      name: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        },
      ],
    };

    // 初始化 vuex 以及 router
    const store = useStore();
    const router = useRouter();

    // 提交login
    const onSubmit = async () => {
      formRef.value
        .validate()
        .then(() => {
          // api 请求登录
          Login.login({
            user_name: formState.user_name,
            password: formState.password,
          })
            .then((res) => {
              // 获取到token，存储到 store and localStorage
              if (res.code === 200 && res.data) {
                store.dispatch('saveToken', res.data.token).then((resp) => {
                  if (resp) {
                    store.dispatch('saveLocalStorage', res.data.token).then((respon) => {
                      if (respon) {
                        message.info(res.msg);
                        router.push({ name: 'manage' });
                      }
                    });
                  }
                });
              } else {
                message.info(res.msg);
              }
            })
            .catch((error) => {
              message.info(error);
            });
        })
        .catch(() => {
          message.info('请输入正确的格式');
          // console.log('error', error);
        });
    };

    // 重置
    const resetForm = () => {
      formRef.value.resetFields();
    };

    return {
      formRef,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      other: '',
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>

<style scoped lang="less">
.login {
  width: 700px;
  padding: 90px 0 40px 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #ffffff;
  .ant-form {
    .ant-form-item {
      justify-content: center;
    }
    .ant-form-item-with-help {
      margin-bottom: 11px;
    }
  }
}
</style>
