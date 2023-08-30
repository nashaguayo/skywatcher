import { shallowMount } from '@vue/test-utils';
import DesktopGuardianView from '@/views/DesktopGuardianView.vue';

describe('DesktopGuardianView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DesktopGuardianView);
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

  it('contains the "desktop-guardian-view" class', () => {
    expect(wrapper.classes()).toContain('desktop-guardian-view');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Desktop Guardian');
  });
});
