<template>
  <div class="asteroid-table-item">
    <div class="name" :class="{ 'name-open': !open }" @click="open = !open">
      <span>{{ name }}</span>
      <div class="icons">
        <FontAwesomeIcon
          v-if="isSentryObject"
          icon="fa-solid fa-satellite"
          class="icon"
        />
        <FontAwesomeIcon
          v-if="isPotentiallyHazardous"
          icon="fa-solid fa-skull"
          class="icon"
        />
      </div>
    </div>
    <div
      class="content-container"
      :style="{ 'grid-template-rows': open ? '1fr' : '0fr' }"
    >
      <div class="content">
        <div class="content-item">
          <span>Magnitude</span>
          <span>{{ magnitude }}</span>
        </div>
        <div class="content-item">
          <span>Miss Distance</span>
          <span
            >{{ missDistance }}
            {{ missDistanceMeasureUnitMap.get(missDistanceMeasureUnit) }}</span
          >
        </div>
        <div class="content-item">
          <span>Diameter Min</span>
          <span
            >{{ diameterMin }}
            {{ diameterMeasureUnitMap.get(diameterMeasureUnit) }}</span
          >
        </div>
        <div class="content-item">
          <span>Diameter Max</span>
          <span
            >{{ diameterMax }}
            {{ diameterMeasureUnitMap.get(diameterMeasureUnit) }}</span
          >
        </div>
        <div class="content-item">
          <span>Hour</span>
          <span>{{ date }}</span>
        </div>
        <BaseButton
          class="see-more-info-button"
          :small="true"
          :variant="true"
          :onClickHandler="goToNeoDetailsPage"
        >
          See More Info
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';
import {
  missDistanceMeasureUnitMap,
  diameterMeasureUnitMap,
} from '@/constants/measurements';
import { roundTwoDecimalPlaces } from '@/lib/math';
import { format } from 'date-fns';

export default {
  name: 'AsteroidTableItem',
  components: {
    BaseButton,
  },
  props: {
    neo: {
      type: Object,
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
    velocityMeasureUnit: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      missDistanceMeasureUnitMap,
      diameterMeasureUnitMap,
    };
  },
  computed: {
    name() {
      return this.neo.name;
    },
    isPotentiallyHazardous() {
      return this.neo.isPotentiallyHazardous;
    },
    isSentryObject() {
      return this.neo.isSentryObject;
    },
    magnitude() {
      return this.neo.magnitude;
    },
    missDistance() {
      return roundTwoDecimalPlaces(
        this.neo.missDistance[this.missDistanceMeasureUnit]
      );
    },
    diameterMin() {
      return roundTwoDecimalPlaces(
        this.neo.diameter[this.diameterMeasureUnit].min
      );
    },
    diameterMax() {
      return roundTwoDecimalPlaces(
        this.neo.diameter[this.diameterMeasureUnit].max
      );
    },
    date() {
      return format(new Date(this.neo.date), 'kk:mm');
    },
  },
  methods: {
    goToNeoDetailsPage() {
      this.$router.push({
        name: 'neoDetails',
        params: {
          id: this.neo.id,
          velocityMeasureUnit: this.velocityMeasureUnit,
          missDistanceMeasureUnit: this.missDistanceMeasureUnit,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-table-item {
  display: grid;
  margin: 0.5rem;
  background-color: var(--variant-opacity-background-color);
  border-radius: 0.2rem;

  .name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--variant-opacity-background-color);
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;

    &.name-open {
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
    }

    .icon {
      padding: 0.5rem;
      color: (--secondary-icon-color);
    }
  }

  .content-container {
    display: grid;
    transition: grid-template-rows 0.3s;
  }

  .content {
    overflow: hidden;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;

    .content-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .see-more-info-button {
      width: 100%;
    }
  }

  span {
    color: var(--secondary-text-color);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: 1;
    padding: 0.5rem;
  }
}
</style>
