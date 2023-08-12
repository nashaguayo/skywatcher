<template>
  <div class="daily-picture">
    <div class="title">
      <h1>Astronomy Picture</h1>
      <h1>of the Day</h1>
      <h2>{{ date }}</h2>
      <h2>{{ title }}</h2>
    </div>
    <div class="image-container">
      <img v-if="mediaType === 'image'" class="image" :src="url" />
    </div>
    <div class="container">
      <span>{{ copyright }}</span>
      <span>{{ date }}</span>
      <span>{{ explanation }}</span>
      <span>{{ hdurl }}</span>
      <span>{{ mediaType }}</span>
    </div>
  </div>
</template>

<script>
import { getAstronomyPictureOfTheDay } from '@/helpers/apod';

export default {
  name: 'DailyPicture',
  data() {
    return {
      copyright: '',
      date: null,
      explanation: '',
      hdurl: '',
      mediaType: '',
      title: '',
      url: '',
    };
  },
  async created() {
    const { copyright, date, explanation, hdurl, media_type, title, url } =
      await getAstronomyPictureOfTheDay();
    this.copyright = copyright;
    this.date = new Date(date);
    this.explanation = explanation;
    this.hdurl = hdurl;
    this.mediaType = media_type;
    this.title = title;
    this.url = url;
  },
};
</script>

<style lang="scss" scoped>
.daily-picture {
  background: linear-gradient(
    100deg,
    var(--main-background-color),
    var(--variant-background-color)
  );
  height: 100%;

  .image {
    height: auto;
    width: 100%;
    object-fit: contain;
    box-shadow: var(--main-box-shadow);
  }

  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
