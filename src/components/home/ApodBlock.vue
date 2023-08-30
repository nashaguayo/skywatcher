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
      <BaseButton
        :variant="true"
        class="learn-more-button"
        :onClickHandler="goToApodPage"
      >
        Learn More!
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';
import { getTodaysAstronomyPicture } from '@/helpers/apod';

export default {
  name: 'ApodBlock',
  components: {
    BaseButton,
  },
  data() {
    return {
      url: '',
      error: true,
    };
  },
  async created() {
    const url = await getTodaysAstronomyPicture();
    if (!url) {
      return;
    }
    this.url = url;
    this.error = false;
  },
  methods: {
    goToApodPage() {
      this.$router.push({ name: 'apod' });
    },
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
  height: 24rem;

  .title {
    text-align: center;
    color: var(--secondary-title-color);
  }

  .error {
    text-align: center;
    margin-top: 7rem;
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1rem;

    .image {
      height: 12rem;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      box-shadow: var(--main-box-shadow);
    }

    .learn-more-button {
      margin-top: 1rem;
    }
  }
}
</style>
