import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

jest.mock('@/components/common/ErrorBoundary.vue', () => ({
  name: 'ErrorBoundary',
  template: '<div class="mock-error-boundary"></div>',
}));

jest.mock('@/components/common/LandingHero.vue', () => ({
  name: 'LandingHero',
  template: '<div class="mock-landing-hero"></div>',
}));

describe('HomeView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeView, {
      stubs: ['ErrorBoundary', 'LandingHero'],
    });
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
    expect(wrapper.find('errorboundary-stub').exists()).toBeTruthy();
    expect(wrapper.find('landinghero-stub').exists()).toBeTruthy();
  });

  it('does not render install button', () => {
    expect(
      wrapper.find('landinghero-stub').attributes('displayinstallbutton')
    ).toBeFalsy();
  });
});
