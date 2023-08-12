import { mount } from '@vue/test-utils';
import ApodView from '@/views/ApodView.vue';

jest.mock('@/components/apod/DailyPicture.vue', () => ({
  name: 'DailyPicture',
  template: '<div class="mock-daily-picture"></div>',
}));

describe('ApodView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ApodView, { stubs: ['DailyPicture'] });
  });

  afterEach(() => {
    wrapper.destroy();
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the "home-view" class', () => {
    expect(wrapper.classes()).toContain('apod-view');
  });

  it('renders the mockeded components', () => {
    expect(wrapper.find('dailypicture-stub').exists()).toBeTruthy();
  });
});
