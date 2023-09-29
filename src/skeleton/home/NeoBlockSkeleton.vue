<template>
  <div class="neo-block-skeleton">
    <h2>Asteroids</h2>
    <span>Getting hazardous asteroids for today...</span>
    <BaseSpinner />
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'NeoBlockSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.neo-block-skeleton {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 19rem;
  background-color: var(--opaque-background-color);

  h2,
  span {
    text-align: center;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3rem;
  }
}
</style>
