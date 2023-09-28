<template functional>
  <hr class="base-divider" :class="{ variant: props.variant }" />
</template>

<script>
export default {
  name: 'BaseDivider',
  props: {
    variant: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-divider {
  width: 100%;
  border: 0.1rem solid var(--variant-background-color);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--main-box-shadow);

  &.variant {
    border: 0.1rem solid var(--secondary-background-color);
  }
}
</style>
