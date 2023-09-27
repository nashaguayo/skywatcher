<template>
  <div class="asteroid-measure-units">
    <h3>Measure Units</h3>
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
      <BaseButton
        :onClickHandler="() => $emit('newDiameterMeasureUnit', 'kilometers')"
        :small="true"
        :variant="'kilometers' !== diameterMeasureUnit"
      >
        Kilometers
      </BaseButton>
      <BaseButton
        :onClickHandler="() => $emit('newDiameterMeasureUnit', 'miles')"
        :small="true"
        :variant="'miles' !== diameterMeasureUnit"
      >
        Miles
      </BaseButton>
      <BaseButton
        :onClickHandler="() => $emit('newDiameterMeasureUnit', 'meters')"
        :small="true"
        :variant="'meters' !== diameterMeasureUnit"
      >
        Meters
      </BaseButton>
      <BaseButton
        :onClickHandler="() => $emit('newDiameterMeasureUnit', 'feet')"
        :small="true"
        :variant="'feet' !== diameterMeasureUnit"
      >
        Feet
      </BaseButton>
    </div>
    <div class="velocity-measure-unit">
      <span>Velocity</span>
      <BaseButton
        :onClickHandler="
          () => $emit('newVelocityMeasureUnit', 'kilometers_per_hour')
        "
        :small="true"
        :variant="'kilometers_per_hour' !== velocityMeasureUnit"
      >
        Kilometers per Hour
      </BaseButton>
      <BaseButton
        :onClickHandler="
          () => $emit('newVelocityMeasureUnit', 'kilometers_per_second')
        "
        :small="true"
        :variant="'kilometers_per_second' !== velocityMeasureUnit"
      >
        Kilometers per Second
      </BaseButton>
      <BaseButton
        :onClickHandler="
          () => $emit('newVelocityMeasureUnit', 'miles_per_hour')
        "
        :small="true"
        :variant="'miles_per_hour' !== velocityMeasureUnit"
      >
        Miles per Hour
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'AsteroidMeasureUnits',
  components: {
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
    velocityMeasureUnit: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-measure-units {
  width: 100%;

  h3 {
    margin-top: 1rem;
    text-align: center;
  }

  .diameter-measure-unit,
  .miss-distance-measure-unit,
  .velocity-measure-unit {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    gap: 0.2rem;
    margin-top: 1rem;

    span {
      font-weight: 600;
      text-align: center;
      color: var(--secondary-text-color);
    }
  }
}
</style>
