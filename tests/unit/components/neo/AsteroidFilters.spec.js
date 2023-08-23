import { shallowMount } from '@vue/test-utils';
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
  template: '<div class="mock-base-button"></div>',
}));

describe('AsteroidFilters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AsteroidFilters, {
      stubs: ['BaseButton'],
      propsData: {
        filterBy: '',
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

  it('renders title', () => {
    const title = wrapper.find('h3');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Filter By');
  });

  it('renders the mocked components', () => {
    const baseButtons = wrapper.findAll('basebutton-stub');
    expect(baseButtons.length).toBe(3);
    expect(baseButtons.at(0).text()).toBe('No Filters');
    expect(baseButtons.at(1).text()).toBe('Sentry Objects');
    expect(baseButtons.at(2).text()).toBe('Hazardous Objects');
  });
});
