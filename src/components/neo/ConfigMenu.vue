<template>
  <div class="config-menu">
    <div class="close-button">
      <BaseIcon
        icon="fa-solid fa-xmark"
        class="icon"
        :variant="true"
        @click="$emit('closeTapped')"
      />
    </div>
    <h1>Configuration</h1>
    <AsteroidMeasureUnits
      :diameterMeasureUnit="diameterMeasureUnit"
      :missDistanceMeasureUnit="missDistanceMeasureUnit"
      :velocityMeasureUnit="velocityMeasureUnit"
      @newDiameterMeasureUnit="newDiameterMeasureUnit"
      @newMissDistanceMeasureUnit="newMissDistanceMeasureUnit"
      @newVelocityMeasureUnit="newVelocityMeasureUnit"
    />
    <AsteroidSort @newSortBy="newSortBy" :sortBy="sortBy" />
    <AsteroidFilters @newFilterBy="newFilterBy" :filterBy="filterBy" />
  </div>
</template>

<script>
import BaseIcon from '@/components/ui/BaseIcon.vue';
import AsteroidMeasureUnits from '@/components/neo/AsteroidMeasureUnits.vue';
import AsteroidSort from '@/components/neo/AsteroidSort.vue';
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';

export default {
  name: 'ConfigMenu',
  components: {
    BaseIcon,
    AsteroidMeasureUnits,
    AsteroidSort,
    AsteroidFilters,
  },
  props: {
    diameterMeasureUnit: {
      type: String,
      required: true,
    },
    missDistanceMeasureUnit: {
      type: String,
      required: true,
    },
    velocityMeasureUnit: {
      type: String,
      required: true,
    },
    sortBy: {
      type: String,
      required: true,
    },
    filterBy: {
      type: String,
      required: true,
    },
  },
  methods: {
    newDiameterMeasureUnit(diameterMeasureUnit) {
      this.$emit('newDiameterMeasureUnit', diameterMeasureUnit);
    },
    newMissDistanceMeasureUnit(missDistanceMeasureUnit) {
      this.$emit('newMissDistanceMeasureUnit', missDistanceMeasureUnit);
    },
    newVelocityMeasureUnit(velocityMeasureUnit) {
      this.$emit('newVelocityMeasureUnit', velocityMeasureUnit);
    },
    newSortBy(sortBy) {
      this.$emit('newSortBy', sortBy);
    },
    newFilterBy(filterBy) {
      this.$emit('newFilterBy', filterBy);
    },
  },
};
</script>

<style lang="scss" scoped>
.config-menu {
  position: absolute;
  z-index: 100;
  backdrop-filter: blur(0.5rem);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  .close-button {
    position: absolute;
    right: 0;
    margin: 0.5rem;
  }

  h1 {
    margin-top: 2rem;
  }
}
</style>
