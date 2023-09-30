<template>
  <div class="apod-block-skeleton">
    <h2>Astronomy Picture<br />of the Day</h2>
    <BaseSpinner />
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'ApodBlockSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.apod-block-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 24rem;
  background: linear-gradient(
    100deg,
    var(--variant-background-color),
    var(--variant-gradient-background-color)
  );
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;

  h2 {
    text-align: center;
    margin-bottom: 7rem;
  }
}
</style>
