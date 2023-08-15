<template>
  <button
    class="base-button"
    :class="{ 'button-animation-active': wasClicked }"
    :disabled="disabled"
    @click="wasClicked = true"
    @animationend="handleAndFinish"
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
    handleAndFinish() {
      this.wasClicked = false;
      this.onClickHandler();
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  border: 0;
  color: var(--secondary-text-color);
  font-family: 'Roboto Condensed';
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 1rem;
  background: linear-gradient(
    100deg,
    var(--button-main-color),
    var(--button-gradient-main-color)
  );
  box-shadow: var(--main-box-shadow);
  cursor: pointer;

  @media (min-width: $min-width-second-break) {
    font-size: 2rem;
  }
}

.button-animation-active {
  animation: button-animation 0.3s;
}

@keyframes button-animation {
  0% {
    background: linear-gradient(
      100deg,
      var(--button-main-color),
      var(--button-gradient-main-color)
    );
  }

  50% {
    color: var(--variant-text-color);
    background: linear-gradient(
      100deg,
      var(--button-variant-color),
      var(--button-gradient-variant-color)
    );
  }

  100% {
    background: linear-gradient(
      100deg,
      var(--button-main-color),
      var(--button-gradient-main-color)
    );
  }
}
</style>
