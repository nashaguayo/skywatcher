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
    <ApodCalendar :apods="apods.list" @dayTapped="displayApod" />
  </div>
</template>

<script>
import DailyPicture from '@/components/apod/DailyPicture.vue';
import ApodCalendar from '@/components/apod/ApodCalendar.vue';
import { getAstronomyPicturesOfTheDay } from '@/helpers/apod';
import { format, startOfMonth } from 'date-fns';

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
        startDate: format(startOfMonth(new Date()), 'yyyy-MM-dd'),
        endDate: format(new Date(), 'yyyy-MM-dd'),
      },
    };
  },
  async created() {
    this.apods.list = await getAstronomyPicturesOfTheDay(
      this.apods.startDate,
      this.apods.endDate
    );
    this.apod = this.apods.list[this.apods.list.length - 1];
  },
  methods: {
    displayApod(apod) {
      this.apod = apod;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.apod-container {
}
</style>
