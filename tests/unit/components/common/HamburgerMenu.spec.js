import { shallowMount } from '@vue/test-utils';
import HamburgerMenu from '@/components/common/HamburgerMenu.vue';

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
}));

jest.mock('@/components/ui/BaseDivider.vue', () => ({
  name: 'BaseDivider',
}));

jest.mock('@/components/ui/BaseIcon.vue', () => ({
  name: 'BaseIcon',
}));

describe('HamburgerMenu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HamburgerMenu, {
      stubs: ['BaseIcon', 'BaseButton', 'BaseDivider'],
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

  it('contains the "hamburger-menu" class', () => {
    expect(wrapper.classes()).toContain('hamburger-menu');
  });

  it('renders everything correctly', () => {
    const container = wrapper.find('.hamburger-menu-container');
    expect(container.exists()).toBeFalsy();
    expect(wrapper.find('baseicon-stub').exists()).toBeTruthy();
  });

  it('opens menu when clicking icon', () => {
    wrapper = shallowMount(HamburgerMenu, {
      data: () => ({ open: true }),
      stubs: ['FontAwesomeIcon', 'BaseButton'],
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

  it('loads all links', () => {
    wrapper = shallowMount(HamburgerMenu, {
      data: () => ({ open: true }),
      stubs: ['FontAwesomeIcon', 'BaseButton'],
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
    const buttons = wrapper.findAll('basebutton-stub');
    expect(buttons.length).toBe(7);
  });
});
