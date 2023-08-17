import { shallowMount } from '@vue/test-utils';
import AsteroidTable from '@/components/neo/AsteroidTable.vue';

jest.mock('@/skeleton/neo/AsteroidTableSkeleton.vue', () => ({
  name: 'AsteroidTableSkeleton',
  template: '<div class="mock-asteroid-table-skeleton"></div>',
}));

jest.mock('@/components/neo/AsteroidTableItem.vue', () => ({
  name: 'AsteroidTableItem',
  template: '<div class="mock-asteroid-table-item"></div>',
}));

describe('AsteroidTable', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AsteroidTable, {
      stubs: ['AsteroidTableSkeleton', 'AsteroidTableItem'],
      propsData: {
        neos: [{ name: 'XC', id: 1 }],
        missDistanceMeasureUnit: 'astronomical',
        diameterMeasureUnit: 'kilometers',
        loaded: true,
      },
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

  it('contains the "asteroid-table" class', () => {
    expect(wrapper.classes()).toContain('asteroid-table');
  });

  it('renders skeleton when loading', () => {
    wrapper = shallowMount(AsteroidTable, {
      stubs: ['AsteroidTableSkeleton', 'AsteroidTableItem'],
      propsData: {
        neos: [],
        missDistanceMeasureUnit: 'astronomical',
        diameterMeasureUnit: 'kilometers',
        loaded: false,
      },
    });
    expect(wrapper.find('asteroidtableskeleton-stub').exists()).toBeTruthy();
    expect(wrapper.find('asteroidtableitem-stub').exists()).toBeFalsy();
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('asteroidtableskeleton-stub').exists()).toBeFalsy();
    expect(wrapper.find('asteroidtableitem-stub').exists()).toBeTruthy();
  });
});
