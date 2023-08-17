<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

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
  font-family: 'Zilla Slab';
  src: local('Zilla Slab'),
    url(@/assets/fonts/zilla-slab.ttf) format('truetype');
}

html {
  --main-background-color: #142d3d;
  --main-gradient-background-color: #194966;

  --secondary-background-color: #ff8800;
  --secondary-gradient-background-color: #ffd900;

  --variant-background-color: #101416;
  --variant-gradient-background-color: #29261d;
  --variant-opacity-background-color: rgba(0, 0, 0, 0.3);

  --main-title-color: rgb(207, 207, 207);
  --main-subtitle-color: rgb(230, 230, 230);
  --main-text-color: rgb(230, 230, 230);

  --variant-subtitle-color: #ff8800;

  --secondary-text-color: #101416;
  --variant-text-color: #ff8800;

  --main-box-shadow: 0 0 0.5rem #0c0c0c;
  --bright-box-shadow: 0 0 0.5rem #ff8800;

  --button-main-color: #ff8800;
  --button-gradient-main-color: #ffd900;
  --button-variant-color: #209cee;
  --button-gradient-variant-color: #6bb3e2;
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
}

body {
  margin: 0;
  padding: 0;
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
</style>
