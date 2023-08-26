<template>
  <div class="install-view">
    <ErrorBoundary
      componentName="LandingHero"
      errorMessage="Unable to load landing hero"
    >
      <LandingHero
        :displayInstallButton="true"
        :onClickHandler="install"
        :loadedPrompt="loadedPrompt"
        :installing="installing"
      />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from '@/components/common/ErrorBoundary.vue';
import LandingHero from '@/components/common/LandingHero.vue';

export default {
  name: 'InstallView',
  title: 'Install',
  components: {
    ErrorBoundary,
    LandingHero,
  },
  data() {
    return {
      deferredInstallPrompt: null,
      installing: false,
      loadedPrompt: false,
    };
  },
  async created() {
    window.addEventListener('beforeinstallprompt', this.beforeInstallPrompt);
  },
  beforeDestroy() {
    window.removeEventListener('beforeinstallprompt', this.beforeInstallPrompt);
  },
  methods: {
    async install() {
      this.installing = true;
      await this.deferredInstallPrompt.prompt();
      const { outcome } = await this.deferredInstallPrompt.userChoice;
      if (outcome === 'dismissed') {
        this.installing = false;
      }
    },
    beforeInstallPrompt(event) {
      event.preventDefault();
      this.deferredInstallPrompt = event;
      this.loadedPrompt = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.install-view {
  height: 100vh;
}
</style>
