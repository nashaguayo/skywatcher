<template>
  <div class="neo-view">
    <ErrorBoundary
      componentName="AsteroidsContainer"
      errorMessage="Unable to load asteroids — near earth objects (NEO) page"
    >
      <AsteroidsContainer />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import AsteroidsContainer from '@/components/neo/AsteroidsContainer.vue';

export default {
  name: 'NeoView',
  title: 'Asteroids — Near Earth Objects (NEO)',
  components: {
    ErrorBoundary,
    AsteroidsContainer,
  },
};
</script>
