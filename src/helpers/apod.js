import { getAstronomyPicturesOfTheDay as getAstronomyPicturesOfTheDayApi } from '@/api/nasa/planetary';
import { parseISO, format } from 'date-fns';

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

export async function getTodaysAstronomyPicture() {
  const date = format(new Date(), 'yyyy-MM-dd');
  const result = await getAstronomyPicturesOfTheDay(date, date);
  if (!result) {
    return { url: false, mediaType: '' };
  }
  return { url: result[0].url, mediaType: result[0].mediaType };
}
