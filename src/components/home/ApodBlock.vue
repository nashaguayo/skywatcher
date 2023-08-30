<template>
  <div class="apod-block">
    <h2 class="title">
      Astronomy Picture <br />
      of the Day
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ApodBlock',
};
</script>

<style lang="scss" scoped>
.apod-block {
  background-color: var(--secondary-background-color);
  margin: 2rem;
  padding: 1rem;

  .title {
    text-align: center;
    color: var(--secondary-title-color);
  }
}
</style>
