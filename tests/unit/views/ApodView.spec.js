import { mount } from '@vue/test-utils';
import ApodView from '@/views/ApodView.vue';
import * as apodHelper from '@/helpers/apod';

jest.mock('@/components/apod/DailyPicture.vue', () => ({
  name: 'DailyPicture',
  template: '<div class="mock-daily-picture"></div>',
}));

jest.mock('@/helpers/apod', () => ({
  getAstronomyPictureOfTheDay: jest.fn(),
}));

const spyGetAstronomyPictureOfTheDay = jest.spyOn(
  apodHelper,
  'getAstronomyPictureOfTheDay'
);

describe('ApodView', () => {
  let wrapper;

  beforeEach(() => {
    spyGetAstronomyPictureOfTheDay.mockResolvedValue({
      copyright: 'The Deep Sky Collective',
      date: new Date(2023, 8, 12),
      explanation: 'An explanation',
      hdurl: 'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg',
      mediaType: 'image',
      title: 'Messier 51 in 255 Hours',
      url: 'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
    });
    wrapper = mount(ApodView, { stubs: ['DailyPicture'] });
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

  it('contains the "apod-view" class', () => {
    expect(wrapper.classes()).toContain('apod-view');
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
  });

  it('sets apod data on created correctly', () => {
    expect(spyGetAstronomyPictureOfTheDay).toHaveBeenCalled();
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
});
