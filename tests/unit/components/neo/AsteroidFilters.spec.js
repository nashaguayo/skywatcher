import { shallowMount } from '@vue/test-utils';
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';

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
    const baseRadios = wrapper.findAll('baseradio-stub');
    expect(baseRadios.length).toBe(8);
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
