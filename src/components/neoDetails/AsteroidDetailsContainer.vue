<template>
  <div class="asteroid-details-container">
    <FontAwesomeIcon
      icon="fa-solid fa-chevron-left"
      size="2x"
      class="go-back-button"
      @click="goBack"
    />
    <h3 v-if="error">There was an error loading asteroid details.</h3>
    <template v-else>
      <h1>{{ designation }}</h1>
      <h3>Magnitude — {{ magnitude }} H</h3>
      <div class="categories">
        <div
          v-for="n in 5"
          :key="`category-${n}`"
          :class="{
            [`category-${n}`]: true,
            [`category-${n}-active`]: category >= n,
          }"
        />
      </div>
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
        by Brian Wang
      </span>
    </template>
  </div>
</template>

<script>
import { getNearEarthObject } from '@/helpers/neo';

export default {
  name: 'AsteroidDetailsContainer',
  data() {
    return {
      error: false,
      designation: '',
      magnitude: 0,
      megatonKineticE: 0,
      megatonAirburst: 0,
      craterSize: 0,
      description: '',
      category: 0,
    };
  },
  async created() {
    const neo = await getNearEarthObject(this.$route.params.id);
    if (!neo) {
      this.error = true;
    }

    this.designation = neo.designation;
    this.magnitude = neo.magnitude;
    this.megatonKineticE = neo.damage.megatonKineticE;
    this.megatonAirburst = neo.damage.megatonAirburst;
    this.craterSize = neo.damage.craterSize;
    this.description = neo.damage.description;
    this.category = neo.damage.category;
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-details-container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;

  .go-back-button {
    position: absolute;
    color: var(--main-icon-color);
    background-color: var(--variant-background-color);
    border-radius: 3rem;
    padding: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.7;
    left: 1rem;
    top: 1rem;
    pointer-events: all;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h3 {
    text-align: center;
  }

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
