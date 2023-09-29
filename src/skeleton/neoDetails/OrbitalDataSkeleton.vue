<template>
  <div class="orbital-data-skeleton">
    <div class="content-outside">
      <div class="content-inside">
        <BaseSpinner />
      </div>
    </div>
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'OrbitalDataSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.orbital-data-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-outside {
    margin: 1rem 2rem;
    padding: 1.5rem;
    width: calc(100% - 4rem);
    background: linear-gradient(
      100deg,
      var(--secondary-background-color),
      var(--secondary-gradient-background-color)
    );
    box-shadow: var(--main-box-shadow);

    .content-inside {
      display: flex;
      flex-direction: column;
      background: linear-gradient(
        100deg,
        var(--variant-background-color),
        var(--variant-gradient-background-color)
      );
      box-shadow: var(--main-box-shadow);
      padding: 1rem;
      justify-content: center;
      align-items: center;
      height: 20rem;
    }
  }
}
</style>
