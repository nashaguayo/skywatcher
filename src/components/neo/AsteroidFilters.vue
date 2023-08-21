<template>
  <div class="asteroid-filters">
    <div class="miss-distance-measure-unit">
      <span>Miss Distance</span>
      <BaseButton
        :onClickHandler="
          () => $emit('newMissDistanceMeasureUnit', 'astronomical')
        "
        :small="true"
        :variant="'astronomical' !== missDistanceMeasureUnit"
      >
        Astronomical
      </BaseButton>
      <BaseButton
        :onClickHandler="
          () => $emit('newMissDistanceMeasureUnit', 'kilometers')
        "
        :small="true"
        :variant="'kilometers' !== missDistanceMeasureUnit"
      >
        Kilometers
      </BaseButton>
      <BaseButton
        :onClickHandler="() => $emit('newMissDistanceMeasureUnit', 'lunar')"
        :small="true"
        :variant="'lunar' !== missDistanceMeasureUnit"
      >
        Lunar
      </BaseButton>
      <BaseButton
        :onClickHandler="() => $emit('newMissDistanceMeasureUnit', 'miles')"
        :small="true"
        :variant="'miles' !== missDistanceMeasureUnit"
      >
        Miles
      </BaseButton>
    </div>
    <div class="diameter-measure-unit">
      <span>Diameter</span>
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
        @inputValueChanged="newDiameterMeasureUnit"
      />
    </div>
  </div>
</template>

<script>
import BaseRadio from '@/components/ui/BaseRadio.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'AsteroidFilters',
  components: {
    BaseRadio,
    BaseButton,
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
    newDiameterMeasureUnit(diameterMeasureUnit) {
      this.$emit('newDiameterMeasureUnit', diameterMeasureUnit);
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-filters {
  width: 100%;

  .diameter-measure-unit,
  .miss-distance-measure-unit {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    gap: 0.2rem;
    margin-top: 1rem;

    span {
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>
