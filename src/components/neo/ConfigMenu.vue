<template>
  <div class="config-menu">
    <div class="close-button">
      <FontAwesomeIcon
        icon="fa-solid fa-xmark"
        class="icon"
        @click="$emit('closeTapped')"
      />
    </div>
    <h1>Configuration</h1>
    <AsteroidMeasureUnits
      :diameterMeasureUnit="diameterMeasureUnit"
      :missDistanceMeasureUnit="missDistanceMeasureUnit"
      @newDiameterMeasureUnit="newDiameterMeasureUnit"
      @newMissDistanceMeasureUnit="newMissDistanceMeasureUnit"
    />
    <AsteroidSort @newSortBy="newSortBy" :sortBy="sortBy" />
    <AsteroidFilters @newFilterBy="newFilterBy" :filterBy="filterBy" />
  </div>
</template>

<script>
import AsteroidMeasureUnits from '@/components/neo/AsteroidMeasureUnits.vue';
import AsteroidSort from '@/components/neo/AsteroidSort.vue';
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';

export default {
  name: 'ConfigMenu',
  components: {
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
    background-color: var(--button-variant-color);
    position: absolute;
    right: 0;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    box-shadow: var(--main-box-shadow);

    .icon {
      color: var(--main-icon-color);
    }
  }

  .icon:hover {
    color: var(--main-icon-hover-color);
  }

  h1 {
    margin-top: 2rem;
  }
}
</style>
