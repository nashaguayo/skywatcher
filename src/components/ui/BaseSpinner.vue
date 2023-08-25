<template functional>
  <span class="base-spinner"></span>
</template>

<script>
export default {
  name: 'BaseSpinner',
};
</script>

<style lang="scss" scoped>
.base-spinner {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: var(--main-icon-color) var(--main-icon-color) transparent
    transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
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
  border: 3px solid;
  border-color: transparent transparent var(--accent-color) var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

.base-spinner::before {
  width: 32px;
  height: 32px;
  border-color: var(--main-icon-color) var(--main-icon-color) transparent
    transparent;
  animation: rotation 1.5s linear infinite;
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
