<template>
  <div class="apod-calendar">
    <div class="apod-calendar-container"></div>
  </div>
</template>

<script>
export default {
  name: 'ApodCalendar',
  data() {
    return {
      apodDate: null,
    };
  },
  watch: {
    apodDate(apodDate) {
      console.log(apodDate);
    },
  },
  methods: {
    apodDateChanged(apodDate) {
      this.apodDate = apodDate;
    },
  },
};
</script>

<style lang="scss" scoped>
.apod-calendar {
  .apod-calendar-container {
  }
}
</style>
