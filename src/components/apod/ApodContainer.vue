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
    <ApodCalendar
      :apods="apods.list"
      :date="date"
      @dayTapped="displayApod"
      @dateChanged="searchApod"
    />
  </div>
</template>

<script>
import DailyPicture from '@/components/apod/DailyPicture.vue';
import ApodCalendar from '@/components/apod/ApodCalendar.vue';
import { getAstronomyPicturesOfTheDay } from '@/helpers/apod';
import { format, startOfMonth, endOfMonth, isBefore, parseISO } from 'date-fns';

export default {
  name: 'ApodContainer',
  title: 'Astronomy Picture of the Day',
  components: {
    DailyPicture,
    ApodCalendar,
  },
  data() {
    return {
      date: '',
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
  watch: {
    async date(date) {
      let endDate;
      let startDate;
      if (
        isBefore(parseISO(date), startOfMonth(this.apod.date)) ||
        isBefore(endOfMonth(this.apod.date), parseISO(date))
      ) {
        if (isBefore(new Date(), endOfMonth(parseISO(date)))) {
          endDate = format(new Date(), 'yyyy-MM-dd');
        } else {
          endDate = format(endOfMonth(parseISO(date)), 'yyyy-MM-dd');
        }
        if (isBefore(startOfMonth(parseISO(date)), new Date(1995, 6, 16))) {
          startDate = format(new Date(1995, 6, 16), 'yyyy-MM-dd');
        } else {
          startDate = format(startOfMonth(parseISO(date)), 'yyyy-MM-dd');
        }
        this.apods.list = await getAstronomyPicturesOfTheDay(
          startDate,
          endDate
        );
      }
      const apodIndex = this.apods.list.findIndex(
        (apod) => format(apod.date, 'yyyy-MM-dd') === date
      );
      this.displayApod(this.apods.list[apodIndex < 0 ? 0 : apodIndex]);
    },
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
    searchApod(date) {
      this.date = date;
    },
  },
};
</script>

<style lang="scss" scoped>
.apod-container {
}
</style>
