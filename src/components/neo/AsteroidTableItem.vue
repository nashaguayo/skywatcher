<template>
  <div class="asteroid-table-item">
    <span>{{ name }}</span>
    <span>{{ magnitude }}</span>
    <span>{{ missDistance }}</span>
    <span>{{ diameterMin }}</span>
    <span>{{ diameterMax }}</span>
    <span>{{ date }}</span>
    <FontAwesomeIcon
      v-if="isPotentiallyHazardous"
      icon="fa-solid fa-skull"
      style="color: #101416"
    />
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'AsteroidTableItem',
  props: {
    neo: {
      type: Object,
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
  computed: {
    name() {
      return this.neo.name;
    },
    isPotentiallyHazardous() {
      return this.neo.isPotentiallyHazardous;
    },
    magnitude() {
      return this.neo.magnitude;
    },
    missDistance() {
      return this.roundTwoDecimalPlaces(
        this.neo.missDistance[this.missDistanceMeasureUnit]
      );
    },
    diameterMin() {
      return this.roundTwoDecimalPlaces(
        this.neo.diameter[this.diameterMeasureUnit].min
      );
    },
    diameterMax() {
      return this.roundTwoDecimalPlaces(
        this.neo.diameter[this.diameterMeasureUnit].max
      );
    },
    date() {
      return format(new Date(this.neo.date), 'kk:mm');
    },
  },
  methods: {
    roundTwoDecimalPlaces(number) {
      return Math.round(number * 100) / 100;
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-table-item {
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr) 0.5fr;
  padding: 0.5rem 0;
  gap: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);

  span {
    color: var(--secondary-text-color);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: 1;
  }
}
</style>
