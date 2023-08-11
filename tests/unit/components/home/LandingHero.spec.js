import { mount } from '@vue/test-utils';
import LandingHero from '@/components/home/LandingHero.vue';

describe('LandingHero', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LandingHero);
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
  });
});
