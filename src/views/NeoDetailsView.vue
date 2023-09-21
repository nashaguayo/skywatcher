<template>
  <div class="neo-details-view">
    <ErrorBoundary
      componentName="AsteroidDetailsContainer"
      errorMessage="Unable to load asteroid details page"
    >
      <AsteroidDetailsContainer />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import AsteroidDetailsContainer from '@/components/neoDetails/AsteroidDetailsContainer.vue';

export default {
  name: 'NeoDetailsView',
  title: 'Asteroid Details',
  components: {
    ErrorBoundary,
    AsteroidDetailsContainer,
  },
};
</script>
