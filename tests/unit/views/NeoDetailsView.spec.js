import { shallowMount } from '@vue/test-utils';
import NeoDetailsView from '@/views/NeoDetailsView.vue';

jest.mock('@/components/common/ErrorBoundary.vue', () => ({
  name: 'ErrorBoundary',
  template: '<div class="mock-error-boundary"></div>',
}));

jest.mock('@/components/neoDetails/AsteroidDetailsContainer.vue', () => ({
  name: 'AsteroidDetailsContainer',
  template: '<div class="mock-asteroid-details-container"></div>',
}));

describe('NeoDetailsView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NeoDetailsView, {
      stubs: ['ErrorBoundary', 'AsteroidDetailsContainer'],
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

  it('contains the "neo-details-view" class', () => {
    expect(wrapper.classes()).toContain('neo-details-view');
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('errorboundary-stub').exists()).toBeTruthy();
    expect(wrapper.find('asteroiddetailscontainer-stub').exists()).toBeTruthy();
  });
});
