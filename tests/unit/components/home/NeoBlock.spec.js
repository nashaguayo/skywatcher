import { shallowMount } from '@vue/test-utils';
import NeoBlock from '@/components/home/NeoBlock.vue';

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
}));

describe('NeoBlock', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NeoBlock, { stubs: ['BaseButton'] });
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

  it('contains the "neo-block" class', () => {
    expect(wrapper.classes()).toContain('neo-block');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h2');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Asteroids');

    const button = wrapper.find('basebutton-stub');
    expect(button.exists()).toBeTruthy();
    expect(button.text()).toBe('Check them out');
  });
});
