<template>
  <div class="asteroids-container">
    <h1>Asteroids</h1>
    <h3>Near Earth Objects</h3>
    <AsteroidFilters
      :diameterMeasureUnit="diameterMeasureUnit"
      :missDistanceMeasureUnit="missDistanceMeasureUnit"
      :date="date"
      @newDiameterMeasureUnit="newDiameterMeasureUnit"
      @newMissDistanceMeasureUnit="newMissDistanceMeasureUnit"
      @newDate="newDate"
    />
    <AsteroidTable
      :neos="neos"
      :missDistanceMeasureUnit="missDistanceMeasureUnit"
      :diameterMeasureUnit="diameterMeasureUnit"
      :loaded="loaded"
    />
  </div>
</template>

<script>
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';
import AsteroidTable from '@/components/neo/AsteroidTable.vue';
import { getNearEarthObjects } from '@/helpers/neo';
import { parseISO } from 'date-fns';

export default {
  name: 'AsteroidsContainer',
  components: {
    AsteroidFilters,
    AsteroidTable,
  },
  data() {
    return {
      neos: [],
      missDistanceMeasureUnit: 'astronomical',
      diameterMeasureUnit: 'kilometers',
      date: '',
      loaded: false,
    };
  },
  watch: {
    date(date) {
      this.getNearEarthObjects(parseISO(date));
    },
  },
  async created() {
    await this.getNearEarthObjects(new Date());
  },
  methods: {
    parseISO,
    async getNearEarthObjects(date) {
      this.loaded = false;
      this.neos = await getNearEarthObjects(date);
      this.loaded = true;
    },
    newDate(date) {
      this.date = date;
    },
    newMissDistanceMeasureUnit(missDistanceMeasureUnit) {
      this.missDistanceMeasureUnit = missDistanceMeasureUnit;
    },
    newDiameterMeasureUnit(diameterMeasureUnit) {
      this.diameterMeasureUnit = diameterMeasureUnit;
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroids-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;

  h3 {
    margin: 0.5rem 0;
  }
}
</style>
