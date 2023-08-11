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

#app {
}

body {
  margin: 0;
}

h1 {
  margin: 0 0 1rem;
  color: white;
  font-family: 'Zilla Slab';
}

h2 {
  margin: 0 0 1rem;
  color: white;
  font-family: 'Nanum';
}

span,
p {
  color: white;
  font-family: 'Roboto Condensed';
}
</style>
