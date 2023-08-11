<template>
  <div class="home-view">
    <LandingHero />
  </div>
</template>

<script>
import LandingHero from '@/components/home/LandingHero.vue';

export default {
  name: 'HomeView',
  title: 'Universe Explorer',
  components: {
    LandingHero,
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  height: 100%;
}
</style>
