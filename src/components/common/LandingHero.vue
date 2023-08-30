<template>
  <div class="landing-hero">
    <LandingHeroSkeleton v-if="!loaded" />
    <div v-show="loaded" class="landing-hero-container">
      <transition name="skywatcher" appear>
        <div v-if="loaded" class="tunned-logo">
          <h1>SkyWatcher</h1>
        </div>
      </transition>
      <transition name="skywatcher-delayed" appear>
        <h2 v-if="loaded">The universe at the tip of your fingers</h2>
      </transition>
      <div class="description">
        <transition name="flip" appear>
          <p v-if="loaded">This webapp was built by a universe fan.</p>
        </transition>
      </div>
      <transition name="flip-delayed" appear>
        <div
          v-if="displayInstallButton && loaded && loadedPrompt"
          class="install-button"
        >
          <BaseButton
            v-if="!installing"
            :onClickHandler="onClickHandler"
            class="install"
          >
            Install App
          </BaseButton>
          <BaseSpinner v-else-if="installing" class="installing" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import LandingHeroSkeleton from '@/skeleton/home/LandingHeroSkeleton.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'LandingHero',
  components: {
    LandingHeroSkeleton,
    BaseButton,
    BaseSpinner,
  },
  props: {
    displayInstallButton: {
      type: Boolean,
      default: false,
    },
    onClickHandler: {
      type: Function,
      default: () => {},
    },
    installing: {
      type: Boolean,
      default: false,
    },
    loadedPrompt: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      nasaApisUrl: process.env.VUE_APP_NASA_API_URL,
      loaded: false,
    };
  },
  mounted() {
    if (!this.loaded) {
      const imageElement = document.querySelector('.landing-hero-container');
      const srcImage = window.getComputedStyle(imageElement).backgroundImage;
      const url = srcImage.match(/\((.*?)\)/)[1].replace(/('|")/g, '');

      const image = new Image();
      image.onload = () => {
        this.loaded = true;
      };

      image.src = url;
      if (image.complete) {
        image.onload();
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.landing-hero {
  height: 100%;

  .landing-hero-container {
    background-image: url('@/assets/images/landing/hero.jpg');
    background-size: cover;
    background-position: center;
    padding: 2rem;
    padding-left: 3.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    @media (min-width: $min-width-first-break) {
      padding-left: 4rem;
    }

    @media (min-width: $min-width-second-break) {
      padding-left: 6rem;
      gap: 2rem;
    }

    @media (min-width: $min-width-third-break) {
      padding-left: 10rem;
      gap: 3rem;
    }

    @media (min-width: $min-width-fourth-break) {
      padding-left: 14rem;
    }

    @media (min-width: $min-width-fifth-break) {
      padding-left: 20rem;
    }

    @media (min-width: $min-width-sixth-break) {
      padding-left: 28rem;
    }

    .tunned-logo {
      display: flex;
      align-items: center;

      h1 {
        -webkit-mask-image: linear-gradient(90deg, transparent, 0.1%, black);
        font-size: 2.5rem;
        font-family: 'Lobster';
        color: var(--variant-title-color);

        @media (min-width: $min-width-first-break) {
          font-size: 3.5rem;
        }
        @media (min-width: $min-width-second-break) {
          font-size: 5rem;
        }

        @media (min-width: $min-width-third-break) {
          font-size: 8rem;
        }
      }
    }

    h2 {
      @media (min-width: $min-width-second-break) {
        font-size: 2rem;
      }

      @media (min-width: $min-width-third-break) {
        font-size: 3rem;
      }
    }

    p {
      @media (min-width: $min-width-second-break) {
        font-size: 1.5rem;
      }

      @media (min-width: $min-width-third-break) {
        font-size: 1.7rem;
      }
    }

    .install-button {
      display: flex;
      flex-direction: column;
      align-items: center;

      .install {
        width: 100%;
      }

      .installing {
        justify-self: center;
      }
    }
  }
}

@keyframes bounce-less-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: skew(10deg);
  }
}

.skywatcher-enter-active {
  transition: opacity 1s, transform 1s ease-in-out;
}

.skywatcher-delayed-enter-active {
  transition: opacity 1s, transform 1s ease-in-out;
  transition-delay: 1s;
}

.skywatcher-delayed-enter,
.skywatcher-enter {
  opacity: 0;
  transform: skew(30deg) translateX(-100%);
}

.flip-enter-active {
  transition: transform 0.5s ease-in-out;
  transition-delay: 2s;
}

.flip-delayed-enter-active {
  transition: transform 0.5s ease-in-out;
  transition-delay: 2.5s;
}

.flip-delayed-enter,
.flip-enter {
  transform: scaleY(0);
}
</style>
