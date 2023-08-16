import { shallowMount } from '@vue/test-utils';
import NeoView from '@/views/NeoView.vue';

jest.mock('@/components/common/ErrorBoundary.vue', () => ({
  name: 'ErrorBoundary',
  template: '<div class="mock-error-boundary"></div>',
}));

jest.mock('@/components/neo/AsteroidsContainer.vue', () => ({
  name: 'AsteroidsContainer',
  template: '<div class="mock-asteroids-container"></div>',
}));

describe('ApodVNeoViewiew', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NeoView, {
      stubs: ['ErrorBoundary', 'AsteroidsContainer'],
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

  it('contains the "neo-view" class', () => {
    expect(wrapper.classes()).toContain('neo-view');
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('errorboundary-stub').exists()).toBeTruthy();
    expect(wrapper.find('asteroidscontainer-stub').exists()).toBeTruthy();
  });
});
