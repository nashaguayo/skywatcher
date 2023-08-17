import { shallowMount } from '@vue/test-utils';
import AsteroidsContainer from '@/components/neo/AsteroidsContainer.vue';
import * as neoHelpers from '@/helpers/neo';

jest.mock('@/components/neo/AsteroidFilters.vue', () => ({
  name: 'AsteroidFilters',
  template: '<div class="mock-asteroid-filters"></div>',
}));

jest.mock('@/components/neo/AsteroidTable.vue', () => ({
  name: 'AsteroidTable',
  template: '<div class="mock-asteroid-table"></div>',
}));

jest.mock('@/helpers/neo', () => ({
  getNearEarthObjects: jest.fn(),
}));

const spyGetNearEarthObjects = jest.spyOn(neoHelpers, 'getNearEarthObjects');

describe('AsteroidsContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyGetNearEarthObjects.mockResolvedValue([{ name: 'XC', id: 1 }]);
    wrapper = shallowMount(AsteroidsContainer, {
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

  it('contains the "asteroids-container" class', () => {
    expect(wrapper.classes()).toContain('asteroids-container');
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('asteroidfilters-stub').exists()).toBeTruthy();
    expect(wrapper.find('asteroidtable-stub').exists()).toBeTruthy();
    expect(spyGetNearEarthObjects).toHaveBeenCalled();
  });
});
