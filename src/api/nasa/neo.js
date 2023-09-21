import nasaApi from '@/config/nasaApi';
import { logError } from '@/lib/logger';

const URL = 'neo/rest/v1/';

export async function getNearEarthObjects(date) {
  try {
    const result = await nasaApi.get(`${URL}feed`, {
      params: { start_date: date, end_date: date },
    });
    return result.data;
  } catch (error) {
    logError(
      getNearEarthObjects.name,
      'Unable to get near earth objects for dates',
      error
    );
  }
}

export async function getNearEarthObject(id) {
  try {
    const result = await nasaApi.get(`${URL}neo/${id}`);
    return result.data;
  } catch (error) {
    logError(
      getNearEarthObject.name,
      'Unable to get near earth object for id',
      error
    );
  }
}
