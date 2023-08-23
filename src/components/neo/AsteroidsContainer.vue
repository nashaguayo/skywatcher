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
    <div class="reference">
      <FontAwesomeIcon icon="fa-solid fa-satellite" class="icon" />
      <span>Is Sentry Object</span>
    </div>
    <div class="reference">
      <FontAwesomeIcon icon="fa-solid fa-skull" class="icon" />
      <span>Is Hazardous Object</span>
    </div>
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
        :filterBy="filterBy"
        @newDiameterMeasureUnit="newDiameterMeasureUnit"
        @newMissDistanceMeasureUnit="newMissDistanceMeasureUnit"
        @newDate="newDate"
        @newSortBy="newSortBy"
        @newFilterBy="newFilterBy"
        @closeTapped="closeConfigMenu"
      />
    </transition>
  </div>
</template>

<script>
import AsteroidTable from '@/components/neo/AsteroidTable.vue';
import ConfigMenu from '@/components/neo/ConfigMenu.vue';
import { getNearEarthObjects, sortNeos, filterNeos } from '@/helpers/neo';
import { parseISO } from 'date-fns';

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
      filterBy: '',
    };
  },
  watch: {
    date(date) {
      this.getNearEarthObjects(parseISO(date));
    },
  },
  computed: {
    filteredNeos() {
      return filterNeos(this.filterBy, this.neos);
    },
    sortedNeos() {
      return sortNeos(this.sortBy, this.filteredNeos, this.diameterMeasureUnit);
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
    newFilterBy(filterBy) {
      this.filterBy = filterBy;
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
    margin: 0.5rem 0 1rem;
  }

  .reference {
    align-self: start;
    margin-left: 1.5rem;
    margin-top: 0.5rem;

    .icon {
      color: var(--main-icon-color);
    }

    span {
      margin-left: 0.5rem;
    }
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
