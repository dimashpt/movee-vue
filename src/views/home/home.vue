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
  <a-row :gutter="[15, 15]">
    <a-col
      v-for="movie in $store.state.discover"
      :key="movie.id"
      :xl="3" :lg="6" :md="8" :sm="12" :xs="24">
      <a-card hoverable>
        <template #cover>
          <img :alt="movie.title" :src="imagePath + movie.poster_path" />
        </template>
        <a-card-meta :title="movie.title">
          <template #description>{{ movie.release_date }}</template>
        </a-card-meta>
        <a-row style="margin-top: 10px">
          <StarFilled style="margin: 4px 5px 0px 0px; color: #FBD148" />
          {{ movie.vote_average }} ({{movie.vote_count}})
          <a-button shape="circle" style="position: absolute; bottom: 110px; right: 10px;">
            <template #icon>
              <HeartOutlined />
            </template>
          </a-button>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { StarFilled, HeartOutlined } from '@ant-design/icons-vue';
import { ENDPOINTS } from '@/config';

export default {
  name: 'Home',
  components: {
    StarFilled,
    HeartOutlined,
  },
  data() {
    return {
      genre: null,
    };
  },
  computed: {
    imagePath() {
      return ENDPOINTS.IMAGE;
    },
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
    this.$store.dispatch({ type: 'getDiscover' });
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>
