<template>
  <div class="landing-hero">
    <div class="landing-hero-container">
      <transition name="skywatcher" appear>
        <div class="tunned-logo">
          <img src="@/assets/images/ui/logo.svg" />
          <h1>SkyWatcher</h1>
        </div>
      </transition>
      <transition name="skywatcher-delayed" appear>
        <h2>The universe at the tip of your fingers</h2>
      </transition>
      <div class="description">
        <transition name="flip" appear>
          <p>This webapp was built by a universe fan.</p>
        </transition>
        <transition name="flip" appear>
          <p>
            It is fueled by
            <a :href="nasaApisUrl" target="_blank"> NASA's APIs. </a>
          </p>
        </transition>
      </div>
      <transition name="flip" appear>
        <p>More to come soon...</p>
      </transition>
    </div>
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
  background-image: url('@/assets/images/landing/hero.jpg');
  background-size: cover;
  background-position: center;
  padding: 2rem;
  padding-left: 3.5rem;
  height: 100%;

  @media (min-width: $min-width-first-break) {
    padding-left: 4rem;
  }

  @media (min-width: $min-width-second-break) {
    padding-left: 6rem;
  }

  @media (min-width: $min-width-third-break) {
    padding-left: 10rem;
  }

  @media (min-width: $min-width-fourth-break) {
    padding-left: 14rem;
  }

  @media (min-width: $min-width-fifth-break) {
    padding-left: 20rem;
  }

  @media (min-width: $min-width-sixth-break) {
    padding-left: 28rem;
  }

  .landing-hero-container {
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
      margin-top: 1rem;
      margin-left: -2rem;

      @media (min-width: $min-width-first-break) {
        margin-left: -2.3rem;
      }

      @media (min-width: $min-width-second-break) {
        margin-top: 2rem;
        margin-left: -2.5rem;
      }

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
        height: 3rem;

        @media (min-width: $min-width-first-break) {
          height: 3.5em;
        }

        @media (min-width: $min-width-second-break) {
          height: 4rem;
        }

        @media (min-width: $min-width-second-break) {
          height: 5rem;
        }

        @media (min-width: $min-width-third-break) {
          height: 7.5rem;
        }
      }

      h1 {
        -webkit-mask-image: linear-gradient(90deg, transparent, 0.1%, black);
        margin-left: -1rem;
        font-size: 2.5rem;

        @media (min-width: $min-width-first-break) {
          margin-left: -1.3rem;
          font-size: 3.5rem;
        }
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
}

@keyframes bounce-less-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: skew(10deg);
  }
}

.skywatcher-delayed-enter-active,
.skywatcher-enter-active {
  transition: opacity 1s, transform 1s ease-in-out;
}

.skywatcher-delayed-enter-active {
  transition-delay: 1s;
}

.skywatcher-delayed-enter,
.skywatcher-enter {
  opacity: 0;
  transform: skew(30deg) translateX(-100%);
}

.flip-enter-active {
  transition: transform 0.5s ease-in-out;
  transition-delay: 2s;
}

.flip-enter {
  transform: scaleY(0);
}
</style>
