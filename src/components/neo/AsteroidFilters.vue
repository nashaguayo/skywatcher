<template>
  <div class="asteroid-filters">
    <h3>Filter By</h3>
    <BaseButton
      :onClickHandler="() => $emit('newFilterBy', '')"
      :small="true"
      :variant="filterBy !== ''"
    >
      No Filters
    </BaseButton>
    <BaseButton
      :onClickHandler="() => $emit('newFilterBy', 'sentry')"
      :small="true"
      :variant="filterBy !== 'sentry'"
    >
      Sentry Objects
    </BaseButton>
    <BaseButton
      :onClickHandler="() => $emit('newFilterBy', 'hazardous')"
      :small="true"
      :variant="filterBy !== 'hazardous'"
    >
      Hazardous Objects
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
  props: {
    filterBy: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-filters {
  display: flex;
  flex-direction: column;
  padding: 1rem;
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
