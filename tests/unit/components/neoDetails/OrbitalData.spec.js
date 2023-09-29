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
            uncertainty: 'orbitUncertainty',
            period: 'orbitPeriod',
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
    expect(classDataKeys.length).toBe(5);
    expect(classDataKeys.at(0).text()).toBe('Class orbitClassType');
    expect(classDataKeys.at(1).text()).toBe('Range');
    expect(classDataKeys.at(2).text()).toBe('Orbit Determination Date');
    expect(classDataKeys.at(3).text()).toBe('Orbit Uncertainty');
    expect(classDataKeys.at(4).text()).toBe('Orbit Period');

    const classDataValues = wrapper.findAll('.value');
    expect(classDataValues.length).toBe(5);
    expect(classDataValues.at(0).text()).toBe('orbitClassDescription');
    expect(classDataValues.at(1).text()).toBe('orbitClassRange');
    expect(classDataValues.at(2).text()).toBe('orbitDeterminationDate');
    expect(classDataValues.at(3).text()).toBe('orbitUncertainty');
    expect(classDataValues.at(4).text()).toBe('orbitPeriod');
  });
});
