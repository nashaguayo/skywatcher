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
    <ApodCalendar :apods="apods.list" />
  </div>
</template>

<script>
import DailyPicture from '@/components/apod/DailyPicture.vue';
import ApodCalendar from '@/components/apod/ApodCalendar.vue';
import {
  getAstronomyPictureOfTheDay,
  getAstronomyPicturesOfTheDay,
} from '@/helpers/apod';

export default {
  name: 'ApodContainer',
  title: 'Astronomy Picture of the Day',
  components: {
    DailyPicture,
    ApodCalendar,
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
      apods: {
        list: [],
        startDate: '2023-08-01',
        endDate: '2023-08-13',
      },
    };
  },
  async created() {
    this.apod = await getAstronomyPictureOfTheDay();
    this.apods.list = await getAstronomyPicturesOfTheDay(
      this.apods.startDate,
      this.apods.endDate
    );
  },
};
</script>

<style lang="scss" scoped>
.apod-container {
}
</style>
