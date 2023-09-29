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
        <p class="variant-item value" v-if="orbitalData && orbitalData.orbit">
          {{ orbitalData.orbit.determinationDate }}
        </p>
        <p class="variant-item key" v-if="orbitalData && orbitalData.orbit">
          Orbit Determination Date
        </p>
        <p class="variant-item value" v-if="orbitalData && orbitalData.orbit">
          {{ orbitalData.orbit.uncertainty }}
        </p>
        <p class="variant-item key" v-if="orbitalData && orbitalData.orbit">
          Orbit Uncertainty
        </p>
        <p
          class="variant-item value wrap-text"
          v-if="orbitalData && orbitalData.orbit"
        >
          {{ orbitalData.orbit.period }}
        </p>
        <p class="variant-item key" v-if="orbitalData && orbitalData.orbit">
          Orbit Period
        </p>
      </div>
      <div class="other-data" v-if="orbitalData">
        <span class="key">Aphelion Distance</span>
        <span class="value">{{ orbitalData.aphelionDistance }}</span>
        <span class="key">Asc. Node Longitude</span>
        <span class="value">{{ orbitalData.ascendingNodeLongitude }}</span>
        <span class="key">Data Arc</span>
        <span class="value">{{ orbitalData.dataArc }} days</span>
        <span class="key">Eccentricity</span>
        <span class="value">{{ orbitalData.eccentricity }}</span>
        <span class="key">Equinox</span>
        <span class="value">{{ orbitalData.equinox }}</span>
        <span class="key">Inclination</span>
        <span class="value">{{ orbitalData.inclination }}</span>
        <span class="key">Jupiter Tisserant Inv.</span>
        <span class="value">{{ orbitalData.jupiterTisserandInvariant }}</span>
        <span class="key">Min. Intersection</span>
        <span class="value">{{ orbitalData.minimumOrbitIntersection }}</span>
        <span class="key">Observations Used</span>
        <span class="value">{{ orbitalData.observationsUsed }}</span>
        <span class="key">Semi Major Axis</span>
        <span class="value">{{ orbitalData.semiMajorAxis }}</span>
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
      display: flex;
      flex-direction: column;
      align-items: center;
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
        margin-bottom: 1rem;
        justify-content: center;
        height: 20rem;
      }

      .item {
        text-align: center;
        margin: 1rem 0 0;

        &.key {
          font-size: 2rem;
          margin: 0 0 1.5rem;
        }
      }

      .variant-item {
        text-align: center;
        margin: 1rem 0 0;
        color: var(--secondary-text-color);

        &.value {
          font-size: 2rem;
          line-height: 1.7rem;
        }

        &.wrap-text {
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        &.key {
          font-size: 1.2rem;
          margin: 0 0 0.5rem;
        }
      }
    }

    .other-data {
      margin-top: 1rem;
      background-color: var(--opaque-background-color);
      padding: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      gap: 1rem;
      box-shadow: var(--main-box-shadow);

      .key {
        font-weight: 800;
        justify-self: end;
      }

      .value {
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
