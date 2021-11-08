<template>
  <a-row style="margin-bottom: 20px">
    <a-col :span="auto">
      <h2>Favourites</h2>
    </a-col>
  </a-row>
  <a-row :gutter="[15, 15]">
    <a-col
      v-for="movie in $store.state.favourites.list"
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
  name: 'Favourites',
  components: {
    MovieCard,
  },
  data() {},
  computed: {},
  methods: {},
};
</script>
