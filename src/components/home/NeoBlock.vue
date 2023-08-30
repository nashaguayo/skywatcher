<template>
  <div class="neo-block">
    <div class="neo-block-container">
      <h2>Asteroids</h2>
      <span>There are X hazardous asteroids passing through earth today.</span>
      <BaseButton>Check them out</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'NeoBlock',
  components: {
    BaseButton,
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
    background: linear-gradient(
      100deg,
      var(--variant-background-color),
      var(--variant-gradient-background-color)
    );
    box-shadow: var(--main-box-shadow);
    height: 12.5rem;

    h2,
    span {
      text-align: center;
      margin-bottom: 1rem;
    }
  }
}
</style>
