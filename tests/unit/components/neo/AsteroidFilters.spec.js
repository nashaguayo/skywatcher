import { shallowMount } from '@vue/test-utils';
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';

jest.mock('@/components/ui/BaseInput.vue', () => ({
  name: 'BaseInput',
  template: '<div class="mock-base-input"></div>',
}));

jest.mock('@/components/ui/BaseRadio.vue', () => ({
  name: 'BaseRadio',
  template: '<div class="mock-base-radio"></div>',
}));

describe('AsteroidFilters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AsteroidFilters, {
      stubs: ['BaseInput', 'BaseRadio'],
      propsData: {
        date: '2023-08-01',
        missDistanceMeasureUnit: 'astronomical',
        diameterMeasureUnit: 'kilometers',
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

  it('contains the "asteroid-filters" class', () => {
    expect(wrapper.classes()).toContain('asteroid-filters');
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('baseinput-stub').exists()).toBeTruthy();
    expect(wrapper.find('baseinput-stub').attributes('type')).toBe('date');
    expect(wrapper.find('baseinput-stub').attributes('name')).toBe('date');
    expect(wrapper.findAll('baseradio-stub').length).toBe(8);
  });

  it('emits newDate event when inputValueChanged is called', async () => {
    const newDate = '2023-08-17';
    await wrapper.vm.newDate(newDate);
    expect(wrapper.emitted('newDate')).toBeTruthy();
    expect(wrapper.emitted('newDate')[0]).toEqual([newDate]);
  });

  it('emits newMissDistanceMeasureUnit event when inputValueChanged is called', async () => {
    const newMissDistanceMeasureUnit = 'kilometers';
    await wrapper.vm.newMissDistanceMeasureUnit(newMissDistanceMeasureUnit);
    expect(wrapper.emitted('newMissDistanceMeasureUnit')).toBeTruthy();
    expect(wrapper.emitted('newMissDistanceMeasureUnit')[0]).toEqual([
      newMissDistanceMeasureUnit,
    ]);
  });

  it('emits newDiameterMeasureUnit event when inputValueChanged is called', async () => {
    const newDiameterMeasureUnit = 'meters';
    await wrapper.vm.newDiameterMeasureUnit(newDiameterMeasureUnit);
    expect(wrapper.emitted('newDiameterMeasureUnit')).toBeTruthy();
    expect(wrapper.emitted('newDiameterMeasureUnit')[0]).toEqual([
      newDiameterMeasureUnit,
    ]);
  });
});
