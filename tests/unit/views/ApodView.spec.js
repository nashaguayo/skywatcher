import { mount } from '@vue/test-utils';
import ApodView from '@/views/ApodView.vue';
import * as apodHelper from '@/helpers/apod';
import * as dateFns from 'date-fns';

jest.mock('@/components/apod/DailyPicture.vue', () => ({
  name: 'DailyPicture',
  template: '<div class="mock-daily-picture"></div>',
}));

jest.mock('@/helpers/apod');

jest.mock('date-fns');

const spyGetAstronomyPictureOfTheDay = jest.spyOn(
  apodHelper,
  'getAstronomyPictureOfTheDay'
);
const spyParseISO = jest.spyOn(dateFns, 'parseISO');

describe('ApodView Template', () => {
  let wrapper;

  beforeEach(() => {
    spyGetAstronomyPictureOfTheDay.mockResolvedValue({
      copyright: 'The Deep Sky Collective',
      date: '2023-08-12',
      explanation: 'An explanation',
      hdurl: 'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Messier 51 in 255 Hours',
      url: 'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
    });
    spyParseISO.mockReturnValue(new Date(2023, 8, 12));
    wrapper = mount(ApodView, { stubs: ['DailyPicture'] });
  });

  afterEach(() => {
    wrapper.destroy();
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('renders the component', () => {
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
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the "home-view" class', () => {
    expect(wrapper.classes()).toContain('apod-view');
  });

  it('renders the mockeded components', () => {
    const dailyPictureComponent = wrapper.find('dailypicture-stub');
    expect(dailyPictureComponent.exists()).toBeTruthy();
    expect(dailyPictureComponent.attributes().copyright).toBe(
      'The Deep Sky Collective'
    );
    expect(dailyPictureComponent.attributes('date')).toBe(
      'Tue Sep 12 2023 00:00:00 GMT-0300 (Argentina Standard Time)'
    );
    expect(dailyPictureComponent.attributes('explanation')).toBe(
      'An explanation'
    );
    expect(dailyPictureComponent.attributes('hdurl')).toBe(
      'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg'
    );
    console.log(wrapper.html());
    expect(dailyPictureComponent.attributes('title')).toBe(
      'Messier 51 in 255 Hours'
    );
    expect(dailyPictureComponent.attributes('url')).toBe(
      'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg'
    );
  });
});

describe('ApodView Script', () => {
  let wrapper;

  beforeEach(() => {
    spyGetAstronomyPictureOfTheDay.mockResolvedValue({
      copyright: 'The Deep Sky Collective',
      date: '2023-08-12',
      explanation: 'An explanation',
      hdurl: 'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Messier 51 in 255 Hours',
      url: 'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
    });
    spyParseISO.mockReturnValue(new Date(2023, 8, 12));
    wrapper = mount(ApodView, { stubs: ['DailyPicture'] });
  });

  afterEach(() => {
    wrapper.destroy();
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('sets apod data on created correctly', () => {
    expect(spyGetAstronomyPictureOfTheDay).toHaveBeenCalled();
    expect(spyParseISO).toHaveBeenCalled();
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
