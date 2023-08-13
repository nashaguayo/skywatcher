import nasaApi from '@/config/nasaApi';
import { logError } from '@/lib/logger';

const URL = 'planetary/';

export async function getAstronomyPictureOfTheDay() {
  try {
    const result = await nasaApi.get(`${URL}apod`);
    return result.data;
  } catch (error) {
    logError(
      getAstronomyPictureOfTheDay.name,
      'Unable to get astronomy picture of the day',
      error
    );
  }
}
