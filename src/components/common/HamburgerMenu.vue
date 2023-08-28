<template>
  <div class="hamburger-menu">
    <transition name="slide-from-right">
      <div v-if="open" class="hamburger-menu-container">
        <h1>Menu</h1>
      </div>
    </transition>
    <transition name="translate">
      <FontAwesomeIcon
        :key="!open"
        class="open-menu-icon"
        :icon="`fa-solid ${!open ? 'fa-bars' : 'fa-chevron-left'}`"
        @click="open = !open"
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
    width: calc(100% - 4.9rem);
    height: 100%;
    background-color: red;
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

.slide-from-right-enter-active {
  transition: transform 0.5s;
}

.slide-from-right-enter,
.slide-from-right-leave-to {
  transform: translateX(-100%);
}

.translate-enter-active,
.translate-leave-active {
  transition: transform 0.5s;
}

.translate-enter,
.translate-leave-to {
  transform: translateX(calc(100vw - 4.9rem));
}
</style>
