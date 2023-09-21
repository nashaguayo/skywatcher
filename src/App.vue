<template>
  <div id="app" :class="{ 'bottom-margin': displayFooter }">
    <HamburgerMenu v-if="displayHeader" />
    <transition
      mode="out-in"
      :name="
        $route.meta.transition && !$route.query?.noTransition
          ? $route.meta.transition
          : ''
      "
    >
      <router-view :key="$route.fullPath" />
    </transition>
    <FooterInfo v-if="displayFooter" />
  </div>
</template>

<script>
import HamburgerMenu from '@/components/common/HamburgerMenu.vue';
import FooterInfo from '@/components/common/FooterInfo.vue';

export default {
  name: 'App',
  components: {
    HamburgerMenu,
    FooterInfo,
  },
  computed: {
    displayHeader() {
      return this.$route.meta.header ?? false;
    },
    displayFooter() {
      return this.$route.meta.footer ?? false;
    },
  },
  created() {
    window.addEventListener('online', this.online);
    window.addEventListener('offline', this.offline);
  },
  beforeDestroy() {
    window.removeEventListener('online', this.online);
    window.removeEventListener('offline', this.offline);
  },
  methods: {
    online() {
      this.$router.push({ name: 'home' });
    },
    offline() {
      this.$router.push({ name: 'offline' });
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Roboto Condensed';
  src: local('Roboto Condensed'),
    url(@/assets/fonts/roboto-condensed.ttf) format('truetype');
}

@font-face {
  font-family: 'Nanum';
  src: local('Nanum'), url(@/assets/fonts/nanum-myeongjo.ttf) format('truetype');
}

@font-face {
  font-family: 'Lobster';
  src: local('Lobster'), url(@/assets/fonts/lobster.ttf) format('truetype');
}

html {
  --main-background-color: #142d3d;
  --main-gradient-background-color: #194966;

  --accent-color: #ff8800;

  --secondary-background-color: #ff8800;
  --secondary-gradient-background-color: #ffd900;

  --variant-background-color: #101416;
  --variant-gradient-background-color: #29261d;
  --variant-opacity-background-color: rgba(0, 0, 0, 0.3);

  --main-title-color: rgb(207, 207, 207);
  --variant-title-color: #ff8800;
  --main-subtitle-color: rgb(230, 230, 230);
  --main-text-color: rgb(230, 230, 230);

  --variant-subtitle-color: #ff8800;

  --secondary-text-color: #101416;
  --variant-text-color: #ff8800;

  --main-box-shadow: 0 0 0.5rem #0c0c0c;
  --bright-box-shadow: 0 0 0.5rem #ff8800;
  --bottom-box-shadow: 0 0.3rem 0.5rem #0c0c0c;

  --button-main-color: #ff8800;
  --button-gradient-main-color: #ffd900;
  --button-variant-color: #101416;
  --button-gradient-variant-color: #243035;

  --main-icon-color: rgb(207, 207, 207);
  --main-icon-hover-color: #ff8800;
  --secondary-icon-color: #101416;

  --menu-background-color: #0672b4;
  --menu-gradient-background-color: #0c89d6;

  --magnitude-border-color: #0c0c0c;
  --magnitude-background-color: rgb(29, 29, 29);
  --magnitude-0: rgb(0, 100, 0);
  --magnitude-1: rgb(82, 146, 9);
  --magnitude-2: rgb(165, 182, 10);
  --magnitude-3: rgb(255, 208, 0);
  --magnitude-4: rgb(255, 145, 0);
  --magnitude-5: rgb(163, 0, 0);
}

#app {
  position: absolute;
  min-height: 100%;
  width: 100%;
  background: linear-gradient(
    100deg,
    var(--main-background-color),
    var(--main-gradient-background-color)
  );

  &.bottom-margin {
    min-height: calc(100% - 5rem);
  }
}

body {
  margin: 0;
  padding: 0;
  accent-color: var(--accent-color);
}

* {
  box-sizing: border-box;
}

h1 {
  margin: 0;
  color: var(--main-title-color);
  font-family: 'Nanum';

  @media (min-width: $min-width-second-break) {
    font-size: 3rem;
  }

  @media (min-width: $min-width-third-break) {
    font-size: 4rem;
  }
}

h3,
h2 {
  margin: 0;
  font-family: 'Nanum';
}

h2 {
  color: var(--main-subtitle-color);

  @media (min-width: $min-width-second-break) {
    font-size: 1.8rem;
  }

  @media (min-width: $min-width-third-break) {
    font-size: 2.5rem;
  }
}

h3 {
  color: var(--variant-subtitle-color);

  @media (min-width: $min-width-second-break) {
    font-size: 1.5rem;
  }

  @media (min-width: $min-width-third-break) {
    font-size: 1.8rem;
  }
}

a,
span,
p {
  margin: 0;
  color: var(--main-text-color);
  font-family: 'Roboto Condensed';
  line-height: 1.3rem;

  @media (min-width: $min-width-second-break) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  @media (min-width: $min-width-third-break) {
    font-size: 1.5rem;
    line-height: 1.7rem;
  }
}

.slide-from-home-enter-active,
.slide-from-home-leave-active {
  transition: transform 0.3s;
}

.slide-from-home-enter {
  transform: translateX(100%);
}

.slide-from-home-leave-to {
  transform: translateX(-100%);
}
</style>
