<template>
  <div class="asteroid-filters">
    <div class="miss-distance-measure-unit">
      <BaseRadio
        :model="missDistanceMeasureUnit"
        name="missDistanceMeasureUnit"
        value="astronomical"
        label="astronomical"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
      <BaseRadio
        :model="missDistanceMeasureUnit"
        name="missDistanceMeasureUnit"
        value="kilometers"
        label="kilometers"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
      <BaseRadio
        :model="missDistanceMeasureUnit"
        name="missDistanceMeasureUnit"
        value="lunar"
        label="lunar"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
      <BaseRadio
        :model="missDistanceMeasureUnit"
        name="missDistanceMeasureUnit"
        value="miles"
        label="miles"
        @inputValueChanged="newMissDistanceMeasureUnit"
      />
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
  },
  methods: {
    newDate(newDate) {
      this.$emit('newDate', newDate);
    },
    newMissDistanceMeasureUnit(newMissDistanceMeasureUnit) {
      this.$emit('newMissDistanceMeasureUnit', newMissDistanceMeasureUnit);
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-filters {
  width: 100%;
  margin-top: 1rem;
}
</style>
