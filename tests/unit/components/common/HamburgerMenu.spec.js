import { shallowMount } from '@vue/test-utils';
import HamburgerMenu from '@/components/common/HamburgerMenu.vue';

describe('HamburgerMenu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HamburgerMenu, { stubs: ['FontAwesomeIcon'] });
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

  it('contains the "hamburger-menu" class', () => {
    expect(wrapper.classes()).toContain('hamburger-menu');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeFalsy();

    expect(wrapper.find('fontawesomeicon-stub').exists()).toBeTruthy();
  });
});