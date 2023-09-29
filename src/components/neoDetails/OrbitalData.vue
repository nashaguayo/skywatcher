<template>
  <div class="orbital-data">
    <OrbitalDataSkeleton v-if="!loaded" />
    <div v-show="loaded" class="orbital-data-container">
      <div class="content-outside">
        <div class="content-inside">
          <transition name="slide-open">
            <p
              class="item value"
              v-if="orbitalData && orbitalData.orbit && orbitalData.orbit.class"
            >
              {{ orbitalData.orbit.class.description }}
            </p>
          </transition>
          <transition name="slide-open">
            <p
              class="item key"
              v-if="orbitalData && orbitalData.orbit && orbitalData.orbit.class"
            >
              Class {{ orbitalData.orbit.class.type }}
            </p>
          </transition>
          <transition name="slide-open">
            <p
              class="item value"
              v-if="orbitalData && orbitalData.orbit && orbitalData.orbit.class"
            >
              {{ orbitalData.orbit.class.range }}
            </p>
          </transition>
          <transition name="slide-open">
            <p
              class="item key"
              v-if="orbitalData && orbitalData.orbit && orbitalData.orbit.class"
            >
              Range
            </p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrbitalDataSkeleton from '@/skeleton/neoDetails/OrbitalDataSkeleton.vue';

export default {
  name: 'OrbitalData',
  components: {
    OrbitalDataSkeleton,
  },
  props: {
    loaded: {
      type: Boolean,
      required: true,
    },
    orbitalData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orbital-data {
  .orbital-data-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-outside {
      margin: 1rem 2rem;
      padding: 1.5rem;
      width: calc(100% - 4rem);
      background: linear-gradient(
        100deg,
        var(--secondary-background-color),
        var(--secondary-gradient-background-color)
      );
      box-shadow: var(--main-box-shadow);

      .content-inside {
        display: flex;
        flex-direction: column;
        background: linear-gradient(
          100deg,
          var(--variant-background-color),
          var(--variant-gradient-background-color)
        );
        box-shadow: var(--main-box-shadow);
        padding: 1rem;
        justify-content: center;
        height: 20rem;

        .item {
          text-align: center;
          margin: 1rem 0 0;

          &.key {
            font-size: 2rem;
            margin: 0 0 1.5rem;
          }
        }
      }
    }
  }
}

.slide-open-enter-active {
  transition: transform 0.3s;
}

.slide-open-enter {
  transform: scaleX(0);
}
</style>
