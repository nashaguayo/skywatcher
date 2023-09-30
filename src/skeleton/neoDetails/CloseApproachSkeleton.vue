<template functional>
  <div class="close-approach-skeleton">
    <h2>Close Approach Dates</h2>
    <div class="measure-units">
      <h3 class="measure-units-title">Measure Units</h3>
      <hr class="base-divider" />
      <p class="measure-unit">The measure unit for miss distance <br />is...</p>
      <p class="measure-unit">The measure unit for velocity <br />is...</p>
    </div>
    <div class="table">
      <div class="row header" :class="{ 'header-shadow': displayShadow }">
        <span class="header-item">Date</span>
        <span class="header-item">Hour</span>
        <span class="header-item">Orbiting</span>
        <span class="header-item">Distance</span>
        <span class="header-item">Velocity</span>
      </div>
      <div class="content">
        <div v-for="n in 6" :key="n" class="row info">
          <span v-for="n in 5" :key="n">-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloseApproachSkeleton',
};
</script>

<style lang="scss" scoped>
.close-approach-skeleton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  h2 {
    text-align: center;
  }

  .measure-units {
    margin: 1.5rem 2rem 0.7rem;
    padding-bottom: 1rem;
    background: linear-gradient(
      100deg,
      var(--variant-background-color),
      var(--variant-gradient-background-color)
    );
    box-shadow: var(--main-box-shadow);
    border-radius: 1rem;

    .measure-units-title,
    .measure-unit {
      text-align: center;
      margin-top: 1rem;
    }
  }

  .base-divider {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    border: 0.1rem solid var(--secondary-background-color);
  }

  .table {
    margin-top: 1rem;
    background: linear-gradient(
      100deg,
      var(--secondary-background-color),
      var(--secondary-gradient-background-color)
    );
    box-shadow: var(--main-box-shadow);

    .content {
      max-height: 14.3rem;
      padding-bottom: 1rem;
    }

    .header {
      padding: 1rem 0;
      transition: box-shadow 0.3s;

      .header-item {
        font-size: 1rem;
        text-shadow: var(--main-text-shadow);
      }
    }

    .header-shadow {
      box-shadow: var(--bottom-box-shadow);
    }

    .info {
      background-color: rgba(0, 0, 0, 0.3);
      margin-bottom: 0.5rem;
      padding: 0.3rem 0;
    }

    .row {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
      justify-items: center;

      span {
        color: var(--secondary-text-color);
        font-size: 0.8rem;
      }
    }
  }
}
</style>
