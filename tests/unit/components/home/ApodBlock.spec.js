import { shallowMount } from '@vue/test-utils';
import ApodBlock from '@/components/home/ApodBlock.vue';
import * as apodHelper from '@/helpers/apod';

jest.mock('@/helpers/apod', () => ({
  getTodaysAstronomyPicture: jest.fn(),
}));

jest.mock('@/skeleton/home/ApodBlockSkeleton.vue', () => ({
  name: 'ApodBlockSkeleton',
}));

jest.mock('@/components/ui/BaseButton.vue', () => ({
  name: 'BaseButton',
}));

const spyGetTodaysAstronomyPicture = jest.spyOn(
  apodHelper,
  'getTodaysAstronomyPicture'
);

describe('ApodBlock', () => {
  let wrapper;

  beforeEach(() => {
    spyGetTodaysAstronomyPicture.mockResolvedValue({
      url: 'some-url.png',
      mediaType: 'image',
    });
    wrapper = shallowMount(ApodBlock, {
      data: () => ({ loaded: true }),
      stubs: ['LazyYoutube', 'ApodBlockSkeleton', 'BaseButton'],
    });
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

  it('shows skeleton when loading', () => {
    spyGetTodaysAstronomyPicture.mockResolvedValue({
      url: 'some-url.png',
      mediaType: 'image',
    });
    wrapper = shallowMount(ApodBlock, {
      stubs: ['ApodBlockSkeleton'],
    });
    const skeleton = wrapper.find('apodblockskeleton-stub');
    expect(skeleton.exists()).toBeTruthy();

    const body = wrapper.find('.apod-block-container');
    expect(body.exists()).toBeTruthy();
    expect(body.attributes('style')).toBe('display: none;');
  });

  it('renders everything correctly', () => {
    const skeleton = wrapper.find('apodblockskeleton-stub');
    expect(skeleton.exists()).toBeFalsy();
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

  it('displays image when media type is an image', () => {
    const image = wrapper.find('.image');
    expect(image.exists()).toBeTruthy();
    const video = wrapper.find('lazyyoutube-stub');
    expect(video.exists()).toBeFalsy();
  });

  it('displays video when media type is a video', async () => {
    spyGetTodaysAstronomyPicture.mockResolvedValue({
      url: 'some-other-url.png',
      mediaType: 'video',
    });
    wrapper = shallowMount(ApodBlock, {
      stubs: ['LazyYoutube', 'ApodBlockSkeleton', 'BaseButton'],
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const video = wrapper.find('lazyyoutube-stub');
    expect(video.exists()).toBeTruthy();
    const image = wrapper.find('.image');
    expect(image.exists()).toBeFalsy();
  });
});
