<template>
  <div class="asteroid-table">
    <AsteroidTableItem
      v-for="neo in neos"
      :key="neo.id"
      :neo="neo"
      :diameterMeasureUnit="diameterMeasureUnit"
      :missDistanceMeasureUnit="missDistanceMeasureUnit"
    />
  </div>
</template>

<script>
import AsteroidTableItem from '@/components/neo/AsteroidTableItem.vue';

export default {
  name: 'AsteroidTable',
  components: {
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
  margin: 2rem 0;
}
</style>
