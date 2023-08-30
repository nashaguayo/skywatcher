<template>
  <div class="footer-info">
    <div class="links">
      <FontAwesomeIcon
        class="icon"
        icon="fa-brands fa-square-github"
        @click="openGithubProfileInNewTab"
      />
      <FontAwesomeIcon
        class="icon"
        icon="fa-solid fa-code"
        @click="openGithubRepositoryInNewTab"
      />
      <FontAwesomeIcon
        class="icon"
        icon="fa-brands fa-linkedin"
        @click="openLinkedinProfileInNewTab"
      />
      <FontAwesomeIcon
        class="icon"
        icon="fa-solid fa-rocket"
        @click="openNasaApiUrlInNewTab"
      />
    </div>
    <div class="author">
      <span>Get more information on SkyWatcher</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInfo',
  methods: {
    openGithubProfileInNewTab() {
      window.open(process.env.VUE_APP_GITHUB_PROFILE, '_blank', 'noreferrer');
    },
    openGithubRepositoryInNewTab() {
      window.open(
        process.env.VUE_APP_GITHUB_REPOSITORY,
        '_blank',
        'noreferrer'
      );
    },
    openLinkedinProfileInNewTab() {
      window.open(process.env.VUE_APP_LINKEDIN_PROFILE, '_blank', 'noreferrer');
    },
    openNasaApiUrlInNewTab() {
      window.open(process.env.VUE_APP_NASA_API_URL, '_blank', 'noreferrer');
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-info {
  background-color: var(--variant-background-color);
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  margin-top: auto;
  height: 5rem;
  width: 100%;
  box-shadow: var(--main-box-shadow);

  .links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 3rem;

    .icon {
      color: var(--main-icon-color);
      width: 2rem;
      height: 2rem;
      align-self: center;
      justify-self: center;
    }
  }

  .author {
    text-align: center;
  }
}
</style>
