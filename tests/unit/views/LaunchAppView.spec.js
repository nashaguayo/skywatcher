import { shallowMount } from '@vue/test-utils';
import LaunchAppView from '@/views/LaunchAppView.vue';
import * as pwaLib from '@/lib/pwa';

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
  template: '<div class="mock-base-button"></div>',
}));

jest.mock('@/lib/pwa', () => ({
  isInstalled: jest.fn(),
}));

const spyIsInstalled = jest.spyOn(pwaLib, 'isInstalled');

describe('LaunchAppView', () => {
  let wrapper;

  beforeEach(() => {
    spyIsInstalled.mockResolvedValue(true);
    wrapper = shallowMount(LaunchAppView, {
      stubs: ['BaseButton'],
    });
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

  it('contains the "launch-app-view" class', () => {
    expect(wrapper.classes()).toContain('launch-app-view');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('SkyWatcher');

    const subtitle = wrapper.find('h3');
    expect(subtitle.exists()).toBeTruthy();
    expect(subtitle.text()).toBe('Ready to use on your phone!');
  });
});
