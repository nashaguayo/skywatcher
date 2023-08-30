import { shallowMount } from '@vue/test-utils';
import NeoBlock from '@/components/home/NeoBlock.vue';

describe('NeoBlock', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NeoBlock);
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
    expect(title.text()).toBe('Near Earth Objects');
  });
});
