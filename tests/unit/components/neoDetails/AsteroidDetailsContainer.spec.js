import { shallowMount } from '@vue/test-utils';
import AsteroidDetailsContainer from '@/components/neoDetails/AsteroidDetailsContainer.vue';
import * as neoHelpers from '@/helpers/neo';

jest.mock('@/components/neoDetails/BasicInfoHeader.vue', () => ({
  name: 'BasicInfoHeader',
}));

jest.mock('@/components/neoDetails/CloseApproach.vue', () => ({
  name: 'CloseApproach',
}));

jest.mock('@/components/neoDetails/WhatIfImpact.vue', () => ({
  name: 'WhatIfImpact',
}));

jest.mock('@/components/neoDetails/OrbitalData.vue', () => ({
  name: 'OrbitalData',
}));

jest.mock('@/helpers/neo', () => ({
  getNearEarthObject: jest.fn(),
}));

const spyGetNearEarthObject = jest.spyOn(neoHelpers, 'getNearEarthObject');

describe('AsteroidDetailsContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyGetNearEarthObject.mockResolvedValue({
      designation: 'Asteroid Name',
      magnitude: 20,
      damage: {
        megatonKineticE: 25,
        megatonAirburst: 30,
        craterSize: 35,
        description: 'some description',
        category: 2,
      },
    });
    wrapper = shallowMount(AsteroidDetailsContainer, {
      mocks: {
        $route: {
          params: {
            id: 'asteroid-id',
          },
        },
      },
      stubs: [
        'BasicInfoHeader',
        'CloseApproach',
        'WhatIfImpact',
        'OrbitalData',
      ],
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

  it('contains the "asteroid-details-container" class', () => {
    expect(wrapper.classes()).toContain('asteroid-details-container');
  });

  it('renders stubs correctly', () => {
    expect(wrapper.find('basicinfoheader-stub').exists()).toBeTruthy();
    expect(wrapper.find('closeapproach-stub').exists()).toBeTruthy();
    expect(wrapper.find('whatifimpact-stub').exists()).toBeTruthy();
    expect(wrapper.find('orbitaldata-stub').exists()).toBeTruthy();
  });
});
