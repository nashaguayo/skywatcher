import { mount } from '@vue/test-utils';
import DailyPicture from '@/components/apod/DailyPicture.vue';
import * as dateFns from 'date-fns';

jest.mock('@/skeleton/apod/DailyPictureSkeleton', () => ({
  name: 'DailyPictureSkeleton',
  template: '<div class="mock-daily-picture-skeleton"></div>',
}));

jest.mock('date-fns');

const spyIsEqual = jest.spyOn(dateFns, 'isEqual');

describe('DailyPicture Template', () => {
  let wrapper;

  beforeEach(() => {
    spyIsEqual.mockReturnValue(true);
    wrapper = mount(DailyPicture, {
      data: () => ({
        loaded: true,
      }),
      propsData: {
        copyright: 'Mock Copyright',
        date: new Date('2023-08-12T10:00:00.000Z'),
        explanation: 'Mock Explanation',
        hdurl: 'https://example.com/mock-hdurl.jpg',
        mediaType: 'image',
        title: 'Mock Title',
        url: 'https://example.com/mock-url.jpg',
      },
      stubs: ['LazyYoutube', 'FontAwesomeIcon', 'DailyPictureSkeleton'],
    });
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the "daily-picture" class', () => {
    expect(wrapper.classes()).toContain('daily-picture');
  });

  it('shows skeleton while loading', () => {
    wrapper = mount(DailyPicture, {
      propsData: {
        copyright: 'Mock Copyright',
        date: new Date('2023-08-12T10:00:00.000Z'),
        explanation: 'Mock Explanation',
        hdurl: 'https://example.com/mock-hdurl.jpg',
        mediaType: 'image',
        title: 'Mock Title',
        url: 'https://example.com/mock-url.jpg',
      },
      stubs: ['LazyYoutube', 'FontAwesomeIcon', 'DailyPictureSkeleton'],
    });
    const skeleton = wrapper.find('dailypictureskeleton-stub');
    expect(skeleton.exists()).toBeTruthy();
  });

  it('displays all the content', async () => {
    const image = wrapper.find('img');
    expect(image.exists()).toBeTruthy();
    expect(image.attributes('src')).toBe('https://example.com/mock-url.jpg');

    const copyright = wrapper.find('.copyright');
    expect(copyright.exists()).toBeTruthy();
    expect(copyright.text()).toBe('By Mock Copyright');

    const pageTitle = wrapper.find('h1');
    expect(pageTitle.exists()).toBeTruthy();
    expect(pageTitle.text()).toBe('Astronomy Picture of the Day');

    const date = wrapper.find('.date');
    expect(date.exists()).toBeTruthy();
    expect(date.text()).toBe("Today's Picture");

    const title = wrapper.find('h2');
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Mock Title');

    const icon = wrapper.find('.icon');
    expect(icon.exists()).toBeTruthy();

    const explanation = wrapper.find('.container span');
    expect(explanation.exists()).toBeTruthy();
    expect(explanation.text()).toBe('Mock Explanation');

    const skeleton = wrapper.find('dailypictureskeleton-stub');
    expect(skeleton.exists()).toBeFalsy();
  });

  it('loads video when it is not an image', () => {
    wrapper = mount(DailyPicture, {
      propsData: {
        copyright: 'Mock Copyright',
        date: new Date('2023-08-12T10:00:00.000Z'),
        explanation: 'Mock Explanation',
        hdurl: 'https://example.com/mock-hdurl.jpg',
        mediaType: 'video',
        title: 'Mock Title',
        url: 'https://example.com/mock-url.jpg',
      },
      stubs: ['LazyYoutube', 'FontAwesomeIcon', 'DailyPictureSkeleton'],
    });
    const image = wrapper.find('img');
    expect(image.exists()).toBeFalsy();

    const video = wrapper.find('lazyyoutube-stub');
    expect(video.exists()).toBeTruthy();
    expect(video.attributes('src')).toBe('https://example.com/mock-url.jpg');
  });

  it('opens the HD image in a new tab when the image is clicked', async () => {
    const openSpy = jest.spyOn(window, 'open');
    openSpy.mockImplementation(() => {});
    await wrapper.find('.image').trigger('click');
    expect(openSpy).toHaveBeenCalledWith(
      'https://example.com/mock-hdurl.jpg',
      '_blank'
    );
  });
});
