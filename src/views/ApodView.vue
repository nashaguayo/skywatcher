<template>
  <div class="apod-view">
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
import { parseISO } from 'date-fns';

export default {
  name: 'ApodView',
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
        mediaType: '',
        title: '',
        url: '',
      },
    };
  },
  async created() {
    const apod = await getAstronomyPictureOfTheDay();
    this.apod.copyright = apod.copyright;
    this.apod.date = parseISO(apod.date);
    this.apod.explanation = apod.explanation;
    this.apod.hdurl = apod.hdurl;
    this.apod.mediaType = apod.media_type;
    this.apod.title = apod.title;
    this.apod.url = apod.url;
  },
};
</script>

<style lang="scss" scoped>
.apod-view {
  height: 100%;
}
</style>
