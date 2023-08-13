<template>
  <div class="apod-calendar">
    <div class="apod-calendar-container">
      <h1 class="title">Past APODs</h1>
      <div class="calendar" v-if="apods.length">
        <div
          class="empty-day"
          v-for="n in firstEmptyDays"
          :key="`first-${n}`"
        ></div>
        <div
          class="day"
          v-for="apod in apods"
          :key="apod.date.toString()"
          :style="{ backgroundImage: `url(${apod.url})` }"
          @click="$emit('dayTapped', apod)"
        >
          <span class="date">
            {{ format(apod.date, 'd') }}
          </span>
        </div>
        <div
          class="empty-day filled"
          v-for="n in laterEmptyDays"
          :key="`later-${n}`"
        >
          <span class="date">
            {{ n + apods.length }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format, endOfMonth } from 'date-fns';

export default {
  name: 'ApodCalendar',
  props: {
    apods: {
      type: Array,
      required: true,
    },
  },
  computed: {
    firstEmptyDays() {
      return format(this.apods[0]?.date, 'i') - 1;
    },
    laterEmptyDays() {
      return (
        format(endOfMonth(this.apods[this.apods.length - 1]?.date), 'd') -
        format(this.apods[this.apods.length - 1].date, 'd')
      );
    },
  },
  methods: {
    format,
    endOfMonth,
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

      .day {
        height: 2.8rem;
        width: 2.8rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }

      .date {
        margin: 0.3rem;
        color: var(--main-text-color);
      }

      .empty-day {
        height: 2.8rem;
        width: 2.8rem;

        &.filled {
          background: linear-gradient(
            100deg,
            var(--variant-background-color),
            var(--variant-gradient-background-color)
          );
        }
      }
    }
  }
}
</style>
