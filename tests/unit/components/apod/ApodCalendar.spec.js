import { mount } from '@vue/test-utils';
import ApodCalendar from '@/components/apod/ApodCalendar.vue';
import * as dateFns from 'date-fns';

jest.mock('date-fns', () => ({
  format: jest.fn(),
  endOfMonth: jest.fn(),
}));

jest.mock('@/components/ui/BaseInput.vue', () => ({
  name: 'BaseInput',
  template: '<div class="mock-base-input"></div>',
}));

const spyFormat = jest.spyOn(dateFns, 'format');

describe('ApodCalendar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ApodCalendar, {
      propsData: {
        apods: [],
        date: '2023-08',
      },
      stubs: ['BaseInput', 'ApodCalendarSkeleton'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('renders calendar skeleton when not loaded', async () => {
    expect(wrapper.find('.apod-calendar-container').exists()).toBeTruthy();
    expect(wrapper.find('apodcalendarskeleton-stub').exists()).toBeTruthy();
    await wrapper.vm.$nextTick();
    expect(
      wrapper.find('.apod-calendar-container .ApodCalendarSkeleton').exists()
    ).toBeFalsy();
  });

  it('renders calendar when loaded', async () => {
    spyFormat.mockReturnValue(1);
    wrapper = mount(ApodCalendar, {
      data: () => ({ loaded: true }),
      propsData: {
        apods: [{ date: new Date(2023, 8, 1), url: 'some-url' }],
        date: '2023-08',
      },
      stubs: ['BaseInput', 'ApodCalendarSkeleton'],
    });
    expect(wrapper.find('.calendar').exists()).toBeTruthy();
  });

  it('emits dateChanged event when setDate is called', async () => {
    wrapper
      .findComponent({ name: 'BaseInput' })
      .vm.$emit('inputValueChanged', '2023-09');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('dateChanged')).toEqual([['2023-09-01']]);
  });
});
