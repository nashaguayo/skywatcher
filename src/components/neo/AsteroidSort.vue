<template>
  <div class="asteroid-sort">
    <h3>Sort By</h3>
    <BaseButton
      :onClickHandler="() => $emit('newSortBy', 'name')"
      :variant="'name' !== sortBy"
      :small="true"
      >Name</BaseButton
    >
    <BaseButton
      :onClickHandler="() => $emit('newSortBy', 'missDistance')"
      :variant="'missDistance' !== sortBy"
      :small="true"
    >
      Miss Distance
    </BaseButton>
    <BaseButton
      :onClickHandler="() => $emit('newSortBy', 'minDiameter')"
      :variant="'minDiameter' !== sortBy"
      :small="true"
    >
      Minimum Diameter
    </BaseButton>
    <BaseButton
      :onClickHandler="() => $emit('newSortBy', 'maxDiameter')"
      :variant="'maxDiameter' !== sortBy"
      :small="true"
    >
      Maximum Diameter
    </BaseButton>
    <BaseButton
      :onClickHandler="() => $emit('newSortBy', 'hour')"
      :variant="'hour' !== sortBy"
      :small="true"
    >
      Hour
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'AsteroidSort',
  components: {
    BaseButton,
  },
  props: {
    sortBy: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-sort {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 0.2rem;

  h3 {
    margin: 1rem 0;
    text-align: center;
  }
}
</style>
