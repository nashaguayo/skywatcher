import nasaApi from '@/config/nasaApi';
import { logError } from '@/lib/logger';

const URL = 'planetary/';

export async function getAstronomyPicturesOfTheDay(startDate, endDate) {
  try {
    const result = await nasaApi.get(`${URL}apod`, {
      params: { start_date: startDate, end_date: endDate },
    });
    return result.data;
  } catch (error) {
    logError(
      getAstronomyPicturesOfTheDay.name,
      'Unable to get astronomy pictures of the day for dates',
      error
    );
  }
}
