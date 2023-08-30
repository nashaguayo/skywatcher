<template>
  <div class="apod-block">
    <h2 class="title">
      Astronomy Picture <br />
      of the Day
    </h2>
    <div v-if="error" class="error">
      There was some error loading today's picture. Try again later.
    </div>
    <div v-else class="content">
      <div class="image" :style="{ backgroundImage: `url(${url})` }"></div>
    </div>
  </div>
</template>

<script>
import { getTodaysAstronomyPicture } from '@/helpers/apod';

export default {
  name: 'ApodBlock',
  data() {
    return {
      url: '',
      error: false,
    };
  },
  async created() {
    const url = await getTodaysAstronomyPicture();
    if (!url) {
      this.error = true;
      return;
    }
    this.url = url;
  },
};
</script>

<style lang="scss" scoped>
.apod-block {
  background: linear-gradient(
    100deg,
    var(--secondary-background-color),
    var(--secondary-gradient-background-color)
  );
  margin: 2rem;
  padding: 1rem;
  height: 20rem;

  .title {
    text-align: center;
    color: var(--secondary-title-color);
  }

  .error {
    text-align: center;
    margin-top: 1rem;
  }

  .content {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    .image {
      height: 12rem;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      box-shadow: var(--main-box-shadow);
    }
  }
}
</style>
