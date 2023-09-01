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
    const container = wrapper.find('.hamburger-menu-container');
    expect(container.exists()).toBeFalsy();
    expect(wrapper.find('fontawesomeicon-stub').exists()).toBeTruthy();
  });

  it('opens menu when clicking icon', () => {
    wrapper = shallowMount(HamburgerMenu, {
      data: () => ({ open: true }),
      stubs: ['FontAwesomeIcon'],
      mocks: {
        $router: {
          push: jest.fn(),
          currentRoute: {
            name: 'home',
          },
        },
        $route: {
          name: 'someRouteName',
        },
      },
    });
    const container = wrapper.find('.hamburger-menu-container');
    expect(container.exists()).toBeTruthy();
  });
});
