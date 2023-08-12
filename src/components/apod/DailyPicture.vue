<template>
  <div class="daily-picture">
    <transition name="slide-slower-from-above" appear>
      <div class="image-container" @click="seeHdImage">
        <img v-if="mediaType === 'image'" class="image" :src="url" />
        <LazyYoutube v-else :src="url" class="video" />
        <transition name="slide-from-right" appear>
          <span class="copyright">By {{ copyright }}</span>
        </transition>
      </div>
    </transition>
    <div class="title-container">
      <transition name="slide-from-above" appear>
        <h1>Astronomy Picture of the Day</h1>
      </transition>
      <transition name="flip-open" appear>
        <span class="date">{{ dateText }}</span>
      </transition>
      <transition name="open-up" appear>
        <div class="title">
          <transition name="flip-open-later" appear>
            <h2>{{ title }}</h2>
          </transition>
        </div>
      </transition>
    </div>
    <transition name="slide-up" appear>
      <div class="container">
        <span>{{ explanation }}</span>
      </div>
    </transition>
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
      if (this.mediaType === 'image') {
        window.open(this.hdurl, '_blank');
      }
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

    .video {
      margin-bottom: 2.5rem;
    }

    .image:hover {
      box-shadow: var(--bright-box-shadow);
    }
  }

  .title-container {
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

    .date {
      color: var(--variant-text-color);
      font-size: 1.2rem;
    }

    .title {
      width: 100%;
      background: linear-gradient(
        100deg,
        var(--secondary-background-color),
        var(--secondary-gradient-background-color)
      );
      box-shadow: var(--main-box-shadow);

      h2 {
        padding: 0.6rem 0rem;
        color: var(--secondary-text-color);
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem 2rem;

    span {
      text-align: justify;
      text-justify: inter-word;
    }
  }
}

.slide-up-enter-active,
.slide-slower-from-above-enter-active,
.slide-from-above-enter-active {
  transition: transform 0.5s, opacity 0.5s;
}

.slide-from-above-enter {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-slower-from-above-enter {
  opacity: 0;
  transform: translateY(-10%);
}

.slide-from-right-enter-active {
  transition: transform 0.5s;
  transition-delay: 2.5s;
}

.slide-from-right-enter {
  transform: translateX(100%);
}

.flip-open-enter-active {
  transition: transform 0.5s;
  transition-delay: 0.5s;
}

.flip-open-later-enter-active {
  transition: transform 0.5s;
  transition-delay: 1.5s;
}

.flip-open-later-enter,
.flip-open-enter {
  transform: scaleY(0);
}

.slide-up-enter-active {
  transition: transform 0.5s;
}

.slide-up-enter-active {
  transition: transform 0.5s, opacity 0.5s;
  transition-delay: 2s;
}

.slide-up-enter {
  opacity: 0;
  transform: translateY(20%);
}

.open-up-enter-active {
  transition: transform 0.5s;
  transition-delay: 1s;
}

.open-up-enter {
  transform: scaleX(0);
}
</style>
