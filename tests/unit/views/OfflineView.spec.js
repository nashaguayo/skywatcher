import { shallowMount } from '@vue/test-utils';
import OfflineView from '@/views/OfflineView.vue';

describe('OfflineView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(OfflineView);
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

  it('contains the "offline-view" class', () => {
    expect(wrapper.classes()).toContain('offline-view');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Offline');

    const subtitle = wrapper.find('h3');
    expect(subtitle.exists()).toBeTruthy();
    expect(subtitle.text()).toBe('Unable to establish network connection');
  });
});
