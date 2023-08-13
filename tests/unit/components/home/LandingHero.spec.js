import { shallowMount } from '@vue/test-utils';
import LandingHero from '@/components/home/LandingHero.vue';

jest.mock('@/components/ui/BaseSpinner', () => ({
  name: 'BaseSpinner',
  template: '<div class="mock-base-spinner"></div>',
}));

jest.mock('@/skeleton/home/LandingHeroSkeleton.vue', () => ({
  name: 'LandingHeroSkeleton',
  template: '<div class="mock-landing-hero-skeleton"></div>',
}));

const spyDocumentQuerySelector = jest
  .spyOn(document, 'querySelector')
  .mockReturnValue({});

const spyWindowGetComputedStyle = jest
  .spyOn(window, 'getComputedStyle')
  .mockReturnValue({
    backgroundImage: '',
  });

const spyMatch = jest
  .spyOn(String.prototype, 'match')
  .mockReturnValue([
    '',
    'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
  ]);

describe('LandingHero', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LandingHero, {
      data: () => ({
        loaded: true,
      }),
      stubs: ['BaseSpinner', 'LandingHeroSkeleton'],
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

  it('shows skeleton while loading', () => {
    wrapper = shallowMount(LandingHero, {
      stubs: ['BaseSpinner', 'LandingHeroSkeleton'],
    });
    const skeleton = wrapper.find('landingheroskeleton-stub');
    expect(skeleton.exists()).toBeTruthy();
  });

  it('should wait for landing hero image', async () => {
    expect(spyDocumentQuerySelector).toHaveBeenCalled();
    expect(spyWindowGetComputedStyle).toHaveBeenCalled();
    expect(spyMatch).toHaveBeenCalled();
  });

  it('loads logo', () => {
    const image = wrapper.find('img');
    expect(image.exists()).toBeTruthy();
    expect(image.attributes().src).toBe('@/assets/images/ui/logo.svg');
    expect(image.attributes().alt).toBe('SkyWatcher Logo');
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
    console.log(wrapper.html());
  });
});
