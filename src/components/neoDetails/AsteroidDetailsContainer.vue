<template>
  <div class="asteroid-details-container">
    <h1>Asteroid Details</h1>
    <span>{{ $route.params.id }}</span>
  </div>
</template>

<script>
export default {
  name: 'AsteroidDetailsContainer',
};
</script>

<style lang="scss" scoped>
.asteroid-details-container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
}
</style>
