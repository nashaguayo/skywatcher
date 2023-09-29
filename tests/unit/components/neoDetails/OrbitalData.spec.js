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
          aphelionDistance: 'aphelionDistance',
          ascendingNodeLongitude: 'ascendingNodeLongitude',
          dataArc: 'dataArc',
          eccentricity: 'eccentricity',
          equinox: 'equinox',
          inclination: 'inclination',
          jupiterTisserandInvariant: 'jupiterTisserandInvariant',
          minimumOrbitIntersection: 'minimumOrbitIntersection',
          observationsUsed: 'observationsUsed',
          semiMajorAxis: 'semiMajorAxis',
          mean: {
            anomaly: 'meanAnomaly',
            motion: 'meanMotion',
          },
          perihelion: {
            argument: 'perihelionArgument',
            distance: 'perihelionDistance',
            time: 'perihelionTime',
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

  it('renders title', () => {
    const title = wrapper.find('.orbital-data-title');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Orbital Data');
  });

  it('renders information', () => {
    const classDataKeys = wrapper.findAll('.key');
    expect(classDataKeys.length).toBe(20);
    expect(classDataKeys.at(0).text()).toBe('Class orbitClassType');
    expect(classDataKeys.at(1).text()).toBe('Range');
    expect(classDataKeys.at(2).text()).toBe('Orbit Determination Date');
    expect(classDataKeys.at(3).text()).toBe('Orbit Uncertainty');
    expect(classDataKeys.at(4).text()).toBe('Orbit Period');
    expect(classDataKeys.at(5).text()).toBe('Aphelion Distance');
    expect(classDataKeys.at(6).text()).toBe('Asc. Node Longitude');
    expect(classDataKeys.at(7).text()).toBe('Data Arc');
    expect(classDataKeys.at(8).text()).toBe('Eccentricity');
    expect(classDataKeys.at(9).text()).toBe('Equinox');
    expect(classDataKeys.at(10).text()).toBe('Inclination');
    expect(classDataKeys.at(11).text()).toBe('Jupiter Tisserant Inv.');
    expect(classDataKeys.at(12).text()).toBe('Min. Intersection');
    expect(classDataKeys.at(13).text()).toBe('Observations Used');
    expect(classDataKeys.at(14).text()).toBe('Semi Major Axis');
    expect(classDataKeys.at(15).text()).toBe('Mean Anomaly');
    expect(classDataKeys.at(16).text()).toBe('Mean Motion');
    expect(classDataKeys.at(17).text()).toBe('Perihelion Argument');
    expect(classDataKeys.at(18).text()).toBe('Perihelion Distance');
    expect(classDataKeys.at(19).text()).toBe('Perihelion Time');

    const classDataValues = wrapper.findAll('.value');
    expect(classDataValues.length).toBe(20);
    expect(classDataValues.at(0).text()).toBe('orbitClassDescription');
    expect(classDataValues.at(1).text()).toBe('orbitClassRange');
    expect(classDataValues.at(2).text()).toBe('orbitDeterminationDate');
    expect(classDataValues.at(3).text()).toBe('orbitUncertainty');
    expect(classDataValues.at(4).text()).toBe('orbitPeriod');
    expect(classDataValues.at(5).text()).toBe('aphelionDistance');
    expect(classDataValues.at(6).text()).toBe('ascendingNodeLongitude');
    expect(classDataValues.at(7).text()).toBe('dataArc days');
    expect(classDataValues.at(8).text()).toBe('eccentricity');
    expect(classDataValues.at(9).text()).toBe('equinox');
    expect(classDataValues.at(10).text()).toBe('inclination');
    expect(classDataValues.at(11).text()).toBe('jupiterTisserandInvariant');
    expect(classDataValues.at(12).text()).toBe('minimumOrbitIntersection');
    expect(classDataValues.at(13).text()).toBe('observationsUsed');
    expect(classDataValues.at(14).text()).toBe('semiMajorAxis');
    expect(classDataValues.at(15).text()).toBe('meanAnomaly');
    expect(classDataValues.at(16).text()).toBe('meanMotion');
    expect(classDataValues.at(17).text()).toBe('perihelionArgument');
    expect(classDataValues.at(18).text()).toBe('perihelionDistance');
    expect(classDataValues.at(19).text()).toBe('perihelionTime');
  });
});