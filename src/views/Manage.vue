<template>
  <a-layout :style="{ height: screenHeightRef + 'px' }">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <router-link :to="{ name: 'manageBlog' }">
          <a-menu-item key="1">
            <upload-outlined />
            <span class="nav-text">管理博客</span>
          </a-menu-item>
        </router-link>
        <router-link :to="{ name: 'addBlog' }">
          <a-menu-item key="2">
            <user-outlined />
            <span class="nav-text">添加博客</span>
          </a-menu-item>
        </router-link>
        <router-link :to="{ name: 'addDaySentence' }">
          <a-menu-item key="3">
            <video-camera-outlined />
            <span class="nav-text">每日一句</span>
          </a-menu-item></router-link
        >
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{
            padding: '24px',
            background: '#fff',
            minHeight: screenHeightRef * 0.8 + 'px',
          }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        end ©2021 Created by LXM
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

/**
 * 初始化高度，获取当前屏幕高度，赋给layout
 */
function init() {
  const screenHeightRef = ref(document.body.clientHeight);
  return {
    screenHeightRef,
  };
}

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },

  setup() {
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken) => {
      console.log(broken);
    };
    return {
      selectedKeys: ref(['4']),
      onCollapse,
      onBreakpoint,
      ...init(),
    };
  },
});
</script>
<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>
