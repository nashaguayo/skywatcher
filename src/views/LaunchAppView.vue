<template>
  <div class="launch-app-view">
    <h1>SkyWatcher</h1>
    <h3>Ready to use on your phone!</h3>
    <BaseButton :onClickHandler="launchApp" class="launch-app-button">
      Launch App
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';
import { isInstalled } from '@/lib/pwa';

export default {
  name: 'LaunchAppView',
  title: 'Launch App',
  components: {
    BaseButton,
  },
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
    };
  },
  async created() {
    if (!(await isInstalled())) {
      this.$router.push({ name: 'install' });
      return;
    }
  },
  methods: {
    launchApp() {
      window.open(this.url, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.launch-app-view {
  margin: 5rem 2rem;

  h1,
  h3 {
    text-align: center;
  }

  h1 {
    font-family: 'Lobster';
  }

  h3 {
    margin: 1rem 0;
  }

  .launch-app-button {
    width: 100%;
  }
}
</style>
