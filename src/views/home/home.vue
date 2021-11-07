<template>
  <a-row>
    <h2>Genre</h2>
    <a-select
      ref="genre"
      v-model:value="genre"
      @change="onGenreChange"
      style="width: 150px; margin-left: 20px">
      <a-select-option v-for="item in genres" :key="item.id" :value="item.id">
        {{ item.name }}
      </a-select-option>
    </a-select>
  </a-row>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      genre: null,
    };
  },
  computed: {
    genres() {
      return this.$store.state.genres;
    },
  },
  methods: {
    onGenreChange(value) {
      this.genre = value;
    },
  },
  created() {
    this.$store.dispatch({ type: 'getGenres' });
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
