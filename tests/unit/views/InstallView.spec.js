import { shallowMount } from '@vue/test-utils';
import InstallView from '@/views/InstallView.vue';

jest.mock('@/components/common/ErrorBoundary.vue', () => ({
  name: 'ErrorBoundary',
  template: '<div class="mock-error-boundary"></div>',
}));

jest.mock('@/components/home/LandingHero.vue', () => ({
  name: 'LandingHero',
  template: '<div class="mock-landing-hero"></div>',
}));

describe('InstallView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(InstallView, {
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

  it('contains the "install-view" class', () => {
    expect(wrapper.classes()).toContain('install-view');
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('errorboundary-stub').exists()).toBeTruthy();
    expect(wrapper.find('landinghero-stub').exists()).toBeTruthy();
  });
});
