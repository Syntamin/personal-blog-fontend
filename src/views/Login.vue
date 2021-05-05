<template>
  <div class="login">
    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item ref="name" label="账户" name="name" :label-col="{ span: 2 }">
        <a-input v-model:value="formState.name" type="text"/>
      </a-form-item>
      <a-form-item
        has-feedback
        label="密码"
        name="password"
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
import {
  defineComponent, reactive, ref, toRaw,
} from 'vue';
import { message } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      name: '',
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

    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          // api 请求登录
          message.success('登录成功');
          console.log('values', formState, toRaw(formState));
        })
        .catch((error) => {
          message.error('登录失败');
          console.log('error', error);
        });
    };

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
