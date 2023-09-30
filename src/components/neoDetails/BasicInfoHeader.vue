<template>
  <div class="basic-info-header">
    <transition name="fade">
      <BasicInfoHeaderSkeleton v-if="!loaded" />
      <div class="basic-info-header-container" v-else>
        <BaseIcon
          icon="fa-solid fa-chevron-left"
          class="go-back-button"
          @click="goBack"
        />
        <h1 class="asteroid-designation">{{ designation }}</h1>
        <h3 class="asteroid-magnitude">Magnitude — {{ magnitude }}H</h3>
        <transition-group class="categories" name="scale-open" tag="div" appear>
          <div
            v-for="n in 6"
            :key="`category-${n - 1}`"
            :class="{
              [`category-${n - 1}`]: true,
              [`category-${n - 1}-active`]: category >= n - 1,
            }"
          />
        </transition-group>
        <transition name="open-sides" appear>
          <div class="disclaimers" v-if="loaded">
            <div class="disclaimer">
              <span v-if="hazardous"
                >This asteroid is potentially hazardous.</span
              >
              <span v-else>This asteroid is not hazardous.</span>
            </div>
            <div class="disclaimer">
              <span v-if="sentry">Also, it is a sentry object.</span>
              <span v-else>Also, it is not a sentry object.</span>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import BasicInfoHeaderSkeleton from '@/skeleton/neoDetails/BasicInfoHeaderSkeleton.vue';
import BaseIcon from '@/components/ui/BaseIcon.vue';

export default {
  name: 'BasicInfoHeader',
  components: {
    BasicInfoHeaderSkeleton,
    BaseIcon,
  },
  props: {
    loaded: {
      type: Boolean,
      required: true,
    },
    category: {
      type: Number,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    magnitude: {
      type: Number,
      required: true,
    },
    sentry: {
      type: Boolean,
      required: true,
    },
    hazardous: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.basic-info-header {
  .basic-info-header-container {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    align-items: center;

    .go-back-button {
      position: fixed;
      left: 1rem;
      top: 1rem;
    }

    .asteroid-designation {
      margin-bottom: 2rem;
      font-size: 4rem;
    }

    .asteroid-magnitude {
      font-size: 2rem;
    }

    .categories {
      margin: 1rem 0 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .category-0,
      .category-1,
      .category-2,
      .category-3,
      .category-4,
      .category-5 {
        border-radius: 50%;
        border: 0.15rem solid var(--magnitude-border-color);
        background-color: var(--magnitude-background-color);
        box-shadow: var(--main-box-shadow);
      }

      .category-0 {
        width: 1rem;
        height: 1rem;
      }

      .category-0-active {
        background-color: var(--magnitude-0);
      }

      .category-1 {
        width: 1.2rem;
        height: 1.2rem;
      }

      .category-1-active {
        background-color: var(--magnitude-1);
      }

      .category-2 {
        width: 1.4rem;
        height: 1.4rem;
      }

      .category-2-active {
        background-color: var(--magnitude-2);
      }

      .category-3 {
        width: 1.6rem;
        height: 1.6rem;
      }

      .category-3-active {
        background-color: var(--magnitude-3);
      }

      .category-4 {
        width: 1.8rem;
        height: 1.8rem;
      }

      .category-4-active {
        background-color: var(--magnitude-4);
      }

      .category-5 {
        width: 2rem;
        height: 2rem;
      }

      .category-5-active {
        background-color: var(--magnitude-5);
      }
    }

    .disclaimers {
      width: 100%;
      background: linear-gradient(
        100deg,
        var(--secondary-background-color),
        var(--secondary-gradient-background-color)
      );
      padding: 0.5rem 0;
      box-shadow: var(--main-box-shadow);

      .disclaimer {
        display: flex;
        justify-content: center;
      }

      span {
        text-align: center;
        color: var(--secondary-text-color);
      }
    }
  }
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.scale-open-enter-active,
.open-sides-enter-active {
  transition: transform 0.3s;
}

.open-sides-enter {
  transform: scaleX(0);
}

.scale-open-enter {
  transform: scale(0);
}
</style>
