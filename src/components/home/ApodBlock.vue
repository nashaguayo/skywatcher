<template>
  <div class="apod-block">
    <ApodBlockSkeleton v-if="!loaded" />
    <div v-show="loaded" class="apod-block-container">
      <h2 class="title">
        Astronomy Picture <br />
        of the Day
      </h2>
      <div v-if="error" class="error">
        There was some error loading today's picture. Try again later.
      </div>
      <div v-else class="content">
        <div
          v-if="mediaType === 'image'"
          class="image"
          :style="{ backgroundImage: `url(${url})` }"
          @load="loaded = true"
        ></div>
        <LazyYoutube
          v-else-if="mediaType === 'video'"
          :src="url"
          class="video"
        />
        <BaseButton
          :variant="true"
          class="learn-more-button"
          :onClickHandler="goToApodPage"
        >
          Learn More!
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import ApodBlockSkeleton from '@/skeleton/home/ApodBlockSkeleton.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { getTodaysAstronomyPicture } from '@/helpers/apod';

export default {
  name: 'ApodBlock',
  components: {
    ApodBlockSkeleton,
    BaseButton,
  },
  data() {
    return {
      url: '',
      mediaType: '',
      error: true,
      loaded: false,
    };
  },
  watch: {
    url(url) {
      if (this.mediaType === 'video') {
        this.loaded = true;
        return;
      }
      const image = new Image();
      image.src = url;
      image.onload = () => {
        this.loaded = true;
      };
      image.onerror = () => {
        this.loaded = true;
        this.error = true;
      };
    },
  },
  async created() {
    const { url, mediaType } = await getTodaysAstronomyPicture();
    if (!url) {
      return;
    }
    this.mediaType = mediaType;
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
  .apod-block-container {
    background: linear-gradient(
      100deg,
      var(--secondary-background-color),
      var(--secondary-gradient-background-color)
    );
    margin: 1rem;
    padding: 1rem;
    height: 24rem;
    box-shadow: var(--main-box-shadow);
    border-radius: 0.5rem;

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
        border-radius: 0.4rem;
      }

      .video {
        height: 12rem;
      }

      .learn-more-button {
        margin-top: 1rem;
      }
    }
  }
}
</style>
