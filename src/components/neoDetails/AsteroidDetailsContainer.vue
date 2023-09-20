<template>
  <div class="asteroid-details-container">
    <ErrorBoundary
      componentName="BasicInfoHeader"
      errorMessage="Unable to load basic asteroid information"
    >
      <BasicInfoHeader
        :loaded="loaded"
        :category="category"
        :designation="designation"
        :magnitude="magnitude"
        :hazardous="hazardous"
        :sentry="sentry"
      />
    </ErrorBoundary>
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
import BasicInfoHeader from '@/components/neoDetails/BasicInfoHeader.vue';
import WhatIfImpact from '@/components/neoDetails/WhatIfImpact.vue';

export default {
  name: 'AsteroidDetailsContainer',
  components: {
    ErrorBoundary,
    BasicInfoHeader,
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
      sentry: false,
      hazardous: false,
      loaded: false,
    };
  },
  async created() {
    const neo = await getNearEarthObject(this.$route.params.id);

    this.designation = neo.designation;
    this.magnitude = neo.magnitude;
    this.hazardous = neo.hazardous;
    this.sentry = neo.sentry;
    this.megatonKineticE = neo.damage.megatonKineticE;
    this.megatonAirburst = neo.damage.megatonAirburst;
    this.craterSize = neo.damage.craterSize;
    this.description = neo.damage.description;
    this.category = neo.damage.category;

    this.loaded = true;
  },
};
</script>
