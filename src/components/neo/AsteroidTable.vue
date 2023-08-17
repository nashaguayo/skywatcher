<template>
  <div class="asteroid-table">
    <AsteroidTableSkeleton v-if="!loaded" />
    <div v-else class="asteroid-table-container">
      <AsteroidTableItem
        v-for="neo in neos"
        :key="neo.id"
        :neo="neo"
        :diameterMeasureUnit="diameterMeasureUnit"
        :missDistanceMeasureUnit="missDistanceMeasureUnit"
      />
    </div>
  </div>
</template>

<script>
import AsteroidTableSkeleton from '@/skeleton/neo/AsteroidTableSkeleton.vue';
import AsteroidTableItem from '@/components/neo/AsteroidTableItem.vue';

export default {
  name: 'AsteroidTable',
  components: {
    AsteroidTableSkeleton,
    AsteroidTableItem,
  },
  props: {
    neos: {
      type: Array,
      required: true,
    },
    missDistanceMeasureUnit: {
      type: String,
      required: true,
    },
    diameterMeasureUnit: {
      type: String,
      required: true,
    },
    loaded: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-table {
  background: linear-gradient(
    100deg,
    var(--secondary-background-color),
    var(--secondary-gradient-background-color)
  );
  width: 100%;
}
</style>
