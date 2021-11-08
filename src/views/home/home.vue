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
      v-for="movie in $store.state.discover"
      :key="movie.id"
      :xl="3"
      :lg="6"
      :md="8"
      :sm="12"
      :xs="24"
    >
      <a-card hoverable>
        <template #cover>
          <img :alt="movie.title" :src="imagePath + movie.poster_path" />
        </template>
        <a-card-meta :title="movie.title">
          <template #description>{{ moment(movie.release_date).format('DD MMM YYYY') }}</template>
        </a-card-meta>
        <a-row style="margin-top: 10px">
          <StarFilled style="margin: 4px 5px 0px 0px; color: #fbd148" />
          <strong>{{ movie.vote_average }} ({{ movie.vote_count }})</strong>
          <a-button
            shape="circle"
            style="position: absolute; bottom: 110px; right: 10px"
            @click="addFavourite(movie)"
          >
            <template #icon>
              <HeartTwoTone v-if="isFavourite(movie)" two-tone-color="#eb2f96" />
              <HeartOutlined v-else />
            </template>
          </a-button>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import moment from 'moment';
import { StarFilled, HeartOutlined, HeartTwoTone } from '@ant-design/icons-vue';
import { ENDPOINTS } from '@/config';

export default {
  name: 'Home',
  components: {
    StarFilled,
    HeartOutlined,
    HeartTwoTone,
  },
  data() {
    return {
      genre: 'latest',
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
    moment,
    onGenreChange(value) {
      this.genre = value;
    },
    addFavourite(data) {
      this.$store.commit('addFavourite', data);
    },
    isFavourite(data) {
      return !!this.$store.state.favourites.find((movie) => movie.id === data.id);
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
