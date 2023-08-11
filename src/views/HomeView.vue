<template>
  <div class="home-view">
    <LandingHero />
  </div>
</template>

<script>
import LandingHero from '@/components/home/LandingHero.vue';

export default {
  name: 'HomeView',
  components: {
    LandingHero,
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  background-image: url('@/assets/images/landing/hero.jpg');
  background-size: cover;
  background-position: center;
  padding: 2rem;
  padding-left: 4rem;
  height: 100%;
}
</style>
