<template>
  <div class="asteroid-filters">
    <BaseInput
      :model="date"
      type="date"
      name="date"
      @inputValueChanged="(date) => $emit('newDate', date)"
    />
  </div>
</template>

<script>
import BaseInput from '@/components/ui/BaseInput.vue';

export default {
  name: 'AsteroidFilters',
  components: {
    BaseInput,
  },
  props: {
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-filters {
  width: 100%;
  margin-top: 1rem;
}
</style>
