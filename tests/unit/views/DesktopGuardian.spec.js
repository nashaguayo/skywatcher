import { shallowMount } from '@vue/test-utils';
import DesktopGuardian from '@/views/DesktopGuardian.vue';

describe('DesktopGuardian', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DesktopGuardian);
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

  it('contains the "desktop-guardian" class', () => {
    expect(wrapper.classes()).toContain('desktop-guardian');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Desktop Guardian');
  });
});
