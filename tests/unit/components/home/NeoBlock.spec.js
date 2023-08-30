import { shallowMount } from '@vue/test-utils';
import NeoBlock from '@/components/home/NeoBlock.vue';
import * as neoHelpers from '@/helpers/neo';

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
}));

jest.mock('@/helpers/neo', () => ({
  getNearEarthObjects: jest.fn(),
}));

const spyGetNearEarthObjects = jest.spyOn(neoHelpers, 'getNearEarthObjects');

describe('NeoBlock', () => {
  let wrapper;

  beforeEach(() => {
    spyGetNearEarthObjects.mockResolvedValue([
      { isPotentiallyHazardous: true },
    ]);
    wrapper = shallowMount(NeoBlock, { stubs: ['BaseButton'] });
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

  it('contains the "neo-block" class', () => {
    expect(wrapper.classes()).toContain('neo-block');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h2');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Asteroids');

    const button = wrapper.find('basebutton-stub');
    expect(button.exists()).toBeTruthy();
    expect(button.text()).toBe('Check out more');
  });
});
