<template>
  <a-row style="margin-bottom: 20px">
    <a-col :span="auto">
      <h2>Genre</h2>
    </a-col>
    <a-col style="margin-left: 20px">
      <a-select v-model:value="genre" @change="onGenreChange" style="width: 200px;">
        <a-select-opt-group>
          <template #label>
            <span>Default</span>
          </template>
          <a-select-option value="latest">Latest</a-select-option>
        </a-select-opt-group>
        <a-select-opt-group label="Category">
          <a-select-option
            v-for="item in genres"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </a-select-option>
        </a-select-opt-group>
      </a-select>
    </a-col>
  </a-row>
  <a-row :gutter="[15, 15]">
    <a-col
      v-for="movie in $store.state.home.discover"
      :key="movie.id"
      :xl="3"
      :lg="6"
      :md="8"
      :sm="12"
      :xs="24"
    >
      <movie-card :movie="movie" />
    </a-col>
  </a-row>
</template>

<script>
import { MovieCard } from '@/components/molecules';

export default {
  name: 'Home',
  components: {
    MovieCard,
  },
  data() {
    return {
      genre: 'latest',
    };
  },
  computed: {
    genres() {
      return this.$store.state.home.genres;
    },
  },
  methods: {
    onGenreChange(value) {
      this.genre = value;
    },
  },
  created() {
    this.$store.dispatch('home/getGenres');
    this.$store.dispatch('home/getDiscover');
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
