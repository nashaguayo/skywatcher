import { shallowMount } from '@vue/test-utils';
import OrbitalData from '@/components/neoDetails/OrbitalData.vue';

describe('OrbitalData', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(OrbitalData, {
      propsData: {
        loaded: true,
        orbitalData: {
          orbit: {
            class: {
              type: 'orbitClassType',
              description: 'orbitClassDescription',
              range: 'orbitClassRange',
            },
            determinationDate: 'orbitDeterminationDate',
          },
        },
      },
      stubs: ['OrbitalDataSkeleton'],
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

    const classDataKeys = wrapper.findAll('.key');
    expect(classDataKeys.length).toBe(3);
    expect(classDataKeys.at(0).text()).toBe('Class orbitClassType');
    expect(classDataKeys.at(1).text()).toBe('Range');
    expect(classDataKeys.at(2).text()).toBe('Class Determination Date');

    const classDataValues = wrapper.findAll('.value');
    expect(classDataValues.length).toBe(3);
    expect(classDataValues.at(0).text()).toBe('orbitClassDescription');
    expect(classDataValues.at(1).text()).toBe('orbitClassRange');
    expect(classDataValues.at(2).text()).toBe('orbitDeterminationDate');
  });
});
