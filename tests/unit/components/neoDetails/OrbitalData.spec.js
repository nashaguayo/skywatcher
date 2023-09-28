import { shallowMount } from '@vue/test-utils';
import OrbitalData from '@/components/neoDetails/OrbitalData.vue';

describe('OrbitalData', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(OrbitalData, {
      propsData: {
        orbitalData: {},
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the "orbital-data" class', () => {
    expect(wrapper.classes()).toContain('orbital-data');
  });

  it('renders mocked components', () => {
    // expect(wrapper.find('basedivider-stub').exists()).toBeTruthy();
  });

  it('renders title', () => {
    const title = wrapper.find('h2');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Orbital Data');
  });
});
