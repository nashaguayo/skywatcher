<template>
  <div class="asteroids-container">
    <FontAwesomeIcon
      icon="fa-solid fa-ellipsis-vertical"
      size="2x"
      class="config-menu-open"
      @click="openConfigMenu"
    />
    <h1>Asteroids</h1>
    <h3>Near Earth Objects</h3>
    <AsteroidTable
      :neos="sortedNeos"
      :date="date"
      :missDistanceMeasureUnit="missDistanceMeasureUnit"
      :diameterMeasureUnit="diameterMeasureUnit"
      :loaded="loaded"
      @newDate="newDate"
    />
    <transition name="slide-from-above">
      <ConfigMenu
        v-if="configMenuOpen"
        :diameterMeasureUnit="diameterMeasureUnit"
        :missDistanceMeasureUnit="missDistanceMeasureUnit"
        :date="date"
        :sortBy="sortBy"
        @newDiameterMeasureUnit="newDiameterMeasureUnit"
        @newMissDistanceMeasureUnit="newMissDistanceMeasureUnit"
        @newDate="newDate"
        @newSortBy="newSortBy"
        @closeTapped="closeConfigMenu"
      />
    </transition>
  </div>
</template>

<script>
import AsteroidTable from '@/components/neo/AsteroidTable.vue';
import ConfigMenu from '@/components/neo/ConfigMenu.vue';
import { getNearEarthObjects } from '@/helpers/neo';
import { parseISO, isBefore } from 'date-fns';

export default {
  name: 'AsteroidsContainer',
  components: {
    AsteroidTable,
    ConfigMenu,
  },
  data() {
    return {
      neos: [],
      missDistanceMeasureUnit: 'astronomical',
      diameterMeasureUnit: 'kilometers',
      date: '',
      sortBy: 'name',
      loaded: false,
      configMenuOpen: false,
    };
  },
  watch: {
    date(date) {
      this.getNearEarthObjects(parseISO(date));
    },
  },
  computed: {
    sortedNeos() {
      let sortedNeos;
      switch (this.sortBy) {
        case 'name':
          sortedNeos = this.neos
            .slice()
            .sort((a, b) => (a.name < b.name ? -1 : 1));
          break;
        case 'missDistance':
          sortedNeos = this.neos
            .slice()
            .sort((a, b) => (a.missDistance < b.missDistance ? -1 : 1));
          break;
        case 'minDiameter':
          sortedNeos = this.neos
            .slice()
            .sort((a, b) =>
              a.diameter[this.diameterMeasureUnit].min >
              b.diameter[this.diameterMeasureUnit].min
                ? -1
                : 1
            );
          break;
        case 'maxDiameter':
          sortedNeos = this.neos
            .slice()
            .sort((a, b) =>
              a.diameter[this.diameterMeasureUnit].max >
              b.diameter[this.diameterMeasureUnit].max
                ? -1
                : 1
            );
          break;
        case 'hour':
          sortedNeos = this.neos
            .slice()
            .sort((a, b) => (isBefore(a.date, b.date) ? -1 : 1));
          break;
        default:
          sortedNeos = this.neos;
      }
      return sortedNeos;
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
    newSortBy(sortBy) {
      this.sortBy = sortBy;
    },
    newMissDistanceMeasureUnit(missDistanceMeasureUnit) {
      this.missDistanceMeasureUnit = missDistanceMeasureUnit;
    },
    newDiameterMeasureUnit(diameterMeasureUnit) {
      this.diameterMeasureUnit = diameterMeasureUnit;
    },
    openConfigMenu() {
      this.configMenuOpen = true;
    },
    closeConfigMenu() {
      this.configMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroids-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .config-menu-open {
    position: absolute;
    right: 0;
    color: var(--main-icon-color);
    margin: 1rem;
    cursor: pointer;
  }

  .config-menu-open:hover {
    color: var(--main-icon-hover-color);
  }

  h1 {
    margin-top: 2rem;
  }

  h3 {
    margin: 0.5rem 0;
  }
}

.slide-from-above-enter-active,
.slide-from-above-leave-active {
  transition: transform 0.3s;
}

.slide-from-above-enter,
.slide-from-above-leave-to {
  transform: translateY(-100%);
}
</style>
