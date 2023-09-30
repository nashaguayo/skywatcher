<template>
  <FontAwesomeIcon class="base-icon" :icon="icon" @click="$emit('click')" />
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      required: true,
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
}
</style>
