import { shallowMount } from '@vue/test-utils';
import FooterInfoLink from '@/components/common/FooterInfoLink.vue';

describe('FooterInfoLink', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FooterInfoLink, {
      propsData: {
        icon: 'icon',
        handler: jest.fn(),
      },
      stubs: ['FontAwesomeIcon'],
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

  it('contains the "footer-info-link" class', () => {
    expect(wrapper.classes()).toContain('footer-info-link');
  });

  it('renders everything correctly', () => {
    const link = wrapper.find('fontawesomeicon-stub');
    expect(link.exists()).toBeTruthy();
    expect(link.attributes('icon')).toBe('icon');
  });
});
