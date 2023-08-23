import { getNearEarthObjects as getNearEarthObjectsApi } from '@/api/nasa/neo';
import { format, isBefore } from 'date-fns';

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
  return processedNeos;
}

export function sortNeos(sortBy, neos, diameterMeasureUnit) {
  let sortedNeos;
  switch (sortBy) {
    case 'name':
      sortedNeos = neos.slice().sort((a, b) => (a.name < b.name ? -1 : 1));
      break;
    case 'missDistance':
      sortedNeos = neos
        .slice()
        .sort((a, b) => (a.missDistance < b.missDistance ? -1 : 1));
      break;
    case 'minDiameter':
      sortedNeos = neos
        .slice()
        .sort((a, b) =>
          a.diameter[diameterMeasureUnit].min >
          b.diameter[diameterMeasureUnit].min
            ? -1
            : 1
        );
      break;
    case 'maxDiameter':
      sortedNeos = neos
        .slice()
        .sort((a, b) =>
          a.diameter[diameterMeasureUnit].max >
          b.diameter[diameterMeasureUnit].max
            ? -1
            : 1
        );
      break;
    case 'hour':
      sortedNeos = neos
        .slice()
        .sort((a, b) => (isBefore(a.date, b.date) ? -1 : 1));
      break;
    default:
      sortedNeos = neos;
  }
  return sortedNeos;
}

export function filterNeos(filterBy, neos) {
  let filteredNeos;
  switch (filterBy) {
    case 'sentry':
      filteredNeos = neos.filter((neo) => neo.isSentryObject);
      break;
    case 'hazardous':
      filteredNeos = neos.filter((neo) => neo.isPotentiallyHazardous);
      break;
    default:
      filteredNeos = neos;
  }
  return filteredNeos;
}
