<template>
  <div class="asteroid-table-skeleton">
    <BaseSpinner />
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'AsteroidTableSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.asteroid-table-skeleton {
  background-color: var(--variant-background-color);
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
