import { getAstronomyPicturesOfTheDay as getAstronomyPicturesOfTheDayApi } from '@/api/nasa/planetary';
import { parseISO } from 'date-fns';

export async function getAstronomyPicturesOfTheDay(startDate, endDate) {
  const apods = await getAstronomyPicturesOfTheDayApi(startDate, endDate);
  if (!apods) {
    return false;
  }
  const processedApods = apods.map((apod) => {
    const { copyright, date, explanation, hdurl, media_type, title, url } =
      apod;
    return {
      copyright,
      date: parseISO(date),
      explanation,
      hdurl,
      mediaType: media_type,
      title,
      url,
    };
  });
  return processedApods;
}
