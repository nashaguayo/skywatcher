import { shallowMount } from '@vue/test-utils';
import OrbitalData from '@/components/neoDetails/OrbitalData.vue';

describe('OrbitalData', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(OrbitalData, {
      propsData: {
        orbitalData: {
          orbit: {
            class: {
              type: 'orbitClassType',
              description: 'orbitClassDescription',
              range: 'orbitClassRange',
            },
          },
        },
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

  it('renders class information', () => {
    expect(wrapper.find('.content-inside').exists()).toBeTruthy();

    const classDataKeys = wrapper.findAll('.content-inside .key');
    expect(classDataKeys.length).toBe(2);
    expect(classDataKeys.at(0).text()).toBe('Class orbitClassType');
    expect(classDataKeys.at(1).text()).toBe('Range');

    const classDataValues = wrapper.findAll('.content-inside .value');
    expect(classDataValues.length).toBe(2);
    expect(classDataValues.at(0).text()).toBe('orbitClassDescription');
    expect(classDataValues.at(1).text()).toBe('orbitClassRange');
  });
});
