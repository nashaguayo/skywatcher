<template>
  <FontAwesomeIcon
    class="base-icon"
    :class="{ variant }"
    :icon="icon"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    variant: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-icon {
  color: var(--main-icon-color);
  background-color: var(--variant-background-color);
  box-shadow: var(--main-box-shadow);
  border-radius: 3rem;
  padding: 0.7rem;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.7;
  pointer-events: all;

  &.variant {
    background-color: var(--button-variant-color);
    padding: 0.5rem;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
  }
}
</style>
