import { shallowMount } from '@vue/test-utils';
import LandingHero from '@/components/common/LandingHero.vue';

jest.mock('@/skeleton/common/LandingHeroSkeleton.vue', () => ({
  name: 'LandingHeroSkeleton',
  template: '<div class="mock-landing-hero-skeleton"></div>',
}));

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
  template: '<div class="mock-base-button"></div>',
}));

jest.mock('@/components/ui/BaseSpinner.vue', () => ({
  name: 'BaseSpinner',
  template: '<div class="mock-base-spinner"></div>',
}));

describe('LandingHero', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LandingHero, {
      data: () => ({
        loaded: true,
      }),
      stubs: ['LandingHeroSkeleton', 'BaseButton', 'BaseSpinner'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the "landing-hero" class', () => {
    expect(wrapper.classes()).toContain('landing-hero');
  });

  it('loads title', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('SkyWatcher');
  });

  it('loads subtitle', () => {
    const subtitle = wrapper.find('h2');
    expect(subtitle.exists()).toBeTruthy();
    expect(subtitle.text()).toBe('The universe at the tip of your fingers');
  });

  it('loads descriptions', () => {
    const descriptions = wrapper.findAll('p');
    expect(descriptions.at(0).text()).toBe(
      'This webapp was built by a universe fan.'
    );
  });

  it('loads button when sending props data', () => {
    wrapper = shallowMount(LandingHero, {
      data: () => ({
        loaded: true,
      }),
      propsData: { displayInstallButton: true, loadedPrompt: true },
      stubs: ['LandingHeroSkeleton', 'BaseButton', 'BaseSpinner'],
    });
    const installButton = wrapper.find('basebutton-stub');
    expect(installButton.exists()).toBeTruthy();
    expect(installButton.text()).toBe('Install App');
  });

  it('does not load button when no prop is passed down', () => {
    const installButton = wrapper.find('basebutton-stub');
    expect(installButton.exists()).toBeFalsy();
  });

  it('displays spinner when user is installing app', () => {
    wrapper = shallowMount(LandingHero, {
      data: () => ({
        loaded: true,
      }),
      propsData: {
        displayInstallButton: true,
        installing: true,
        loadedPrompt: true,
      },
      stubs: ['LandingHeroSkeleton', 'BaseButton', 'BaseSpinner'],
    });
    expect(wrapper.find('basebutton-stub').exists()).toBeFalsy();
    expect(wrapper.find('basespinner-stub').exists()).toBeTruthy();
  });
});
