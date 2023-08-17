import { shallowMount } from '@vue/test-utils';
import AsteroidFilters from '@/components/neo/AsteroidFilters.vue';

jest.mock('@/components/ui/BaseInput.vue', () => ({
  name: 'BaseInput',
  template: '<div class="mock-base-input"></div>',
}));

describe('AsteroidFilters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AsteroidFilters, {
      stubs: ['BaseInput'],
      propsData: {
        date: '2023-08-01',
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
  });
});
