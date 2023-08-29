import { shallowMount } from '@vue/test-utils';
import FooterInfo from '@/components/common/FooterInfo.vue';

describe('FooterInfo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FooterInfo);
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

  it('contains the "footer-info" class', () => {
    expect(wrapper.classes()).toContain('footer-info');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Footer');
  });
});
