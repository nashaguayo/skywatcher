<template>
  <div class="config-menu">
    <FontAwesomeIcon
      icon="fa-solid fa-xmark"
      size="2x"
      class="icon"
      @click="$emit('closeTapped')"
    />
    <h1>Configuration</h1>
    <AsteroidFilters
      :diameterMeasureUnit="diameterMeasureUnit"
      :missDistanceMeasureUnit="missDistanceMeasureUnit"
      :date="date"
      @newDiameterMeasureUnit="newDiameterMeasureUnit"
      @newMissDistanceMeasureUnit="newMissDistanceMeasureUnit"
      @newDate="newDate"
    />
  </div>
</template>

<script>
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';
export default {
  name: 'ConfigMenu',
  components: {
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
    date: {
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
    newDate(date) {
      this.$emit('newDate', date);
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

  .icon {
    position: absolute;
    right: 0;
    margin: 1rem;
    color: var(--main-icon-color);
    cursor: pointer;
  }

  .icon:hover {
    color: var(--main-icon-hover-color);
  }

  h1 {
    margin-top: 2rem;
  }
}
</style>
