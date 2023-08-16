<template>
  <div class="asteroids-container">
    <h1>Asteroids</h1>
    <h3>Near Earth Objects</h3>
    <AsteroidTable :neos="neos" />
  </div>
</template>

<script>
import AsteroidTable from '@/components/neo/AsteroidTable.vue';
import { getNearEarthObjects } from '@/helpers/neo';

export default {
  name: 'AsteroidsContainer',
  components: {
    AsteroidTable,
  },
  data() {
    return {
      neos: [],
    };
  },
  async created() {
    this.neos = await getNearEarthObjects(new Date());
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
    margin-top: 0.5rem;
  }
}
</style>
