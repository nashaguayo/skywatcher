import { shallowMount } from '@vue/test-utils';
import ApodBlock from '@/components/home/ApodBlock.vue';
import * as apodHelper from '@/helpers/apod';

jest.mock('@/helpers/apod', () => ({
  getTodaysAstronomyPicture: jest.fn(),
}));

jest.mock('@/skeleton/home/ApodBlockSkeleton.vue', () => ({
  name: 'ApodBlockSkeleton',
}));

const spyGetTodaysAstronomyPicture = jest.spyOn(
  apodHelper,
  'getTodaysAstronomyPicture'
);

describe('ApodBlock', () => {
  let wrapper;

  beforeEach(() => {
    spyGetTodaysAstronomyPicture.mockResolvedValue('some-url.png');
    wrapper = shallowMount(ApodBlock, { stubs: ['ApodBlockSkeleton'] });
  });

  afterEach(() => {
    wrapper.destroy();
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the "apod-block" class', () => {
    expect(wrapper.classes()).toContain('apod-block');
  });

  it('renders everything correctly', () => {
    const title = wrapper.find('h2');
    expect(title.exists()).toBeTruthy();
    const content = wrapper.find('.content');
    expect(content.exists()).toBeTruthy();
    const error = wrapper.find('.error');
    expect(error.exists()).toBeFalsy();
  });

  it('displays error message when theres an error', async () => {
    wrapper = shallowMount(ApodBlock, { data: () => ({ error: true }) });
    await wrapper.vm.$nextTick();
    const content = wrapper.find('.content');
    expect(content.exists()).toBeFalsy();
    const error = wrapper.find('.error');
    expect(error.exists()).toBeTruthy();
  });
});
