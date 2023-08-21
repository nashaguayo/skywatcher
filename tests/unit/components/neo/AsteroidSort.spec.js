import { shallowMount } from '@vue/test-utils';
import AsteroidSort from '@/components/neo/AsteroidSort.vue';

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
  template: '<div class="mock-base-button"></div>',
}));

describe('AsteroidSort', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AsteroidSort, {
      stubs: ['BaseButton'],
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

  it('contains the "asteroid-sort" class', () => {
    expect(wrapper.classes()).toContain('asteroid-sort');
  });

  it('renders the mocked components', () => {
    const baseButtons = wrapper.findAll('basebutton-stub');
    expect(baseButtons.length).toBe(5);
    expect(baseButtons.at(0).text()).toBe('Name');
    expect(baseButtons.at(1).text()).toBe('Miss Distance');
    expect(baseButtons.at(2).text()).toBe('Minimum Diameter');
    expect(baseButtons.at(3).text()).toBe('Maximum Diameter');
    expect(baseButtons.at(4).text()).toBe('Hour');
  });
});
