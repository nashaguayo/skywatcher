<template>
  <div class="orbital-data">
    <div class="orbital-data-container">
      <div class="content-outside">
        <div
          class="content-inside"
          v-if="orbitalData && orbitalData.orbit && orbitalData.orbit.class"
        >
          <p class="item value">
            {{ orbitalData.orbit.class.description }}
          </p>
          <p class="item key">Class {{ orbitalData.orbit.class.type }}</p>
          <p class="item value">{{ orbitalData.orbit.class.range }}</p>
          <p class="item key">Range</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrbitalData',
  props: {
    orbitalData: {
      type: Object,
      required: true,
    },
  },
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
      padding: 1.5rem;
      width: calc(100% - 4rem);
      background: linear-gradient(
        100deg,
        var(--secondary-background-color),
        var(--secondary-gradient-background-color)
      );
      box-shadow: var(--main-box-shadow);

      .content-inside {
        display: flex;
        flex-direction: column;
        background: linear-gradient(
          100deg,
          var(--variant-background-color),
          var(--variant-gradient-background-color)
        );
        box-shadow: var(--main-box-shadow);
        padding: 1rem;
        justify-content: center;
        height: 20rem;

        .item {
          text-align: center;
          margin: 1rem 0 0;

          &.key {
            font-size: 2rem;
            margin: 0 0 1.5rem;
          }
        }
      }
    }
  }
}
</style>
