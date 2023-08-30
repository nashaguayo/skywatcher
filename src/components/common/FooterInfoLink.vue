<template>
  <FontAwesomeIcon
    class="footer-info-link"
    :class="{ active: wasClicked }"
    :icon="icon"
    @click="wasClicked = true"
    @animationend="endAnimationAndHandle"
  />
</template>

<script>
export default {
  name: 'FooterInfoLink',
  props: {
    icon: {
      type: String,
      required: true,
    },
    handler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      wasClicked: false,
    };
  },
  methods: {
    endAnimationAndHandle() {
      this.wasClicked = false;
      this.handler();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-info-link {
  color: var(--main-icon-color);
  width: 2rem;
  height: 2rem;
  align-self: center;
  justify-self: center;
  transition: color 0.5s;
}

.active {
  animation: orange-flash 0.5s;
}

@keyframes orange-flash {
  50% {
    color: var(--accent-color);
    transform: scale(1.1);
  }
}
</style>
