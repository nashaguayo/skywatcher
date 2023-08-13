<template>
  <div class="daily-picture-skeleton">
    <h1 class="loading-title">Loading</h1>
    <h3>Astronomy Picture</h3>
    <FontAwesomeIcon
      icon="fa-solid fa-circle-notch"
      spin
      style="color: rgb(207, 207, 207)"
      size="3x"
    />
  </div>
</template>

<script>
export default {
  name: 'DailyPictureSkeleton',
};
</script>

<style lang="scss" scoped>
.daily-picture-skeleton {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
