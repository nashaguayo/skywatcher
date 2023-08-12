import { getAstronomyPictureOfTheDay } from '@/helpers/apod';
import * as planetaryApi from '@/api/nasa/planetary';

jest.mock('@/api/nasa/planetary', () => ({
  getAstronomyPictureOfTheDay: jest.fn(),
}));

const spyGetAstronomyPictureOfTheDay = jest.spyOn(
  planetaryApi,
  'getAstronomyPictureOfTheDay'
);

describe('getAstronomyPictureOfTheDay', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should return apod', async () => {
    const apod = {
      copyright: 'The Deep Sky Collective',
      date: '2023-08-11',
      explanation:
        "An intriguing pair of interacting galaxies, M51 is the 51st entry in Charles Messier's famous catalog. Perhaps the original spiral nebula, the large galaxy with whirlpool-like spiral structure seen nearly face-on is also cataloged as NGC 5194. Its spiral arms and dust lanes sweep in front of a companion galaxy (right), NGC 5195. Some 31 million light-years distant, within the boundaries of the well-trained constellation Canes Venatici, M51 looks faint and fuzzy to the eye in direct telescopic views. But this remarkably deep image shows off stunning details of the galaxy pair's striking colors and extensive tidal debris. A collaboration of astro-imagers using telescopes on planet Earth combined over 10 days of exposure time to create this definitive galaxy portrait of M51. The image includes 118 hours of narrowband data that also reveals a vast glowing cloud of reddish ionized hydrogen gas discovered in the M51 system.  Weekend Watch: Perseid Meteor Shower",
      hdurl: 'https://apod.nasa.gov/apod/image/2308/M51_255hours.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Messier 51 in 255 Hours',
      url: 'https://apod.nasa.gov/apod/image/2308/M51_255hours_1024.jpg',
    };
    spyGetAstronomyPictureOfTheDay.mockResolvedValue(apod);
    const result = await getAstronomyPictureOfTheDay();
    expect(result).toStrictEqual(apod);
    expect(spyGetAstronomyPictureOfTheDay).toHaveBeenCalled();
  });
});
