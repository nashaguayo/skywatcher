<template>
  <div class="landing-hero-skeleton">
    <h1>Loading</h1>
    <h3>Hero Image — Carina Nebula</h3>
    <BaseSpinner />
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'LandingHeroSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.landing-hero-skeleton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
}
</style>
