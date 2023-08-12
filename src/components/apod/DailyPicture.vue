<template>
  <div class="daily-picture">
    <h1>APOD</h1>
  </div>
</template>

<script>
import { getAstronomyPictureOfTheDay } from '@/helpers/apod';

export default {
  name: 'DailyPicture',
  data() {
    return {
      copyright: '',
      date: '',
      explanation: '',
      hdurl: '',
      media_type: '',
      title: '',
      url: '',
    };
  },
  async created() {
    const { copyright, date, explanation, hdurl, media_type, title, url } =
      await getAstronomyPictureOfTheDay();
    this.copyright = copyright;
    this.date = date;
    this.explanation = explanation;
    this.hdurl = hdurl;
    this.media_type = media_type;
    this.title = title;
    this.url = url;
  },
};
</script>
