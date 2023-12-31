import { shallowMount } from '@vue/test-utils';
import AsteroidMeasureUnits from '@/components/neo/AsteroidMeasureUnits.vue';

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
  template: '<div class="mock-base-button"></div>',
}));

describe('AsteroidMeasureUnits', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AsteroidMeasureUnits, {
      stubs: ['BaseButton'],
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

  it('contains the "asteroid-measure-units" class', () => {
    expect(wrapper.classes()).toContain('asteroid-measure-units');
  });

  it('renders the mocked components', () => {
    const baseButtons = wrapper.findAll('basebutton-stub');
    expect(baseButtons.length).toBe(8);
    expect(baseButtons.at(0).text()).toBe('Astronomical');
    expect(baseButtons.at(1).text()).toBe('Kilometers');
    expect(baseButtons.at(2).text()).toBe('Lunar');
    expect(baseButtons.at(3).text()).toBe('Miles');
    expect(baseButtons.at(4).text()).toBe('Kilometers');
    expect(baseButtons.at(5).text()).toBe('Miles');
    expect(baseButtons.at(6).text()).toBe('Meters');
    expect(baseButtons.at(7).text()).toBe('Feet');
  });
});
