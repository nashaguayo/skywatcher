<template>
  <div class="desktop-guardian-view">
    <LandingHero />
    <div class="disclaimer">
      <span>SkyWatcher is meant for mobile use only. Download the App!</span>
    </div>
  </div>
</template>

<script>
import LandingHero from '@/components/common/LandingHero.vue';

export default {
  name: 'DesktopGuardianView',
  title: 'Download on your phone',
  components: {
    LandingHero,
  },
};
</script>

<style lang="scss" scoped>
.desktop-guardian-view {
  height: calc(100vh - 5rem);

  .disclaimer {
    background-color: var(--secondary-background-color);
    transform: translateY(-100%);
    display: flex;
    justify-content: center;

    span {
      color: var(--secondary-text-color);
      text-align: center;
      padding: 1rem;
    }
  }
}
</style>
