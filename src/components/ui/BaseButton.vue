<template>
  <button
    class="base-button"
    :class="{ 'button-animation-active': wasClicked }"
    :disabled="disabled"
    @click="handleAndAnimate"
    @animationend="wasClicked = false"
  >
    <slot>Click Me</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    onClickHandler: {
      type: Function,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      wasClicked: false,
    };
  },
  methods: {
    handleAndAnimate() {
      this.wasClicked = true;
      this.onClickHandler();
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
}

.button-animation-active {
  animation: button-animation 0.3s;
}

@keyframes button-animation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
}
</style>
