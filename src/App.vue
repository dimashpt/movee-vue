<template>
  <a-layout>
    <Header />
    <a-layout-content style="padding: 0 50px">
      <a-row>
        <a-col :span="12">
          <h1 style="margin: 25px 0">Discover Movie</h1>
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-breadcrumb style="margin: 25px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>Movies</a-breadcrumb-item>
          </a-breadcrumb>
        </a-col>
      </a-row>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from './components/organisms/header.vue';

export default {
  components: { Header },
};
</script>
