<template>
  <div class="home-view">
    <img src="@/assets/images/ui/logo.svg" />
    <h1>SkyWatcher</h1>
    <h2>The universe at the tip of your fingers</h2>
    <span
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nostrum?
      Rerum voluptatum doloremque ex! Sunt dolorum sapiente dicta. Possimus ut
      deleniti voluptas ad quisquam odit quas natus minima doloribus
      ipsam?</span
    >
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss" scoped>
.home-view {
  background-image: url('@/assets/images/landing/hero.jpg');
  background-size: cover;
  background-position: center;
}
</style>
