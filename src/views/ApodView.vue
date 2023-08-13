<template>
  <div class="apod-view">
    <ErrorBoundary
      componentName="ApodContainer"
      errorMessage="Unable to load astronomy picture of the day page"
    >
      <ApodContainer />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import ApodContainer from '@/components/apod/ApodContainer.vue';

export default {
  name: 'ApodView',
  title: 'Astronomy Picture of the Day',
  components: {
    ErrorBoundary,
    ApodContainer,
  },
};
</script>

<style lang="scss" scoped>
.apod-view {
  height: 100%;
}
</style>
