<template>
  <div class="hamburger-menu">
    <transition name="slide-from-right">
      <div v-if="open" class="hamburger-menu-container">
        <h1>Menu</h1>
      </div>
    </transition>
    <transition name="translate-right">
      <FontAwesomeIcon
        v-if="!open"
        class="open-menu-icon"
        icon="fa-solid fa-bars"
        @click="open = true"
      />
    </transition>
    <transition name="translate-left">
      <FontAwesomeIcon
        v-if="open"
        class="close-menu-icon"
        icon="fa-solid fa-chevron-left"
        @click="open = false"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.hamburger-menu {
  position: absolute;
  z-index: 1000;
  display: flex;
  width: 100vw;
  height: 100vh;

  .hamburger-menu-container {
    width: 100%;
    height: 100%;
    background-color: red;
    box-shadow: var(--main-box-shadow);
  }

  .open-menu-icon {
    position: absolute;
    color: var(--main-icon-color);
    background-color: var(--variant-background-color);
    border-radius: 3rem;
    padding: 0.7rem;
    margin: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.7;
  }

  .close-menu-icon {
    position: absolute;
    color: var(--main-icon-color);
    background-color: var(--variant-background-color);
    border-radius: 3rem;
    padding: 0.7rem;
    margin: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.7;
    right: 0;
  }
}

.slide-from-right-leave-active,
.slide-from-right-enter-active {
  transition: transform 0.5s;
}

.slide-from-right-enter,
.slide-from-right-leave-to {
  transform: translateX(-100%);
}

.translate-right-enter-active,
.translate-right-leave-active {
  transition: transform 0.5s;
}

.translate-right-enter {
  transform: translateX(-150%);
}

.translate-right-leave-to {
  transform: translateX(100vw);
}

.translate-left-enter-active,
.translate-left-leave-active {
  transition: transform 0.5s;
}

.translate-left-enter,
.translate-left-leave-to {
  transform: translateX(150%);
}

.translate-right-enter-active,
.translate-left-enter-active {
  transition-delay: 0.5s;
}
</style>
