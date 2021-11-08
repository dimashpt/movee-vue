<template>
  <a-row style="margin-bottom: 20px">
    <a-col :span="auto">
      <h2>Settings</h2>
    </a-col>
  </a-row>
  <a-form :model="apiKey">
    <a-form-item label="TMDB API key">
      <a-input v-model:value="apiKey" />
      {{ getKey }}
    </a-form-item>
    <a-form-item>
      <a-button type="primary" style="margin: 0 auto" @click="setKey">Save Chages</a-button>
    </a-form-item>
  </a-form>
</template>

<script>

export default {
  name: 'Settings',
  data() {
    return {
      apiKey: '',
    };
  },
  computed: {
    getKey() {
      return this.$store.state.apiKey;
    },
  },
  methods: {
    setKey() {
      this.$store.commit('setApiKey', this.apiKey);
    },
  },
};
</script>
