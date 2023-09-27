import { shallowMount } from '@vue/test-utils';
import CloseApproach from '@/components/neoDetails/CloseApproach.vue';

describe('CloseApproach', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CloseApproach, {
      propsData: {
        closeApproaches: [
          {
            date: 'some date',
            hour: 'some hour',
            orbitingBody: 'earth',
            missDistance: '12',
            velocity: '50',
          },
          {
            date: 'some other date',
            hour: 'some other hour',
            orbitingBody: 'merc',
            missDistance: '21',
            velocity: '70',
          },
        ],
        missDistanceMeasureUnit: 'miles',
        velocityMeasureUnit: 'kilometers_per_hour',
      },
      stubs: ['BaseDivider'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the "close-approach" class', () => {
    expect(wrapper.classes()).toContain('close-approach');
  });

  it('renders mocked components', () => {
    expect(wrapper.find('basedivider-stub').exists()).toBeTruthy();
  });

  it('renders title', () => {
    const title = wrapper.find('h2');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Close Approach Dates');
  });

  it('renders measure units', () => {
    const title = wrapper.find('h3');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Measure Units');

    const measureUnitTexts = wrapper.findAll('.measure-unit');
    expect(measureUnitTexts.at(0).exists()).toBeTruthy();
    expect(measureUnitTexts.at(0).text()).toContain(
      'The measure unit for miss distance is'
    );
    expect(measureUnitTexts.at(0).text()).toContain('miles');
    expect(measureUnitTexts.at(1).exists()).toBeTruthy();
    expect(measureUnitTexts.at(1).text()).toContain(
      'The measure unit for velocity is'
    );
    expect(measureUnitTexts.at(1).text()).toContain('kilometers per hour');
  });

  it('renders table', () => {
    const headerItems = wrapper.findAll('.header-item');
    expect(headerItems.length).toBe(5);
    expect(headerItems.at(0).text()).toBe('Date');
    expect(headerItems.at(1).text()).toBe('Hour');
    expect(headerItems.at(2).text()).toBe('Orbiting');
    expect(headerItems.at(3).text()).toBe('Distance');
    expect(headerItems.at(4).text()).toBe('Velocity');

    const rows = wrapper.findAll('.row span');
    expect(rows.length).toBe(15);
    expect(rows.at(5).exists()).toBeTruthy();
    expect(rows.at(5).text()).toBe('some date');
    expect(rows.at(6).exists()).toBeTruthy();
    expect(rows.at(6).text()).toBe('some hour');
    expect(rows.at(7).exists()).toBeTruthy();
    expect(rows.at(7).text()).toBe('earth');
    expect(rows.at(8).exists()).toBeTruthy();
    expect(rows.at(8).text()).toBe('12');
    expect(rows.at(9).exists()).toBeTruthy();
    expect(rows.at(9).text()).toBe('50');
    expect(rows.at(10).exists()).toBeTruthy();
    expect(rows.at(10).text()).toBe('some other date');
    expect(rows.at(11).exists()).toBeTruthy();
    expect(rows.at(11).text()).toBe('some other hour');
    expect(rows.at(12).exists()).toBeTruthy();
    expect(rows.at(12).text()).toBe('merc');
    expect(rows.at(13).exists()).toBeTruthy();
    expect(rows.at(13).text()).toBe('21');
    expect(rows.at(14).exists()).toBeTruthy();
    expect(rows.at(14).text()).toBe('70');
  });
});
