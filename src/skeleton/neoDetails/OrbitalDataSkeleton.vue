<template>
  <div class="orbital-data-skeleton">
    <div class="content-outside">
      <div class="content-inside">
        <BaseSpinner />
      </div>
      <p class="item value">YYYY-MM-DD hh:mm:ss</p>
      <p class="item key">Orbit Determination Date</p>
      <p class="item value">-</p>
      <p class="item key">Orbit Uncertainty</p>
      <p class="item value">-</p>
      <p class="item key">Orbit Period</p>
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
      width: 100%;
      display: flex;
      flex-direction: column;
      background: linear-gradient(
        100deg,
        var(--variant-background-color),
        var(--variant-gradient-background-color)
      );
      box-shadow: var(--main-box-shadow);
      padding: 1rem;
      margin: 1rem 0;
      justify-content: center;
      align-items: center;
      height: 20rem;
    }

    .item {
      text-align: center;
      margin: 1rem 0 0;
      color: var(--secondary-text-color);

      &.value {
        font-size: 2rem;
        line-height: 1.7rem;
      }

      &.key {
        font-size: 1.2rem;
        margin: 0 0 0.5rem;
      }
    }
  }
}
</style>
