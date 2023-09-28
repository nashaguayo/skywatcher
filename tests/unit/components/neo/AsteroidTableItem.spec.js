import { mount } from '@vue/test-utils';
import AsteroidTableItem from '@/components/neo/AsteroidTableItem.vue';

jest.mock('date-fns', () => ({
  format: jest.fn(
    (date, formatStr) => `${date.toISOString()} formatted as ${formatStr}`
  ),
}));

describe('AsteroidTableItem.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AsteroidTableItem, {
      propsData: {
        neo: {
          name: 'Test Asteroid',
          isPotentiallyHazardous: true,
          magnitude: 5.6,
          missDistance: {
            km: 150000,
          },
          diameter: {
            km: {
              min: 10,
              max: 20,
            },
          },
          date: '2023-08-16T12:00:00Z',
        },
        missDistanceMeasureUnit: 'km',
        diameterMeasureUnit: 'km',
        velocityMeasureUnit: 'kilometers per hour',
      },
      stubs: ['FontAwesomeIcon'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders asteroid name', () => {
    expect(wrapper.find('.name span').text()).toBe('Test Asteroid');
  });

  it('renders potentially hazardous icon', () => {
    expect(wrapper.find('.name .icon').exists()).toBe(true);
  });

  it('renders formatted date', () => {
    expect(wrapper.vm.date).toBe('2023-08-16T12:00:00.000Z formatted as kk:mm');
    expect(
      wrapper.find('.content-item:nth-child(5) span:nth-child(2)').text()
    ).toBe('2023-08-16T12:00:00.000Z formatted as kk:mm');
  });
});
