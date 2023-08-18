import { mount } from '@vue/test-utils';
import BaseRadio from '@/components/ui/BaseRadio.vue';

describe('BaseRadio', () => {
  it('renders correctly', () => {
    const wrapper = mount(BaseRadio, {
      propsData: {
        name: 'radioGroup',
        id: 'radioOption1',
        value: 'option1',
        label: 'Option 1',
        model: 'some-model',
      },
    });

    expect(wrapper.find('label').text()).toBe('Option 1');
    expect(wrapper.find('input').attributes('value')).toBe('option1');
  });
});
