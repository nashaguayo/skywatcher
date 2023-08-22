import { shallowMount } from '@vue/test-utils';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

describe('BaseSpinner.vue', () => {
  it('renders a spinning loader', () => {
    const wrapper = shallowMount(BaseSpinner);
    expect(wrapper.find('.base-spinner').exists()).toBeTruthy();
  });
});
