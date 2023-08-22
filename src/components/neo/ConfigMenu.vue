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
    <AsteroidFilters
      :diameterMeasureUnit="diameterMeasureUnit"
      :missDistanceMeasureUnit="missDistanceMeasureUnit"
      @newDiameterMeasureUnit="newDiameterMeasureUnit"
      @newMissDistanceMeasureUnit="newMissDistanceMeasureUnit"
    />
    <AsteroidSort @newSortBy="newSortBy" :sortBy="sortBy" />
  </div>
</template>

<script>
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';
import AsteroidSort from '@/components/neo/AsteroidSort.vue';

export default {
  name: 'ConfigMenu',
  components: {
    AsteroidFilters,
    AsteroidSort,
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
  },
};
</script>

<style lang="scss" scoped>
.config-menu {
  position: absolute;
  z-index: 50;
  backdrop-filter: blur(0.5rem);
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
