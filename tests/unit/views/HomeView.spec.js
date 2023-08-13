import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

jest.mock('@/components/home/LandingHero.vue', () => ({
  name: 'LandingHero',
  template: '<div class="mock-landing-hero"></div>',
}));

describe('HomeView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HomeView, { stubs: ['LandingHero'] });
  });

  afterEach(() => {
    wrapper.destroy();
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the "home-view" class', () => {
    expect(wrapper.classes()).toContain('home-view');
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('landinghero-stub').exists()).toBeTruthy();
  });
});
