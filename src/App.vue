<template>
  <navbar />
  <router-view/>
</template>

<script>
import Navbar from '@/components/organisms/navbar.vue';

export default {
  components: { Navbar },
};
</script>
