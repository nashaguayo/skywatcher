<template>
  <div class="hamburger-menu">
    <transition name="slide-from-right">
      <div v-if="open" class="hamburger-menu-container">
        <h1 class="title">SkyWatcher</h1>
        <BaseButton
          class="navigation-link"
          :small="true"
          :onClickHandler="goToHomePage"
          :disabled="$router.currentRoute.name === 'home'"
          :variant="$router.currentRoute.name !== 'home'"
        >
          Home
        </BaseButton>
        <BaseButton
          class="navigation-link"
          :small="true"
          :onClickHandler="goToApodPage"
          :disabled="$router.currentRoute.name === 'apod'"
          :variant="$router.currentRoute.name !== 'apod'"
        >
          Astronomy Picture of the Day
        </BaseButton>
        <BaseButton
          class="navigation-link"
          :small="true"
          :onClickHandler="goToNeoPage"
          :disabled="$router.currentRoute.name === 'neo'"
          :variant="$router.currentRoute.name !== 'neo'"
        >
          Near Earth Objects
        </BaseButton>
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
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'HamburgerMenu',
  components: {
    BaseButton,
  },
  data() {
    return {
      open: false,
    };
  },
  created() {
    window.addEventListener('popstate', this.popState);
  },
  beforeDestroy() {
    window.removeEventListener('popstate', this.popState);
  },
  methods: {
    popState() {
      this.open = false;
    },
    goToHomePage() {
      this.open = false;
      this.$router.push({ name: 'home' });
    },
    goToApodPage() {
      this.open = false;
      this.$router.push({ name: 'apod' });
    },
    goToNeoPage() {
      this.open = false;
      this.$router.push({ name: 'neo' });
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger-menu {
  position: absolute;
  z-index: 50;
  display: flex;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  .hamburger-menu-container {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      100deg,
      var(--menu-background-color),
      var(--menu-gradient-background-color)
    );
    box-shadow: var(--main-box-shadow);
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    .title {
      color: var(--variant-title-color);
      font-family: 'Lobster';
      margin-bottom: 2rem;
    }

    .navigation-link {
      margin-bottom: 0.3rem;
    }
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
    pointer-events: all;
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
    pointer-events: all;
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
