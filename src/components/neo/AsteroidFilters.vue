<template>
  <div class="asteroid-filters">
    <h3>Filter By</h3>
    <BaseButton :small="true" :variant="true">
      <FontAwesomeIcon icon="fa-solid fa-satellite" class="icon" />
      <span>Sentry Objects</span>
    </BaseButton>
    <BaseButton :small="true" :variant="true">
      <FontAwesomeIcon icon="fa-solid fa-skull" class="icon" />
      <span>Hazardous Objects</span>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'AsteroidFilters',
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.asteroid-filters {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  padding: 0 1rem;
  width: 100%;
  gap: 0.3rem;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .icon {
    margin-right: 0.8rem;
  }
}
</style>
