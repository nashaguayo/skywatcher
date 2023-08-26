<template>
  <div class="installing-view">
    <h1>Installing...</h1>
    <BaseSpinner />
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'InstallingView',
  components: {
    BaseSpinner,
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
