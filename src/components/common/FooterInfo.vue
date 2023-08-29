<template>
  <div class="footer-info">
    <h1>Footer</h1>
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
}
</style>
