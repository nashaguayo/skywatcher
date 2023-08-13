import { shallowMount } from '@vue/test-utils';
import BaseSpinner from '@/components/ui/BaseSpinner.vue';

describe('BaseSpinner.vue', () => {
  it('renders a spinning FontAwesomeIcon with specified properties', () => {
    const wrapper = shallowMount(BaseSpinner, {
      stubs: ['FontAwesomeIcon'],
    });
    const fontAwesomeIcon = wrapper.find('fontawesomeicon-stub');
    expect(fontAwesomeIcon.exists()).toBeTruthy();
    expect(fontAwesomeIcon.attributes('icon')).toBe('fa-solid fa-circle-notch');
  });
});
