<template>
  <div class="footer-info">
    <div class="links">
      <FontAwesomeIcon class="icon" icon="fa-brands fa-square-github" />
      <FontAwesomeIcon class="icon" icon="fa-solid fa-code" />
      <FontAwesomeIcon class="icon" icon="fa-brands fa-linkedin" />
      <FontAwesomeIcon class="icon" icon="fa-solid fa-rocket" />
    </div>
    <div class="author">
      <span>Get more information on SkyWatcher</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInfo',
};
</script>

<style lang="scss" scoped>
.footer-info {
  background-color: var(--variant-background-color);
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  margin-top: auto;
  height: 5rem;
  width: 100%;
  box-shadow: var(--main-box-shadow);

  .links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 3rem;

    .icon {
      color: var(--main-icon-color);
      width: 2rem;
      height: 2rem;
      align-self: center;
      justify-self: center;
    }
  }

  .author {
    text-align: center;
  }
}
</style>
