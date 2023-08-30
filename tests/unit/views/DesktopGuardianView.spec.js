import { shallowMount } from '@vue/test-utils';
import DesktopGuardianView from '@/views/DesktopGuardianView.vue';

jest.mock('@/components/common/LandingHero.vue', () => ({
  name: 'LandingHero',
}));

describe('DesktopGuardianView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DesktopGuardianView, { stubs: ['LandingHero'] });
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
    const landingHero = wrapper.find('landinghero-stub');
    expect(landingHero.exists()).toBeTruthy();

    const disclaimer = wrapper.find('.disclaimer');
    expect(disclaimer.exists()).toBeTruthy();
    expect(disclaimer.text()).toBe(
      'SkyWatcher is meant for mobile use only. Download the App!'
    );
  });
});
