import { shallowMount } from '@vue/test-utils';
import AsteroidDetailsContainer from '@/components/neoDetails/AsteroidDetailsContainer.vue';

describe('AsteroidDetailsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AsteroidDetailsContainer, {
      mocks: {
        $route: {
          params: {
            id: 'asteroid-id',
          },
        },
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

  it('contains the "asteroid-details-container" class', () => {
    expect(wrapper.classes()).toContain('asteroid-details-container');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Asteroid Details');
  });
});
