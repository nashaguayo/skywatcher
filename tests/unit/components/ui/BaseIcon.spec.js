import { shallowMount } from '@vue/test-utils';
import BaseIcon from '@/components/ui/BaseIcon.vue';

describe('BaseIcon.vue', () => {
  it('renders an icon', () => {
    const wrapper = shallowMount(BaseIcon, {
      propsData: { icon: 'icon' },
      stubs: ['FontAwesomeIcon'],
    });
    expect(wrapper.find('.base-icon').exists()).toBeTruthy();
    expect(wrapper.attributes('icon')).toBe('icon');
  });
});
