<template>
  <div class="home-view">
    <ErrorBoundary
      componentName="LandingHero"
      errorMessage="Unable to load landing hero"
    >
      <LandingHero />
    </ErrorBoundary>
    <ErrorBoundary
      componentName="ApodBlock"
      errorMessage="Unable to load astronomy picture of the day"
    >
      <ApodBlock />
    </ErrorBoundary>
    <ErrorBoundary
      componentName="NeoBlock"
      errorMessage="Unable to load asteroids data"
    >
      <NeoBlock />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import LandingHero from '@/components/common/LandingHero.vue';
import ApodBlock from '@/components/home/ApodBlock.vue';
import NeoBlock from '@/components/home/NeoBlock.vue';

export default {
  name: 'HomeView',
  title: 'Universe Explorer',
  components: {
    ErrorBoundary,
    LandingHero,
    ApodBlock,
    NeoBlock,
  },
};
</script>
