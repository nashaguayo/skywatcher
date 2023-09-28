import { shallowMount } from '@vue/test-utils';
import AsteroidTable from '@/components/neo/AsteroidTable.vue';

jest.mock('@/components/ui/BaseInput.vue', () => ({
  name: 'BaseInput',
  template: '<div class="mock-base-input"></div>',
}));

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
      stubs: ['BaseInput', 'AsteroidTableSkeleton', 'AsteroidTableItem'],
      propsData: {
        neos: [{ name: 'XC', id: 1 }],
        missDistanceMeasureUnit: 'astronomical',
        diameterMeasureUnit: 'kilometers',
        velocityMeasureUnit: 'kilometers per hour',
        date: '2023-08-01',
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
        date: '2023-08-01',
        missDistanceMeasureUnit: 'astronomical',
        diameterMeasureUnit: 'kilometers',
        velocityMeasureUnit: 'kilometers per hour',
        loaded: false,
      },
    });
    expect(wrapper.find('asteroidtableskeleton-stub').exists()).toBeTruthy();
    expect(wrapper.find('.no-results').exists()).toBeFalsy();
    expect(wrapper.find('asteroidtableitem-stub').exists()).toBeFalsy();
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('baseinput-stub').exists()).toBeTruthy();
    expect(wrapper.find('asteroidtableskeleton-stub').exists()).toBeFalsy();
    expect(wrapper.find('asteroidtableitem-stub').exists()).toBeTruthy();
  });

  it('emits newDate event when inputValueChanged is called', async () => {
    const newDate = '2023-08-17';
    await wrapper.vm.newDate(newDate);
    expect(wrapper.emitted('newDate')).toBeTruthy();
    expect(wrapper.emitted('newDate')[0]).toEqual([newDate]);
  });

  it('displays no result message when no results are found', () => {
    wrapper = shallowMount(AsteroidTable, {
      stubs: ['BaseInput', 'AsteroidTableSkeleton', 'AsteroidTableItem'],
      propsData: {
        neos: [],
        missDistanceMeasureUnit: 'astronomical',
        diameterMeasureUnit: 'kilometers',
        velocityMeasureUnit: 'kilometers per hour',
        date: '2023-08-01',
        loaded: true,
      },
    });
    expect(wrapper.find('.no-results').exists()).toBeTruthy();
    expect(wrapper.find('.no-results').text()).toBe(
      'No asteroids found for today.'
    );
  });
});
