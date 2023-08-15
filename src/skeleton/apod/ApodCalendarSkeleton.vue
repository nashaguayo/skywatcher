<template>
  <div class="apod-calendar-skeleton">
    <h1 class="title">Loading Past APODs</h1>
    <div class="input"></div>
    <div class="calendar">
      <BaseSpinner />
    </div>
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'ApodCalendarSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.apod-calendar-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    100deg,
    var(--secondary-background-color),
    var(--secondary-gradient-background-color)
  );
  padding-bottom: 3rem;

  .title {
    margin-top: 1rem;
    color: var(--secondary-text-color);
  }

  .input {
    margin-top: 1rem;
    width: 19.6rem;
    height: 2.5rem;
    background-color: white;

    @media (min-width: $min-width-first-break) {
      width: 23.8rem;
    }

    @media (min-width: $min-width-second-break) {
      width: 37.8rem;
      height: 3rem;
    }
  }

  .calendar {
    background-color: var(--variant-background-color);
    width: 19.6rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: $min-width-first-break) {
      width: 23.8rem;
      height: 17rem;
    }

    @media (min-width: $min-width-second-break) {
      width: 37.8rem;
      height: 27rem;
    }
  }
}
</style>
