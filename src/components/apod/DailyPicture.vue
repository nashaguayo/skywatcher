<template>
  <div class="daily-picture">
    <div class="image-container" @click="seeHdImage">
      <img v-if="mediaType === 'image'" class="image" :src="url" />
      <span class="copyright">By {{ copyright }}</span>
    </div>
    <div class="title">
      <transition name="slide-from-above" appear>
        <h1>Astronomy Picture of the Day</h1>
      </transition>
      <span class="date">{{ dateText }}</span>
      <h2>{{ title }}</h2>
    </div>
    <div class="container">
      <span>{{ explanation }}</span>
    </div>
  </div>
</template>

<script>
import { getAstronomyPictureOfTheDay } from '@/helpers/apod';
import { format, isEqual, startOfDay, parseISO } from 'date-fns';

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
        return "Today's Picture";
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
    this.date = parseISO(date);
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

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;

    .copyright {
      position: absolute;
      margin-bottom: 1rem;
      margin-right: 0.5rem;
      bottom: 0;
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: var(--variant-text-color);
    }

    .image {
      height: auto;
      width: 100%;
      object-fit: contain;
      cursor: pointer;
      -webkit-mask-image: linear-gradient(black 70%, transparent);
    }

    .image:hover {
      box-shadow: var(--bright-box-shadow);
    }
  }

  .title {
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

  .container {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem 2rem;
  }
}

.slide-from-above-enter-active {
  transition: transform 0.5s, opacity 0.5s;
}

.slide-from-above-enter {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
