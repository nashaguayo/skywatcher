import { shallowMount } from '@vue/test-utils';
import FooterInfo from '@/components/common/FooterInfo.vue';

describe('FooterInfo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FooterInfo, { stubs: ['FontAwesomeIcon'] });
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
    const linksContainer = wrapper.find('.links');
    expect(linksContainer.exists()).toBeTruthy();
    const links = wrapper.findAll('fontawesomeicon-stub');
    expect(links.length).toBe(4);
  });
});
