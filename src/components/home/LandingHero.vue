<template>
  <div class="landing-hero">
    <div class="tunned-logo">
      <img src="@/assets/images/ui/logo.svg" />
      <h1>SkyWatcher</h1>
    </div>
    <h2>The universe at the tip of your fingers</h2>
    <div class="description">
      <p>This webapp was built by a universe fan.</p>
      <p>
        It is fueled by
        <a :href="nasaApisUrl" target="_blank"> NASA's APIs. </a>
      </p>
    </div>
    <p>More to come soon...</p>
  </div>
</template>

<script>
export default {
  name: 'LandingHero',
  data() {
    return {
      nasaApisUrl: process.env.VUE_APP_NASA_APIS_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.landing-hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: $min-width-second-break) {
    gap: 2rem;
  }

  @media (min-width: $min-width-third-break) {
    gap: 3rem;
  }

  .tunned-logo {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-left: -2.5rem;

    @media (min-width: $min-width-second-break) {
      margin-top: 5rem;
      margin-left: -3.5rem;
    }

    @media (min-width: $min-width-third-break) {
      margin-left: -5rem;
    }

    @media (min-width: $min-width-fourth-break) {
      margin-top: 8rem;
    }

    img {
      -webkit-mask-image: linear-gradient(90deg, black, 40%, transparent);
      filter: invert(1);
      height: 4rem;

      @media (min-width: $min-width-second-break) {
        height: 5rem;
      }

      @media (min-width: $min-width-third-break) {
        height: 7.5rem;
      }
    }

    h1 {
      -webkit-mask-image: linear-gradient(90deg, transparent, 0.1%, black);
      margin-left: -1.6rem;
      font-size: 3.5rem;

      @media (min-width: $min-width-second-break) {
        font-size: 5rem;
        margin-left: -1.8rem;
      }

      @media (min-width: $min-width-third-break) {
        margin-left: -3rem;
        font-size: 8rem;
      }
    }
  }

  h2 {
    @media (min-width: $min-width-second-break) {
      font-size: 2rem;
    }

    @media (min-width: $min-width-third-break) {
      font-size: 3rem;
    }
  }

  p {
    @media (min-width: $min-width-second-break) {
      font-size: 1.5rem;
    }

    @media (min-width: $min-width-third-break) {
      font-size: 1.7rem;
    }
  }
}
</style>
