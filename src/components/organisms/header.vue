<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }">
      <a-menu-item key="1">
        <router-link to="/">
          Movies
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/favourites">
          Favourites
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/settings">
          Settings
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'header',
  setup() {
    return {
      selectedKeys: ref(['1']),
    };
  },
};
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
