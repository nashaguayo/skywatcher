<template>
  <div class="tunned-logo">
    <img src="@/assets/images/ui/logo.svg" />
    <h1>SkyWatcher</h1>
  </div>
</template>

<script>
export default {
  name: 'TunnedLogo',
};
</script>

<style lang="scss" scoped>
.tunned-logo {
  display: flex;
  align-items: center;

  img {
    -webkit-mask-image: linear-gradient(90deg, black, 40%, transparent);
    filter: invert(1);
    height: 2.5rem;
  }

  h1 {
    -webkit-mask-image: linear-gradient(90deg, transparent, 0.1%, black);
    margin-left: -0.8rem;
    font-size: 2.5rem;
  }
}
</style>
