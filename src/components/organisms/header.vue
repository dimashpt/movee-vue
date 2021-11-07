<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }">
      <a-menu-item v-for="route in getRoutes" :key="route.path">
        <router-link :to="route.path">
          {{ route.name }}
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { ref } from 'vue';
import { routes } from '@/router';

export default {
  name: 'header',
  created() {},
  computed: {
    getRoutes() {
      return routes;
    },
  },
  setup() {
    return {
      selectedKeys: ref(['/']),
    };
  },
};
</script>
