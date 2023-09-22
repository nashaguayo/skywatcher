<template>
  <div class="close-approach">
    <div class="close-approach-container">
      <h2>Close Approach Dates</h2>
      <div class="table">
        <div class="row header" :class="{ 'header-shadow': displayShadow }">
          <span class="header-item">Date</span>
          <span class="header-item">Hour</span>
          <span class="header-item">Orbiting</span>
          <span class="header-item">Distance</span>
          <span class="header-item">Velocity</span>
        </div>
        <div class="content" @scroll="throttledScrollHandler">
          <div v-for="data in closeApproach" :key="data.epoch" class="row">
            <span>{{ data.date }}</span>
            <span>{{ data.hour }}</span>
            <span>{{ data.orbitingBody }}</span>
            <span>{{ Math.round(data.missDistance * 100) / 100 }}</span>
            <span>{{ Math.round(data.velocity * 100) / 100 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle';

export default {
  name: 'CloseApproach',
  props: {
    closeApproach: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      throttledScrollHandler: () => {},
      displayShadow: false,
    };
  },
  created() {
    this.throttledScrollHandler = throttle(this.scrollHandler, 500);
  },
  methods: {
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
