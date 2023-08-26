import { shallowMount } from '@vue/test-utils';
import InstallingView from '@/views/InstallingView.vue';

jest.mock('@/components/ui/BaseSpinner.vue', () => ({
  name: 'BaseSpinner',
  template: '<div class="mock-base-spinner"></div>',
}));

describe('InstallingView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(InstallingView, { stubs: ['BaseSpinner'] });
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

  it('contains the "installing" class', () => {
    expect(wrapper.classes()).toContain('installing-view');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Installing...');

    const spinner = wrapper.find('basespinner-stub');
    expect(spinner.exists()).toBeTruthy();
    expect(spinner.attributes('big')).toBeTruthy();
  });
});
