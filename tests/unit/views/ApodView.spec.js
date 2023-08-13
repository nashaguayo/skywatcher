import { mount } from '@vue/test-utils';
import ApodView from '@/views/ApodView.vue';

jest.mock('@/components/apod/ApodContainer.vue', () => ({
  name: 'ApodContainer',
  template: '<div class="mock-apod-container"></div>',
}));

describe('ApodView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ApodView, { stubs: ['ApodContainer'] });
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

  it('contains the "apod-view" class', () => {
    expect(wrapper.classes()).toContain('apod-view');
  });

  it('renders the mocked components', () => {
    expect(wrapper.find('apodcontainer-stub').exists()).toBeTruthy();
  });
});
