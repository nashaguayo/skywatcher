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
      <CloseApproach
        :closeApproaches="closeApproaches"
        :missDistanceMeasureUnit="missDistanceMeasureUnit"
        :velocityMeasureUnit="velocityMeasureUnit"
        :loaded="loaded"
      />
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
import {
  getMissDistanceMeasureUnit as getMissDistanceMeasureUnitLS,
  getVelocityMeasureUnit as getVelocityMeasureUnitLS,
} from '@/lib/localStorage';

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
      missDistanceMeasureUnit: getMissDistanceMeasureUnitLS() ?? 'astronomical',
      velocityMeasureUnit: getVelocityMeasureUnitLS() ?? 'kilometers_per_hour',
      designation: '',
      magnitude: 0,
      megatonKineticE: 0,
      megatonAirburst: 0,
      craterSize: 0,
      description: '',
      category: 0,
      sentry: false,
      hazardous: false,
      closeApproaches: [],
      loaded: false,
    };
  },
  async created() {
    const neo = await getNearEarthObject(
      this.$route.params.id,
      this.velocityMeasureUnit,
      this.missDistanceMeasureUnit
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
    this.closeApproaches = neo.closeApproaches;

    this.loaded = true;
  },
};
</script>
