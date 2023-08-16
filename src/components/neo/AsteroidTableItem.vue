<template>
  <div class="asteroid-table-item">
    <div class="name" @click="open = !open">
      <span>{{ name }}</span>
      <FontAwesomeIcon
        v-if="isPotentiallyHazardous"
        icon="fa-solid fa-skull"
        style="color: #101416"
        class="icon"
      />
    </div>
    <div
      class="content-container"
      :style="{ 'grid-template-rows': open ? '1fr' : '0fr' }"
    >
      <div class="content">
        <div class="content-item">
          <span>Magnitude</span>
          <span>{{ magnitude }}</span>
        </div>
        <div class="content-item">
          <span>Miss Distance</span>
          <span>{{ missDistance }}</span>
        </div>
        <div class="content-item">
          <span>Diameter Min</span>
          <span>{{ diameterMin }}</span>
        </div>
        <div class="content-item">
          <span>Diameter Max</span>
          <span>{{ diameterMax }}</span>
        </div>
        <div class="content-item">
          <span>Hour</span>
          <span>{{ date }}</span>
        </div>
      </div>
    </div>
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
  data() {
    return {
      open: false,
    };
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
  margin: 0.5rem;
  background-color: var(--variant-opacity-background-color);

  .name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--variant-opacity-background-color);

    .icon {
      padding: 0.5rem;
    }
  }

  .content-container {
    display: grid;
    transition: grid-template-rows 0.3s;
  }

  .content {
    overflow: hidden;

    .content-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  span {
    color: var(--secondary-text-color);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: 1;
    padding: 0.5rem;
  }
}
</style>
