<template>
  <div class="basic-info-header-skeleton">
    <BaseSpinner />
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'BasicInfoHeaderSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.basic-info-header-skeleton {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 14.162rem;

  h1 {
    margin-bottom: 2rem;
  }
}
</style>
