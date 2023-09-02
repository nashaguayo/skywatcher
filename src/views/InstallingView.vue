<template>
  <div class="installing-view">
    <h1>Installing...</h1>
    <BaseSpinner :big="true" />
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';
import { isInstalled } from '@/lib/pwa';

export default {
  name: 'InstallingView',
  title: 'Installing',
  components: {
    BaseSpinner,
  },
  data() {
    return {
      interval: null,
    };
  },
  async created() {
    this.interval = setInterval(async () => {
      if (await isInstalled()) {
        this.$router.push({ name: 'launchApp' });
      }
    }, 2500);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
.installing-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 3rem;
}
</style>
