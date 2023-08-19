<template>
  <div class="asteroid-table">
    <BaseInput
      :model="date"
      type="date"
      name="date"
      @inputValueChanged="newDate"
      class="input"
      :class="{ 'drop-shadow': hasScrolled }"
    />
    <AsteroidTableSkeleton v-if="!loaded" />
    <div v-else class="asteroid-table-container" ref="table">
      <AsteroidTableItem
        v-for="neo in neos"
        :key="neo.id"
        :neo="neo"
        :diameterMeasureUnit="diameterMeasureUnit"
        :missDistanceMeasureUnit="missDistanceMeasureUnit"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/ui/BaseInput.vue';
import AsteroidTableSkeleton from '@/skeleton/neo/AsteroidTableSkeleton.vue';
import AsteroidTableItem from '@/components/neo/AsteroidTableItem.vue';
import throttle from 'lodash/throttle';

export default {
  name: 'AsteroidTable',
  components: {
    BaseInput,
    AsteroidTableSkeleton,
    AsteroidTableItem,
  },
  props: {
    neos: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    missDistanceMeasureUnit: {
      type: String,
      required: true,
    },
    diameterMeasureUnit: {
      type: String,
      required: true,
    },
    loaded: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      hasScrolled: false,
    };
  },
  created() {
    this.throttledHandleScroll = throttle(this.handleScroll, 500);
  },
  watch: {
    async loaded(loaded) {
      await this.$nextTick();
      if (loaded) {
        this.$refs.table.addEventListener('scroll', this.throttledHandleScroll);
      }
    },
  },
  methods: {
    newDate(date) {
      this.$refs.table.removeEventListener(
        'scroll',
        this.throttledHandleScroll
      );
      this.$emit('newDate', date);
    },
    handleScroll() {
      this.hasScrolled = this.$refs.table.scrollTop !== 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-table {
  background: linear-gradient(
    100deg,
    var(--secondary-background-color),
    var(--secondary-gradient-background-color)
  );
  width: 100%;
  margin-top: 1rem;

  .drop-shadow {
    box-shadow: var(--bottom-box-shadow);
  }

  .input {
    transition: box-shadow 0.3s;
  }

  .asteroid-table-container {
    overflow-y: scroll;
    max-height: calc(100vh - 10rem);
  }
}
</style>
