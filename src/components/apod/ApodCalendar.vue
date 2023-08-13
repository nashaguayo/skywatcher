<template>
  <div class="apod-calendar">
    <div class="apod-calendar-container">
      <h1 class="title">Past APODs</h1>
      <div class="calendar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApodCalendar',
  props: {
    apods: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apod-calendar {
  .apod-calendar-container {
    padding-top: 2rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
      100deg,
      var(--secondary-background-color),
      var(--secondary-gradient-background-color)
    );

    .title {
      color: var(--secondary-text-color);
      margin-bottom: 1rem;
    }

    .calendar {
      background-color: var(--variant-background-color);
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  }
}
</style>
