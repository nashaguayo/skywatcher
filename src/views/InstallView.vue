<template>
  <div class="install-view">
    <ErrorBoundary
      componentName="LandingHero"
      errorMessage="Unable to load landing hero"
    >
      <LandingHero />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import LandingHero from '@/components/home/LandingHero.vue';

export default {
  name: 'InstallView',
  title: 'Install',
  components: {
    ErrorBoundary,
    LandingHero,
  },
};
</script>

<style lang="scss" scoped>
.install-view {
  height: 100vh;
}
</style>
