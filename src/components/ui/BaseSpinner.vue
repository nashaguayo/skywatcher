<template functional>
  <span class="base-spinner" :class="{ big: props.big }"></span>
</template>

<script>
export default {
  name: 'BaseSpinner',
  props: {
    big: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-spinner {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 0.188rem solid;
  border-color: var(--main-icon-color) var(--main-icon-color) transparent
    transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &.big {
    width: 6rem;
    height: 6rem;
    border: 0.4rem solid;
    border-color: var(--main-icon-color) var(--main-icon-color) transparent
      transparent;
  }
}

.base-spinner::after,
.base-spinner::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 0.188rem solid;
  border-color: transparent transparent var(--accent-color) var(--accent-color);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

.base-spinner::before {
  width: 2rem;
  height: 2rem;
  border-color: var(--main-icon-color) var(--main-icon-color) transparent
    transparent;
  animation: rotation 1.5s linear infinite;
}

.big::after,
.big::before {
  width: 5rem;
  height: 5rem;
  border: 0.4rem solid;
  border-color: transparent transparent var(--accent-color) var(--accent-color);
}

.big::before {
  width: 4rem;
  height: 4rem;
  border-color: var(--main-icon-color) var(--main-icon-color) transparent
    transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
