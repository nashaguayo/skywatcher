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

  @media (min-width: $min-width-second-break) {
    padding-left: 6rem;
  }

  @media (min-width: $min-width-third-break) {
    padding-left: 10rem;
  }

  @media (min-width: $min-width-fourth-break) {
    padding-left: 14rem;
  }

  @media (min-width: $min-width-fifth-break) {
    padding-left: 20rem;
  }

  @media (min-width: $min-width-sixth-break) {
    padding-left: 28rem;
  }
}
</style>
