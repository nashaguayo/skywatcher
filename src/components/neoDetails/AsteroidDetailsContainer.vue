<template>
  <div class="asteroid-details-container">
    <FontAwesomeIcon
      icon="fa-solid fa-chevron-left"
      size="2x"
      class="go-back-button"
      @click="goBack"
    />
    <h1>{{ designation }}</h1>
    <h3>Magnitude — {{ magnitude }} H</h3>
    <div class="categories">
      <div
        v-for="n in 6"
        :key="`category-${n - 1}`"
        :class="{
          [`category-${n - 1}`]: true,
          [`category-${n - 1}-active`]: category >= n - 1,
        }"
      />
    </div>
    <ErrorBoundary
      componentName="WhatIfImpact"
      errorMessage="Unable to load what if it impacted earth component"
    >
      <WhatIfImpact
        :category="category"
        :description="description"
        :craterSize="craterSize"
        :megatonKineticE="megatonKineticE"
        :megatonAirburst="megatonAirburst"
      />
    </ErrorBoundary>
  </div>
</template>

<script>
import { getNearEarthObject } from '@/helpers/neo';
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import WhatIfImpact from '@/components/neoDetails/WhatIfImpact.vue';

export default {
  name: 'AsteroidDetailsContainer',
  components: {
    ErrorBoundary,
    WhatIfImpact,
  },
  data() {
    return {
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
}
</style>
