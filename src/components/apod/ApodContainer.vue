<template>
  <div class="apod-container">
    <DailyPicture
      :copyright="apod.copyright"
      :date="apod.date"
      :explanation="apod.explanation"
      :hdurl="apod.hdurl"
      :mediaType="apod.mediaType"
      :title="apod.title"
      :url="apod.url"
    />
  </div>
</template>

<script>
import DailyPicture from '@/components/apod/DailyPicture.vue';
import { getAstronomyPictureOfTheDay } from '@/helpers/apod';

export default {
  name: 'ApodContainer',
  title: 'Astronomy Picture of the Day',
  components: {
    DailyPicture,
  },
  data() {
    return {
      apod: {
        copyright: '',
        date: new Date(),
        explanation: '',
        hdurl: '',
        mediaType: 'image',
        title: '',
        url: '',
      },
    };
  },
  async created() {
    this.apod = await getAstronomyPictureOfTheDay();
  },
};
</script>

<style lang="scss" scoped>
.apod-container {
  height: 100%;
}
</style>