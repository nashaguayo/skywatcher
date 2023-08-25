import { shallowMount } from '@vue/test-utils';
import AsteroidsContainer from '@/components/neo/AsteroidsContainer.vue';
import * as neoHelpers from '@/helpers/neo';

jest.mock('@/components/neo/ConfigMenu.vue', () => ({
  name: 'ConfigMenu',
  template: '<div class="mock-config-menu"></div>',
}));

jest.mock('@/components/neo/AsteroidTable.vue', () => ({
  name: 'AsteroidTable',
  template: '<div class="mock-asteroid-table"></div>',
}));

jest.mock('@/helpers/neo', () => ({
  getNearEarthObjects: jest.fn(),
  sortNeos: jest.fn(),
  filterNeos: jest.fn(),
}));

jest.mock('@/lib/localStorage', () => ({
  getMissDistanceMeasureUnit: jest.fn(),
  setMissDistanceMeasureUnit: jest.fn(),
  getDiameterMeasureUnit: jest.fn(),
  setDiameterMeasureUnit: jest.fn(),
  getSortBy: jest.fn(),
  setSortBy: jest.fn(),
  getFilterBy: jest.fn(),
  setFilterBy: jest.fn(),
}));

const spyGetNearEarthObjects = jest.spyOn(neoHelpers, 'getNearEarthObjects');
const spySortNeos = jest.spyOn(neoHelpers, 'sortNeos');

describe('AsteroidsContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyGetNearEarthObjects.mockResolvedValue([{ name: 'XC', id: 1 }]);
    spySortNeos.mockResolvedValue([{ name: 'XC', id: 1 }]);
    wrapper = shallowMount(AsteroidsContainer, {
      stubs: ['ConfigMenu', 'FontAwesomeIcon', 'ErrorBoundary', 'LandingHero'],
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

  it('renders html tags correctly', () => {
    expect(wrapper.find('fontawesomeicon-stub').exists()).toBeTruthy();

    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Asteroids');

    const subtitle = wrapper.find('h3');
    expect(subtitle.exists()).toBeTruthy();
    expect(subtitle.text()).toBe('Near Earth Objects');
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('configmenu-stub').exists()).toBeFalsy();
    expect(wrapper.find('asteroidtable-stub').exists()).toBeTruthy();
    expect(spyGetNearEarthObjects).toHaveBeenCalled();
  });

  it('opens config menu when button is clicked', async () => {
    wrapper.find('fontawesomeicon-stub').vm.$emit('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('configmenu-stub').exists()).toBeTruthy();
  });
});
