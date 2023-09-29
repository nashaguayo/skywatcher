<template>
  <div class="neo-block">
    <NeoBlockSkeleton v-if="!loaded" />
    <div v-else class="neo-block-container">
      <h2>Asteroids</h2>
      <FontAwesomeIcon class="icon" icon="fa-solid fa-meteor" />
      <span v-if="this.amount === 0">
        No hazardous asteroids passing through earth today. We're safe... for
        now!
      </span>
      <span v-else>
        There {{ this.amount !== 1 ? 'are' : 'is' }} {{ this.amount }} hazardous
        {{ this.amount !== 1 ? 'asteroids' : 'asteroid' }} passing through Earth
        today.
      </span>
      <BaseButton :onClickHandler="goToNeoPage">Check out more</BaseButton>
    </div>
  </div>
</template>

<script>
import NeoBlockSkeleton from '@/skeleton/home/NeoBlockSkeleton.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { getNearEarthObjects } from '@/helpers/neo';

export default {
  name: 'NeoBlock',
  components: {
    NeoBlockSkeleton,
    BaseButton,
  },
  data() {
    return {
      amount: null,
      loaded: false,
    };
  },
  async created() {
    const neos = await getNearEarthObjects(new Date());
    this.amount = neos.filter((neo) => neo.isPotentiallyHazardous).length;
    this.loaded = true;
  },
  methods: {
    goToNeoPage() {
      this.$router.push({ name: 'neo' });
    },
  },
};
</script>

<style lang="scss" scoped>
.neo-block {
  .neo-block-container {
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 19rem;
    background-color: var(--opaque-background-color);

    h2,
    span {
      text-align: center;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 3rem;
    }

    .icon {
      margin-bottom: 1rem;
      height: 4rem;
      width: 4rem;
      align-self: center;
      color: var(--main-icon-hover-color);
    }
  }
}
</style>
