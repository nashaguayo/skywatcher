<template>
  <div class="orbital-data">
    <div class="orbital-data-container">
      <h2>Orbital Data</h2>
      <div class="content-outside">
        <div class="content-inside"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrbitalData',
};
</script>

<style lang="scss" scoped>
.orbital-data {
  .orbital-data-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-outside {
      margin: 1rem 2rem;
      padding: 1rem;
      width: calc(100% - 4rem);
      background: linear-gradient(
        100deg,
        var(--secondary-background-color),
        var(--secondary-gradient-background-color)
      );
      box-shadow: var(--main-box-shadow);

      .content-inside {
        background: linear-gradient(
          100deg,
          var(--variant-background-color),
          var(--variant-gradient-background-color)
        );
        padding: 1rem;
      }
    }
  }
}
</style>
