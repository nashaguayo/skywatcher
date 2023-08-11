<template>
  <div class="landing-hero">
    <TunnedLogo class="logo" />
    <h2>The universe at the tip of your fingers</h2>
    <div class="description">
      <p>This webapp was built by a universe fan.</p>
      <p>
        It is fueled by
        <a :href="nasaApisUrl" target="_blank"> NASA's APIs. </a>
      </p>
    </div>
    <p>More to come soon...</p>
  </div>
</template>

<script>
import TunnedLogo from '@/components/ui/TunnedLogo.vue';

export default {
  name: 'LandingHero',
  components: {
    TunnedLogo,
  },
  data() {
    return {
      nasaApisUrl: process.env.VUE_APP_NASA_APIS_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.landing-hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  .logo {
    margin-left: -1.6rem;
  }
}
</style>
