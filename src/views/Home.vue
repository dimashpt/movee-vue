<template>
  <div class="home">
    <button @click="count--">
      Decrease
    </button>
    <h1>
      {{ count }}
    </h1>
    <button @click="count++">
      Increase
    </button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      count: 0,
    };
  },
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
