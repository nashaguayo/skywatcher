<template>
  <div class="asteroid-filters">
    <div class="measure-units">
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
    <BaseInput
      :model="date"
      type="date"
      name="date"
      @inputValueChanged="newDate"
    />
  </div>
</template>

<script>
import BaseRadio from '@/components/ui/BaseRadio.vue';
import BaseInput from '@/components/ui/BaseInput.vue';

export default {
  name: 'AsteroidFilters',
  components: {
    BaseRadio,
    BaseInput,
  },
  props: {
    date: {
      type: String,
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
  methods: {
    newDate(newDate) {
      this.$emit('newDate', newDate);
    },
    newMissDistanceMeasureUnit(newMissDistanceMeasureUnit) {
      this.$emit('newMissDistanceMeasureUnit', newMissDistanceMeasureUnit);
    },
    newDiameterMeasureUnit(newDiameterMeasureUnit) {
      this.$emit('newDiameterMeasureUnit', newDiameterMeasureUnit);
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-filters {
  width: 100%;
  margin-top: 1rem;

  .measure-units {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem 1rem;
  }

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
