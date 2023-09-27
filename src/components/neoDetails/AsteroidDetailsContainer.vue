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
        :loaded="loaded"
        :category="category"
        :description="description"
        :craterSize="craterSize"
        :megatonKineticE="megatonKineticE"
        :megatonAirburst="megatonAirburst"
      />
    </ErrorBoundary>
    <BaseDivider />
    <ErrorBoundary
      componentName="CloseApproach"
      errorMessage="Unable to load close approach data"
    >
      <CloseApproach :closeApproach="closeApproach" />
    </ErrorBoundary>
  </div>
</template>

<script>
import { getNearEarthObject } from '@/helpers/neo';
import BaseDivider from '@/components/ui/BaseDivider.vue';
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import BasicInfoHeader from '@/components/neoDetails/BasicInfoHeader.vue';
import WhatIfImpact from '@/components/neoDetails/WhatIfImpact.vue';
import CloseApproach from '@/components/neoDetails/CloseApproach.vue';

export default {
  name: 'AsteroidDetailsContainer',
  components: {
    BaseDivider,
    ErrorBoundary,
    BasicInfoHeader,
    WhatIfImpact,
    CloseApproach,
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
      closeApproach: [],
      loaded: false,
    };
  },
  async created() {
    const neo = await getNearEarthObject(
      this.$route.params.id,
      'kilometers_per_hour',
      'astronomical'
    );

    this.designation = neo.designation;
    this.magnitude = neo.magnitude;
    this.hazardous = neo.hazardous;
    this.sentry = neo.sentry;
    this.megatonKineticE = neo.damage.megatonKineticE;
    this.megatonAirburst = neo.damage.megatonAirburst;
    this.craterSize = neo.damage.craterSize;
    this.description = neo.damage.description;
    this.category = neo.damage.category;
    this.closeApproach = neo.closeApproach;

    this.loaded = true;
  },
};
</script>
