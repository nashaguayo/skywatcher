import { shallowMount } from '@vue/test-utils';
import ApodBlock from '@/components/home/ApodBlock.vue';

describe('ApodBlock', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ApodBlock);
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

  it('contains the "apod-block" class', () => {
    expect(wrapper.classes()).toContain('apod-block');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h2');
    expect(title.exists()).toBeTruthy();
  });
});
