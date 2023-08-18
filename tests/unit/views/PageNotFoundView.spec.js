import { shallowMount } from '@vue/test-utils';
import PageNotFoundView from '@/views/PageNotFoundView.vue';

describe('PageNotFoundView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PageNotFoundView);
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

  it('contains the "page-not-found-view" class', () => {
    expect(wrapper.classes()).toContain('page-not-found-view');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('404 Error');

    const subtitle = wrapper.find('h3');
    expect(subtitle.exists()).toBeTruthy();
    expect(subtitle.text()).toBe('Page Not Found');
  });
});
