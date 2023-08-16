import { getNearEarthObjects as getNearEarthObjectsApi } from '@/api/nasa/neo';
import { format } from 'date-fns';

export async function getNearEarthObjects(date) {
  const formattedDate = format(date, 'yyyy-MM-dd');
  const neos = await getNearEarthObjectsApi(formattedDate);
  if (!neos) {
    return false;
  }
  const processedNeos = neos.near_earth_objects[formattedDate].map((neo) => {
    const {
      absolute_magnitude_h,
      close_approach_data,
      estimated_diameter,
      id,
      is_potentially_hazardous_asteroid,
      is_sentry_object,
      name,
    } = neo;
    return {
      magnitude: absolute_magnitude_h,
      date: close_approach_data[0].epoch_date_close_approach,
      missDistance: {
        astronomical: close_approach_data[0].miss_distance.astronomical,
        lunar: close_approach_data[0].miss_distance.lunar,
        kilometers: close_approach_data[0].miss_distance.kilometers,
        miles: close_approach_data[0].miss_distance.miles,
      },
      diameter: {
        feet: {
          min: estimated_diameter.feet.estimated_diameter_min,
          max: estimated_diameter.feet.estimated_diameter_max,
        },
        kilometers: {
          min: estimated_diameter.kilometers.estimated_diameter_min,
          max: estimated_diameter.kilometers.estimated_diameter_max,
        },
        meters: {
          min: estimated_diameter.meters.estimated_diameter_min,
          max: estimated_diameter.meters.estimated_diameter_max,
        },
        miles: {
          min: estimated_diameter.miles.estimated_diameter_min,
          max: estimated_diameter.miles.estimated_diameter_max,
        },
      },
      id,
      isPotentiallyHazardous: is_potentially_hazardous_asteroid,
      isSentryObject: is_sentry_object,
      name,
    };
  });
  console.log(processedNeos);
  return processedNeos;
}
