<template>
  <div class="daily-picture-skeleton">
    <div class="image-placeholder">
      <FontAwesomeIcon
        icon="fa-solid fa-question"
        style="color: rgb(207, 207, 207)"
        size="6x"
      />
    </div>
    <h1 class="loading-title">Loading</h1>
    <h3>Astronomy Picture</h3>
    <BaseSpinner />
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'DailyPictureSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.daily-picture-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .image-placeholder {
    width: 100%;
    height: 10rem;
    background-color: var(--variant-background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-mask-image: linear-gradient(black 70%, transparent);

    @media (min-width: $min-width-first-break) {
      height: 15rem;
    }

    @media (min-width: $min-width-second-break) {
      height: 25rem;
    }

    @media (min-width: $min-width-third-break) {
      height: 30rem;
    }

    @media (min-width: $min-width-fourth-break) {
      height: 40rem;
    }
  }
}
</style>
