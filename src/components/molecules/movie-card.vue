<template>
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
</template>

<script>
import moment from 'moment';
import { StarFilled, HeartOutlined, HeartTwoTone } from '@ant-design/icons-vue';
import { ENDPOINTS } from '@/config';

export default {
  name: 'movie-card',
  props: {
    movie: { type: Object },
  },
  components: {
    StarFilled,
    HeartOutlined,
    HeartTwoTone,
  },
  computed: {
    imagePath() {
      return ENDPOINTS.IMAGE;
    },
  },
  methods: {
    moment,
    addFavourite(data) {
      this.$store.commit('addFavourite', data);
    },
    isFavourite(data) {
      return !!this.$store.state.favourites.find((movie) => movie.id === data.id);
    },
  },
};
</script>
