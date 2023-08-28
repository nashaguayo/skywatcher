<template>
  <div class="hamburger-menu">
    <div v-if="open" class="hamburger-menu-container">
      <h1>Menu</h1>
    </div>
    <FontAwesomeIcon class="open-menu-icon" icon="fa-solid fa-bars" />
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

  .open-menu-icon {
    color: var(--main-icon-color);
    background-color: var(--variant-background-color);
    backdrop-filter: blur(1rem);
    border-radius: 3rem;
    padding: 0.7rem;
    margin: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    opacity: 0.7;
  }
}
</style>
