<template>
  <div class="apod-calendar">
    <ApodCalendarSkeleton v-if="!loaded" />
    <div class="apod-calendar-container" v-show="loaded">
      <h1 class="title">Past APODs</h1>
      <BaseInput
        type="month"
        name="date"
        :model="date"
        :max="max"
        :min="min"
        @inputValueChanged="setDate"
        class="input"
      />
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
import ApodCalendarSkeleton from '@/skeleton/apod/ApodCalendarSkeleton.vue';
import { format, endOfMonth } from 'date-fns';
import BaseInput from '@/components/ui/BaseInput.vue';

export default {
  name: 'ApodCalendar',
  components: {
    ApodCalendarSkeleton,
    BaseInput,
  },
  props: {
    apods: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      max: format(new Date(), 'yyyy-MM'),
      min: format(new Date(1995, 6, 16), 'yyyy-MM'),
      loaded: false,
    };
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
    setDate(date) {
      this.loaded = false;
      this.$emit('dateChanged', `${date}-01`);
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

    .input {
      width: 19.5rem;
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
