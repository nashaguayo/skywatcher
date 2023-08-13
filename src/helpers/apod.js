import { getAstronomyPictureOfTheDay as getAstronomyPictureOfTheDayApi } from '@/api/nasa/planetary';
import { parseISO } from 'date-fns';

export async function getAstronomyPictureOfTheDay() {
  const apod = await getAstronomyPictureOfTheDayApi();
  if (!apod) {
    return false;
  }
  const { copyright, date, explanation, hdurl, media_type, title, url } = apod;
  return {
    copyright,
    date: parseISO(date),
    explanation,
    hdurl,
    mediaType: media_type,
    title,
    url,
  };
}
