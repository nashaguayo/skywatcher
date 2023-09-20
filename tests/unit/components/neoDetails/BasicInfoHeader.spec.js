import { shallowMount } from '@vue/test-utils';
import BasicInfoHeader from '@/components/neoDetails/BasicInfoHeader.vue';

describe('BasicInfoHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BasicInfoHeader, {
      propsData: {
        category: 2,
        designation: 'Asteroid Name',
        magnitude: 20,
        hazardous: true,
        sentry: false,
        loaded: true,
      },
      stubs: ['FontAwesomeIcon'],
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the "basic-info-header" class', () => {
    expect(wrapper.classes()).toContain('basic-info-header');
  });

  it('renders mocked components', () => {
    expect(wrapper.find('fontawesomeicon-stub').exists()).toBeTruthy();
  });

  it('renders designation', () => {
    const title = wrapper.find('h1');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Asteroid Name');
  });

  it('renders magnitude', () => {
    const magnitude = wrapper.find('h3');
    expect(magnitude.exists()).toBeTruthy();
    expect(magnitude.text()).toBe('Magnitude — 20H');
  });

  it('renders disclaimer', () => {
    const disclaimers = wrapper.findAll('span');
    expect(disclaimers.at(0).exists()).toBeTruthy();
    expect(disclaimers.at(0).text()).toBe(
      'This asteroid is potentially hazardous.'
    );
    expect(disclaimers.at(1).exists()).toBeTruthy();
    expect(disclaimers.at(1).text()).toBe('Also, it is not a sentry object.');
  });

  it('renders categories', () => {
    for (n in 6) {
      const index = n - 1;
      const category = wrapper.find(`.category-${index}`);
      category(category.exists()).toBeTruthy();
      if (n < 2) {
        expect(wrapper.find(`.category-${index}-active`).exists()).toBeTruthy();
      } else {
        expect(wrapper.find(`.category-${index}-active`).exists()).toBeFalsy();
      }
    }
  });
});
