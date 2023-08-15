import { shallowMount } from '@vue/test-utils';
import BaseButton from '@/components/ui/BaseButton';

describe('BaseButton', () => {
  let wrapper;
  let onClickHandler;

  beforeEach(() => {
    onClickHandler = jest.fn();
    wrapper = shallowMount(BaseButton, {
      propsData: {
        onClickHandler,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders the default slot content', () => {
    const buttonText = 'Click Me';
    wrapper = shallowMount(BaseButton, {
      slots: {
        default: buttonText,
      },
      propsData: {
        onClickHandler,
      },
    });
    expect(wrapper.text()).toBe(buttonText);
  });

  it('disables the button when "disabled" prop is true', async () => {
    expect(wrapper.attributes('disabled')).toBeFalsy();
    await wrapper.setProps({ disabled: true });
    expect(wrapper.attributes('disabled')).toBe('disabled');
  });

  it('renders the default slot content', () => {
    const buttonText = 'Click Me';
    wrapper = shallowMount(BaseButton, {
      slots: {
        default: buttonText,
      },
      propsData: {
        onClickHandler,
      },
    });
    expect(wrapper.text()).toBe(buttonText);
  });

  it('sets "wasClicked" to false after the button animation ends', async () => {
    wrapper.setData({ wasClicked: true });
    await wrapper.trigger('animationend');
    expect(wrapper.vm.wasClicked).toBe(false);
  });

  it('has correct default props', () => {
    expect(wrapper.props('disabled')).toBe(false);
  });

  it('renders the default slot content with default text', () => {
    const defaultButtonText = 'Click Me';
    expect(wrapper.text()).toBe(defaultButtonText);
  });

  it('renders the default slot content with custom text', () => {
    const customButtonText = 'Custom Text';
    wrapper = shallowMount(BaseButton, {
      slots: {
        default: customButtonText,
      },
      propsData: {
        onClickHandler,
      },
    });
    expect(wrapper.text()).toBe(customButtonText);
  });
});
