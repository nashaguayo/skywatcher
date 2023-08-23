import { shallowMount } from '@vue/test-utils';
import ConfigMenu from '@/components/neo/ConfigMenu.vue';

jest.mock('@/components/neo/AsteroidFilters.vue', () => ({
  name: 'AsteroidFilters',
  template: '<div class="mock-asteroid-filters"></div>',
}));

jest.mock('@/components/neo/AsteroidMeasureUnits.vue', () => ({
  name: 'AsteroidMeasureUnits',
  template: '<div class="mock-asteroid-measure-units"></div>',
}));

describe('ConfigMenu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ConfigMenu, {
      propsData: {
        missDistanceMeasureUnit: 'astronomical',
        diameterMeasureUnit: 'kilometers',
        sortBy: 'name',
        filterBy: '',
      },
      stubs: ['FontAwesomeIcon', 'AsteroidFilters', 'AsteroidMeasureUnits'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the "config-menu" class', () => {
    expect(wrapper.classes()).toContain('config-menu');
  });

  it('renders mocked components', () => {
    expect(wrapper.find('asteroidfilters-stub').exists()).toBeTruthy();
    expect(wrapper.find('asteroidmeasureunits-stub').exists()).toBeTruthy();
  });

  it('renders the close button', () => {
    const closeButton = wrapper.find('.icon');
    expect(closeButton.exists()).toBeTruthy();
  });

  it('emits "closeTapped" event when close button is clicked', async () => {
    const closeButton = wrapper.find('.icon');
    closeButton.vm.$emit('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('closeTapped')).toBeTruthy();
  });

  it('renders the configuration title', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Configuration');
  });
});
