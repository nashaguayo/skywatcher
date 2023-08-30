<template>
  <div class="home-view">
    <ErrorBoundary
      componentName="LandingHero"
      errorMessage="Unable to load landing hero"
    >
      <LandingHero />
    </ErrorBoundary>
    <ApodBlock />
  </div>
</template>

<script>
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import LandingHero from '@/components/common/LandingHero.vue';
import ApodBlock from '@/components/home/ApodBlock.vue';

export default {
  name: 'HomeView',
  title: 'Universe Explorer',
  components: {
    ErrorBoundary,
    LandingHero,
    ApodBlock,
  },
};
</script>
