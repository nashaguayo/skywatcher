<template>
  <div class="daily-picture">
    <div class="title">
      <h1>Astronomy Picture of the Day</h1>
      <h2>{{ title }}</h2>
      <span v-if="dateText" class="date">{{ dateText }}</span>
    </div>
    <div class="image-container" @click="seeHdImage">
      <img v-if="mediaType === 'image'" class="image" :src="url" />
      <span class="copyright">By {{ copyright }}</span>
    </div>
    <div class="container">
      <span>{{ explanation }}</span>
      <span>{{ mediaType }}</span>
    </div>
  </div>
</template>

<script>
import { getAstronomyPictureOfTheDay } from '@/helpers/apod';
import { format, isEqual, startOfDay } from 'date-fns';

export default {
  name: 'DailyPicture',
  data() {
    return {
      copyright: '',
      date: new Date(),
      explanation: '',
      hdurl: '',
      mediaType: '',
      title: '',
      url: '',
    };
  },
  computed: {
    dateText() {
      if (isEqual(startOfDay(this.date), startOfDay(new Date()))) {
        return '';
      } else if (this.date.getFullYear() === new Date().getFullYear()) {
        return format(this.date, 'EEEE, do LLLL');
      }
      return format(this.date, 'EEEE, do LLLL yyyy');
    },
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
    var(--main-gradient-background-color)
  );
  min-height: 100%;

  .title {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h1,
    h2,
    span {
      text-align: center;
    }

    h1,
    h2 {
      padding: 0 2rem;
    }

    h2 {
      width: 100%;
      padding: 0.6rem 0;
      background: linear-gradient(
        100deg,
        var(--secondary-background-color),
        var(--secondary-gradient-background-color)
      );
      color: var(--secondary-text-color);
      box-shadow: var(--main-box-shadow);
    }

    .date {
      color: var(--variant-text-color);
      font-size: 1.2rem;
    }
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    .copyright {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: var(--variant-text-color);
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
