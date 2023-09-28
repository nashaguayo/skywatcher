<template>
  <div class="close-approach">
    <div class="close-approach-container">
      <h2>Close Approach Dates</h2>
      <div class="measure-units">
        <h3 class="measure-units-title">Measure Units</h3>
        <BaseDivider :variant="true" />
        <p class="measure-unit">
          The measure unit for miss distance <br />is
          {{ missDistanceMeasureUnit }}.
        </p>
        <p class="measure-unit">
          The measure unit for velocity <br />is
          {{ velocityMeasureUnitMap.get(velocityMeasureUnit) }}.
        </p>
      </div>
      <div class="table">
        <div class="row header" :class="{ 'header-shadow': displayShadow }">
          <span class="header-item">Date</span>
          <span class="header-item">Hour</span>
          <span class="header-item">Orbiting</span>
          <span class="header-item">Distance</span>
          <span class="header-item">Velocity</span>
        </div>
        <div class="content" @scroll="throttledScrollHandler">
          <div
            v-for="closeApproach in closeApproaches"
            :key="closeApproach.epoch"
            class="row"
          >
            <span>{{ closeApproach.date }}</span>
            <span>{{ closeApproach.hour }}</span>
            <span>{{ closeApproach.orbitingBody }}</span>
            <span>{{ roundTwoDecimalPlaces(closeApproach.missDistance) }}</span>
            <span>{{ roundTwoDecimalPlaces(closeApproach.velocity) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle';
import { roundTwoDecimalPlaces } from '@/lib/math';
import { velocityMeasureUnitMap } from '@/constants/measurements';
import BaseDivider from '@/components/ui/BaseDivider.vue';

export default {
  name: 'CloseApproach',
  components: {
    BaseDivider,
  },
  props: {
    closeApproaches: {
      type: Array,
      required: true,
    },
    missDistanceMeasureUnit: {
      type: String,
      required: true,
    },
    velocityMeasureUnit: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      throttledScrollHandler: () => {},
      displayShadow: false,
      velocityMeasureUnitMap,
    };
  },
  created() {
    this.throttledScrollHandler = throttle(this.scrollHandler, 500);
  },
  methods: {
    roundTwoDecimalPlaces,
    scrollHandler(event) {
      this.displayShadow = event.target.scrollTop !== 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.close-approach {
  .close-approach-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;

    h2 {
      text-align: center;
    }

    .measure-units {
      margin: 1.5rem 2rem 0.7rem;
      padding-bottom: 1rem;
      background: linear-gradient(
        100deg,
        var(--variant-background-color),
        var(--variant-gradient-background-color)
      );
      box-shadow: var(--main-box-shadow);

      .measure-units-title,
      .measure-unit {
        text-align: center;
        margin-top: 1rem;
      }
    }

    .table {
      margin-top: 1rem;
      background: linear-gradient(
        100deg,
        var(--secondary-background-color),
        var(--secondary-gradient-background-color)
      );
      box-shadow: var(--main-box-shadow);

      .content {
        max-height: 18rem;
        overflow-x: scroll;
        padding-bottom: 1rem;
      }

      .header {
        padding: 1rem 0;
        transition: box-shadow 0.3s;

        .header-item {
          font-size: 1rem;
        }
      }

      .header-shadow {
        box-shadow: var(--bottom-box-shadow);
      }

      .row {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        justify-items: center;

        span {
          color: var(--secondary-text-color);
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
