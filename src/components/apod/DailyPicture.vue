<template>
  <div class="daily-picture">
    <DailyPictureSkeleton v-if="!loaded" />
    <div class="daily-picture-container" v-show="loaded">
      <div class="image-container" @click="seeHdImage">
        <img
          v-if="mediaType === 'image'"
          class="image"
          :src="url"
          @load="loaded = true"
        />
        <LazyYoutube v-else :src="url" class="video" />
        <transition name="slide-from-right" appear>
          <span v-if="copyright && loaded" class="copyright">
            By {{ copyright }}
          </span>
        </transition>
      </div>
      <div class="title-container">
        <transition name="slide-from-above" appear>
          <h1 v-if="loaded">Astronomy Picture of the Day</h1>
        </transition>
        <transition name="flip-open" appear>
          <span v-if="loaded" class="date">{{ dateText }}</span>
        </transition>
        <transition name="open-up" appear>
          <div v-if="loaded" class="title">
            <transition name="flip-open-later" appear>
              <h2 v-if="loaded">{{ title }}</h2>
            </transition>
          </div>
        </transition>
      </div>
      <transition name="slide-up" appear>
        <div v-if="loaded" class="container">
          <FontAwesomeIcon icon="fa-solid fa-info" class="icon" />
          <span>{{ explanation }}</span>
          <BaseButton :onClickHandler="seeHdImage">See HD Image</BaseButton>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { format, isEqual, startOfDay } from 'date-fns';
import DailyPictureSkeleton from '@/skeleton/apod/DailyPictureSkeleton.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'DailyPicture',
  components: {
    DailyPictureSkeleton,
    BaseButton,
  },
  props: {
    copyright: {
      type: String,
      required: false,
    },
    date: {
      type: [Date, String],
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
    hdurl: {
      type: String,
      required: false,
    },
    mediaType: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  watch: {
    mediaType(mediaType) {
      if (mediaType === 'video') {
        this.loaded = true;
      }
    },
  },
  data() {
    return {
      loaded: false,
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
  .daily-picture-container {
    overflow-x: hidden;

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
        text-align: end;
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
        box-shadow: var(--main-box-shadow);
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

      @media (min-width: $min-width-third-break) {
        gap: 2rem;
      }

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

        @media (min-width: $min-width-second-break) {
          font-size: 1.5rem;
        }

        @media (min-width: $min-width-third-break) {
          font-size: 1.8rem;
        }
      }

      .title {
        width: 100%;
        background: linear-gradient(
          100deg,
          var(--secondary-background-color),
          var(--secondary-gradient-background-color)
        );
        box-shadow: var(--main-box-shadow);
        min-height: 4.7rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: $min-width-third-break) {
          min-height: 6rem;
        }

        h2 {
          padding: 0.6rem 0rem;
          color: var(--secondary-text-color);
        }
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      padding: 1.5rem 2rem;
      gap: 1rem;

      .icon {
        border: 0.2rem solid var(--variant-text-color);
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        padding: 0.2rem 0.45rem 0.7rem;
        align-self: center;
        color: var(--main-icon-hover-color);
      }

      span {
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }
}

.slide-up-enter-active,
.slide-from-above-enter-active {
  transition: transform 0.5s, opacity 0.5s;
}

.slide-from-above-enter {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-from-right-enter-active {
  transition: transform 0.5s;
  transition-delay: 2.5s;
}

.slide-from-right-enter {
  transform: translateX(110%);
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
