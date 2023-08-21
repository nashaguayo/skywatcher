<template>
  <div class="asteroid-filters">
    <div class="miss-distance-measure-unit">
      <BaseRadio
        :model="missDistanceMeasureUnit"
        name="missDistanceMeasureUnit"
        id="kilometers"
        value="kilometers"
        label="Kilometers"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
      <BaseRadio
        :model="missDistanceMeasureUnit"
        name="missDistanceMeasureUnit"
        id="lunar"
        value="lunar"
        label="Lunar"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
      <BaseRadio
        :model="missDistanceMeasureUnit"
        name="missDistanceMeasureUnit"
        id="miles"
        value="miles"
        label="Miles"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
      <BaseRadio
        :model="missDistanceMeasureUnit"
        name="missDistanceMeasureUnit"
        id="astronomical"
        value="astronomical"
        label="Astronomical"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
      <span>Miss Distance</span>
    </div>
    <div class="diameter-measure-unit">
      <BaseRadio
        :model="diameterMeasureUnit"
        name="diameterMeasureUnit"
        id="feet"
        value="feet"
        label="Feet"
        @inputValueChanged="newDiameterMeasureUnit"
      />
      <BaseRadio
        :model="diameterMeasureUnit"
        name="diameterMeasureUnit"
        id="meters"
        value="meters"
        label="Meters"
        @inputValueChanged="newDiameterMeasureUnit"
      />
      <BaseRadio
        :model="diameterMeasureUnit"
        name="diameterMeasureUnit"
        id="miles"
        value="miles"
        label="Miles"
        @inputValueChanged="newDiameterMeasureUnit"
      />
      <BaseRadio
        :model="diameterMeasureUnit"
        name="diameterMeasureUnit"
        id="kilometers"
        value="kilometers"
        label="Kilometers"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
      <span>Diameter</span>
    </div>
  </div>
</template>

<script>
import BaseRadio from '@/components/ui/BaseRadio.vue';

export default {
  name: 'AsteroidFilters',
  components: {
    BaseRadio,
  },
  props: {
    missDistanceMeasureUnit: {
      type: String,
      required: true,
    },
    diameterMeasureUnit: {
      type: String,
      required: true,
    },
  },
  methods: {
    newMissDistanceMeasureUnit(missDistanceMeasureUnit) {
      this.$emit('newMissDistanceMeasureUnit', missDistanceMeasureUnit);
    },
    newDiameterMeasureUnit(diameterMeasureUnit) {
      this.$emit('newDiameterMeasureUnit', diameterMeasureUnit);
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-filters {
  width: 100%;
  margin-top: 1rem;

  .diameter-measure-unit,
  .miss-distance-measure-unit {
    display: flex;
    flex-direction: column-reverse;

    span {
      font-weight: 600;
    }
  }
}
</style>
