<template>
  <div class="daily-picture">
    <div class="title">
      <h1>Astronomy Picture of the Day</h1>
      <h3>{{ date }}</h3>
      <h2>{{ title }}</h2>
    </div>
    <div class="image-container" @click="seeHdImage">
      <img v-if="mediaType === 'image'" class="image" :src="url" />
      <span>By {{ copyright }}</span>
    </div>
    <div class="container">
      <span>{{ explanation }}</span>
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
  methods: {
    seeHdImage() {
      window.open(this.hdurl, '_blank');
    },
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
  min-height: 100%;

  .title {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 0.5rem;
    }

    .image {
      height: auto;
      width: 100%;
      object-fit: contain;
      box-shadow: var(--main-box-shadow);
      cursor: pointer;
    }

    .image:hover {
      box-shadow: var(--bright-box-shadow);
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
}
</style>
