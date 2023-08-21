import { shallowMount } from '@vue/test-utils';
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
  template: '<div class="mock-base-button"></div>',
}));

jest.mock('@/components/ui/BaseRadio.vue', () => ({
  name: 'BaseRadio',
  template: '<div class="mock-base-radio"></div>',
}));

describe('AsteroidFilters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AsteroidFilters, {
      stubs: ['BaseButton', 'BaseRadio'],
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
    expect(baseRadios.length).toBe(4);

    const baseButtons = wrapper.findAll('basebutton-stub');
    expect(baseButtons.length).toBe(4);
    expect(baseButtons.at(0).text()).toBe('Astronomical');
    expect(baseButtons.at(1).text()).toBe('Kilometers');
    expect(baseButtons.at(2).text()).toBe('Lunar');
    expect(baseButtons.at(3).text()).toBe('Miles');
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
