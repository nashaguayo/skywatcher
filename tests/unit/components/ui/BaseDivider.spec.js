import { shallowMount } from '@vue/test-utils';
import BaseDivider from '@/components/ui/BaseDivider.vue';

describe('BaseDivider.vue', () => {
  it('renders a divider', () => {
    const wrapper = shallowMount(BaseDivider);
    expect(wrapper.find('.base-divider').exists()).toBeTruthy();
  });

  it('renders variant divider', () => {
    const wrapper = shallowMount(BaseDivider, { propsData: { variant: true } });
    expect(wrapper.find('.variant').exists()).toBeTruthy();
  });
});
