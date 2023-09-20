import { shallowMount } from '@vue/test-utils';
import WhatIfImpact from '@/components/neoDetails/WhatIfImpact.vue';

describe('WhatIfImpact', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(WhatIfImpact, {
      propsData: {
        category: 2,
        description: 'some description',
        craterSize: 10,
        megatonKineticE: 15,
        megatonAirburst: 20,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the "what-if-impact" class', () => {
    expect(wrapper.classes()).toContain('what-if-impact');
  });

  it('renders what if it hit earth block title', () => {
    const title = wrapper.find('.what-if-title');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('What if it hit Earth?*');
  });

  it('renders what if it hit earth block descriptions', () => {
    const descriptions = wrapper.findAll('.description');
    expect(descriptions.at(0).exists()).toBeTruthy();
    expect(descriptions.at(0).text()).toBe('This asteroid is very dangerous.');
    expect(descriptions.at(1).exists()).toBeTruthy();
    expect(descriptions.at(1).text()).toBe('If it hit, some description.');
  });

  it('renders asteroid stats correctly', () => {
    const keys = wrapper.findAll('.key');
    expect(keys.at(0).exists()).toBeTruthy();
    expect(keys.at(0).text()).toBe('Crater Size');
    expect(keys.at(1).exists()).toBeTruthy();
    expect(keys.at(1).text()).toBe('Megaton Kinetic Energy');
    expect(keys.at(2).exists()).toBeTruthy();
    expect(keys.at(2).text()).toBe('Megaton Airburst');

    const values = wrapper.findAll('.value');
    expect(values.at(0).exists()).toBeTruthy();
    expect(values.at(0).text()).toBe('10km');
    expect(values.at(1).exists()).toBeTruthy();
    expect(values.at(1).text()).toBe('15E');
    expect(values.at(2).exists()).toBeTruthy();
    expect(values.at(2).text()).toBe('20MT');
  });

  it('renders the copyright disclaimer', () => {
    const copyrightDisclaimer = wrapper.find('.copyright-disclaimer');
    expect(copyrightDisclaimer.exists()).toBeTruthy();
    expect(copyrightDisclaimer.text()).toContain('* Categories according to');
    expect(copyrightDisclaimer.text()).toContain('this article');
    expect(copyrightDisclaimer.text()).toContain('by Brian Wang.');
  });
});
