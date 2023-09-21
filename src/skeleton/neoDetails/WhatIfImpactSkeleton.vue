<template>
  <div class="what-if-impact-skeleton">
    <div class="what-if-block">
      <h3>Loading...</h3>
      <BaseSpinner />
    </div>
    <span class="copyright-disclaimer">
      * Categories according to
      <a
        href="https://www.nextbigfuture.com/2013/11/asteroid-size-danger-chart.html"
        target="_blank"
        ref="noreferrer"
      >
        this article
      </a>
      <br />
      by Brian Wang.
    </span>
  </div>
</template>

<script>
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

export default {
  name: 'WhatIfImpactSkeleton',
  components: {
    BaseSpinner,
  },
};
</script>

<style lang="scss" scoped>
.what-if-impact-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem 2rem;

  .what-if-block {
    background: linear-gradient(
      100deg,
      var(--variant-background-color),
      var(--variant-gradient-background-color)
    );
    height: 25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    box-shadow: var(--main-box-shadow);

    h3 {
      margin-bottom: 5rem;
    }
  }

  .copyright-disclaimer {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 2rem;

    a {
      display: inline-block;
    }
  }
}
</style>
