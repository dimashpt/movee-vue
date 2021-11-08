import { message } from 'ant-design-vue';

export default {
  addFavourite(state, data) {
    const isFavouriteExist = !!state.list.find((movie) => movie.id === data.id);

    if (isFavouriteExist) {
      message.success(`${data.title} removed from your favourites`);
      state.list.splice(state.list.indexOf(data), 1);
    } else {
      message.success(`${data.title} added to your favourites`);
      state.list.push(data);
    }
  },
};
