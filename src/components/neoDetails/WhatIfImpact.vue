<template>
  <div class="what-if-impact">
    <div class="what-if">
      <h3 class="what-if-title">What if it hit Earth?*</h3>
      <span class="description" v-if="category === 0">
        This asteroid is not dangerous.
      </span>
      <span class="description" v-else-if="category === 1">
        This asteroid is dangerous.
      </span>
      <span class="description" v-else-if="category === 2">
        This asteroid is very dangerous.
      </span>
      <span class="description" v-else-if="category === 3">Dangerous.</span>
      <span class="description" v-else-if="category === 4">
        This asteroid is extremely dangerous.
      </span>
      <span class="description" v-else-if="category === 5">
        This asteroid is devastating.
      </span>
      <span class="description">If it hit, {{ description }}.</span>
      <div class="asteroid-stats">
        <div class="stat">
          <span class="value"> {{ craterSize }}km </span>
          <span class="key">Crater Size</span>
        </div>
        <div class="stat">
          <span class="value"> {{ megatonKineticE }}E </span>
          <span class="key">Megaton Kinetic Energy</span>
        </div>
        <div class="stat">
          <span class="value"> {{ megatonAirburst }}MT </span>
          <span class="key">Megaton Airburst</span>
        </div>
      </div>
    </div>
    <span class="copyright-disclaimer">
      * Categories according to
      <a
        href="https://www.nextbigfuture.com/2013/11/asteroid-size-danger-chart.html"
        target="_blank"
        ref="noreferrer"
      >
        this article
      </a>
      <br />
      by Brian Wang.
    </span>
  </div>
</template>

<script>
export default {
  name: 'WhatIfImpact',
  props: {
    category: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    craterSize: {
      type: Number,
      required: true,
    },
    megatonKineticE: {
      type: Number,
      required: true,
    },
    megatonAirburst: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.what-if-impact {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem 2rem;

  .what-if {
    width: calc(100%);
    padding: 1.2rem;
    background: linear-gradient(
      100deg,
      var(--variant-background-color),
      var(--variant-gradient-background-color)
    );
    box-shadow: var(--main-box-shadow);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .what-if-title {
      margin: 1rem 0;
      text-align: center;
    }

    .description {
      text-align: center;
      margin-top: 0.5rem;
    }

    .asteroid-stats {
      background: linear-gradient(
        100deg,
        var(--secondary-background-color),
        var(--secondary-gradient-background-color)
      );
      width: 100%;
      margin: 1rem 0;
      padding: 0.5rem;

      .stat {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 1rem 0;

        .key,
        .value {
          color: var(--secondary-text-color);
          text-align: center;
        }

        .key {
          font-size: 1rem;
        }

        .value {
          font-size: 2rem;
        }
      }
    }
  }

  .copyright-disclaimer {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 2rem;

    a {
      display: inline-block;
    }
  }
}
</style>
