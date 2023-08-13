import { shallowMount } from '@vue/test-utils';
import ApodContainer from '@/components/apod/ApodContainer.vue';
import * as apodHelper from '@/helpers/apod';

jest.mock('@/components/apod/DailyPicture.vue', () => ({
  name: 'DailyPicture',
  template: '<div class="mock-daily-picture"></div>',
}));

jest.mock('@/components/apod/ApodCalendar.vue', () => ({
  name: 'ApodCalendar',
  template: '<div class="mock-apod-calendar"></div>',
}));

jest.mock('@/helpers/apod', () => ({
  getAstronomyPicturesOfTheDay: jest.fn(),
}));

const spyGetAstronomyPicturesOfTheDay = jest.spyOn(
  apodHelper,
  'getAstronomyPicturesOfTheDay'
);

describe('ApodContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyGetAstronomyPicturesOfTheDay.mockResolvedValue([
      {
        copyright: 'The Deep Sky Collective',
        date: new Date(2023, 8, 12),
        explanation: 'An explanation',
        hdurl: 'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg',
        mediaType: 'image',
        title: 'Messier 51 in 255 Hours',
        url: 'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
      },
    ]);
    wrapper = shallowMount(ApodContainer, { stubs: ['DailyPicture'] });
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

  it('contains the "apod-container" class', () => {
    expect(wrapper.classes()).toContain('apod-container');
  });

  it('renders the mocked components', () => {
    const dailyPictureComponent = wrapper.find('dailypicture-stub');
    expect(dailyPictureComponent.exists()).toBeTruthy();
    expect(dailyPictureComponent.attributes().copyright).toBe(
      'The Deep Sky Collective'
    );
    expect(dailyPictureComponent.attributes('date')).toBe(
      new Date(2023, 8, 12).toString()
    );
    expect(dailyPictureComponent.attributes('explanation')).toBe(
      'An explanation'
    );
    expect(dailyPictureComponent.attributes('hdurl')).toBe(
      'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg'
    );
    expect(dailyPictureComponent.attributes('title')).toBe(
      'Messier 51 in 255 Hours'
    );
    expect(dailyPictureComponent.attributes('url')).toBe(
      'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg'
    );

    const apodCalendarComponent = wrapper.find('apodcalendar-stub');
    expect(apodCalendarComponent.exists()).toBeTruthy();
  });

  it('sets apods data con created correctly', () => {
    expect(spyGetAstronomyPicturesOfTheDay).toHaveBeenCalled();
    expect(wrapper.vm.apods.list).toStrictEqual([
      {
        copyright: 'The Deep Sky Collective',
        date: new Date(2023, 8, 12),
        explanation: 'An explanation',
        hdurl: 'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg',
        mediaType: 'image',
        title: 'Messier 51 in 255 Hours',
        url: 'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
      },
    ]);
    expect(wrapper.vm.apod).toEqual({
      copyright: 'The Deep Sky Collective',
      date: new Date(2023, 8, 12),
      explanation: 'An explanation',
      hdurl: 'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg',
      mediaType: 'image',
      title: 'Messier 51 in 255 Hours',
      url: 'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
    });
  });

  it('changes the apod in the display when tapped', () => {
    expect(wrapper.vm.apod).toStrictEqual({
      copyright: 'The Deep Sky Collective',
      date: new Date(2023, 8, 12),
      explanation: 'An explanation',
      hdurl: 'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg',
      mediaType: 'image',
      title: 'Messier 51 in 255 Hours',
      url: 'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
    });
    wrapper.vm.displayApod({
      copyright: 'Some Copyright',
      date: new Date(2023, 8, 10),
      explanation: 'Some explanation',
      hdurl: 'hd-url.com',
      mediaType: 'image',
      title: 'Another title',
      url: 'url.com',
    });
    expect(wrapper.vm.apod).toStrictEqual({
      copyright: 'Some Copyright',
      date: new Date(2023, 8, 10),
      explanation: 'Some explanation',
      hdurl: 'hd-url.com',
      mediaType: 'image',
      title: 'Another title',
      url: 'url.com',
    });
  });
});
