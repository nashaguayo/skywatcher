import { shallowMount } from '@vue/test-utils';
import LandingHero from '@/components/home/LandingHero.vue';

jest.mock('@/skeleton/home/LandingHeroSkeleton.vue', () => ({
  name: 'LandingHeroSkeleton',
  template: '<div class="mock-landing-hero-skeleton"></div>',
}));

describe('LandingHero', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LandingHero, {
      data: () => ({
        loaded: true,
      }),
      stubs: ['LandingHeroSkeleton'],
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
    expect(descriptions.at(1).text()).toContain('It is fueled by');
    expect(descriptions.at(1).text()).toContain("NASA's APIs.");
    expect(descriptions.at(2).text()).toContain('More to come soon...');
  });
});
