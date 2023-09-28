import {
  getNearEarthObjects as getNearEarthObjectsApi,
  getNearEarthObject as getNearEarthObjectApi,
} from '@/api/nasa/neo';
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

export async function getNearEarthObject(
  id,
  velocityMeasureUnit,
  missDistanceMeasureUnit
) {
  const neo = await getNearEarthObjectApi(id);
  const damage = getDamageData(
    (neo.estimated_diameter.meters.estimated_diameter_min +
      neo.estimated_diameter.meters.estimated_diameter_max) /
      2
  );

  return {
    designation: neo.designation,
    magnitude: neo.absolute_magnitude_h,
    damage,
    hazardous: neo.is_potentially_hazardous_asteroid,
    sentry: neo.is_sentry_object,
    closeApproaches: neo.close_approach_data.reverse().map((data) => ({
      epoch: data.epoch_date_close_approach,
      date: data.close_approach_date,
      hour: format(data.epoch_date_close_approach, 'HH:mm'),
      velocity: data.relative_velocity[velocityMeasureUnit],
      missDistance: data.miss_distance[missDistanceMeasureUnit],
      orbitingBody: data.orbiting_body,
    })),
  };
}

export function getDamageData(diameter) {
  let megatonKineticE = 0;
  let megatonAirburst = 0;
  let craterSize = 0;
  let description = '';
  let category = 0;

  switch (true) {
    case diameter < 2:
      megatonKineticE = 0.001;
      megatonAirburst = 0.001;
      craterSize = 0;
      description =
        'it would cause nothing. Asteroids like these pass through daily around the world';
      break;
    case diameter < 3.3:
      megatonKineticE = 0.001;
      megatonAirburst = 0.002;
      craterSize = 0;
      description =
        'it would cause nothing. Asteroids like these are trivial around the world';
      break;
    case diameter < 4:
      megatonKineticE = 0.004;
      megatonAirburst = 0.004;
      craterSize = 0;
      description = 'nothing would happen. This is a very small asteroid';
      break;
    case diameter < 5:
      megatonKineticE = 0.008;
      megatonAirburst = 0.008;
      craterSize = 0;
      description = 'nothing would happen. This is small asteroid';
      break;
    case diameter < 6.5:
      megatonKineticE = 0.017;
      megatonAirburst = 0.017;
      craterSize = 0;
      description = 'nothing would happen, although this is a notable asteroid';
      break;
    case diameter < 8:
      megatonKineticE = 0.032;
      megatonAirburst = 0.032;
      craterSize = 0;
      description = 'nothing would happen, although this is a notable asteroid';
      break;
    case diameter < 10:
      megatonKineticE = 0.063;
      megatonAirburst = 0.063;
      craterSize = 0;
      description = 'some damage may occur. This one is scary, but safe';
      break;
    case diameter < 13:
      megatonKineticE = 0.14;
      megatonAirburst = 0.14;
      craterSize = 0;
      description = 'on impact, it would break windows';
      break;
    case diameter < 16:
      megatonKineticE = 0.26;
      megatonAirburst = 0.26;
      craterSize = 0;
      description = 'on impact, it would break windows';
      break;
    case diameter < 20:
      megatonKineticE = 0.5;
      megatonAirburst = 0.5;
      craterSize = 0;
      description = 'it would be similar to the Chelyabinsk event';
      break;
    case diameter < 25:
      megatonKineticE = 1;
      megatonAirburst = 1;
      craterSize = 0;
      description = 'it would be similar to the Chelyabinsk event';
      break;
    case diameter < 33:
      megatonKineticE = 2.2;
      megatonAirburst = 1.5;
      craterSize = 0.7;
      description = 'this one would kill an entire town';
      category = 1;
      break;
    case diameter < 40:
      megatonKineticE = 4.0;
      megatonAirburst = 2.0;
      craterSize = 0.9;
      description = 'this one would kill an entire suburb';
      category = 1;
      break;
    case diameter < 50:
      megatonKineticE = 7.8;
      megatonAirburst = 2.8;
      craterSize = 1.3;
      description = 'this one would kill an entire city';
      category = 1;
      break;
    case diameter < 65:
      megatonKineticE = 17;
      megatonAirburst = 4;
      craterSize = 1.8;
      description = 'it would be similar to the Tunguska event';
      category = 1;
      break;
    case diameter < 80:
      megatonKineticE = 32;
      megatonAirburst = 6;
      craterSize = 2.2;
      description = 'it would be similar to the Tunguska event';
      category = 1;
      break;
    case diameter < 100:
      megatonKineticE = 63;
      megatonAirburst = 8;
      craterSize = 2.8;
      description = 'it would devastate an entire metro region';
      category = 1;
      break;
    case diameter < 125:
      megatonKineticE = 122;
      megatonAirburst = 11;
      craterSize = 4;
      description = 'it would cause a state disruption';
      category = 1;
      break;
    case diameter < 160:
      megatonKineticE = 256;
      megatonAirburst = 16;
      craterSize = 5;
      description = 'it would cause a country disruption';
      category = 1;
      break;
    case diameter < 200:
      megatonKineticE = 500;
      megatonAirburst = 22;
      craterSize = 6;
      description = 'it would cause a country disruption';
      category = 1;
      break;
    case diameter < 250:
      megatonKineticE = 977;
      megatonAirburst = 31;
      craterSize = 7;
      description = 'it would cause a subcontinent disruption';
      category = 1;
      break;
    case diameter < 300:
      megatonKineticE = 2246;
      megatonAirburst = 47;
      craterSize = 10;
      description = 'it would be a civilization threat';
      category = 2;
      break;
    case diameter < 400:
      megatonKineticE = 4000;
      megatonAirburst = 63;
      craterSize = 12;
      description = 'it would be a civilization challenge';
      category = 2;
      break;
    case diameter < 500:
      megatonKineticE = 7813;
      megatonAirburst = 88;
      craterSize = 15;
      description = 'it would cause a civilization disruption';
      category = 2;
      break;
    case diameter < 650:
      megatonKineticE = 17164;
      megatonAirburst = 131;
      craterSize = 19;
      description = 'it would be an extinction threat';
      category = 2;
      break;
    case diameter < 800:
      megatonKineticE = 32000;
      megatonAirburst = 179;
      craterSize = 24;
      description = 'it would be an extinction challenge';
      category = 2;
      break;
    case diameter < 1000:
      megatonKineticE = 62500;
      megatonAirburst = 250;
      craterSize = 30;
      description = 'it would cause climate to change';
      category = 3;
      break;
    case diameter < 1250:
      megatonKineticE = 12270;
      megatonAirburst = 349;
      craterSize = 37;
      description = 'it would cause a climate overturn';
      category = 3;
      break;
    case diameter < 1600:
      megatonKineticE = 256000;
      megatonAirburst = 506;
      craterSize = 48;
      description = 'it would cause a regional extinction';
      category = 3;
      break;
    case diameter < 2000:
      megatonKineticE = 500000;
      megatonAirburst = 707;
      craterSize = 59;
      description = 'it would cause a regional extinction';
      category = 3;
      break;
    case diameter < 2500:
      megatonKineticE = 976563;
      megatonAirburst = 988;
      craterSize = 74;
      description = 'it would cause an extinction event';
      category = 4;
      break;
    case diameter < 3300:
      megatonKineticE = 2246063;
      megatonAirburst = 1499;
      craterSize = 98;
      description = 'it would cause an extinction event';
      category = 4;
      break;
    case diameter < 4000:
      megatonKineticE = 4000000;
      megatonAirburst = 2000;
      craterSize = 119;
      description = 'it would cause an extinction event';
      category = 4;
      break;
    case diameter < 5000:
      megatonKineticE = 7812500;
      megatonAirburst = 2795;
      craterSize = 149;
      description = 'it would cause an apocalyptic extinction event';
      category = 5;
      break;
    case diameter < 6550:
      megatonKineticE = 17164063;
      megatonAirburst = 4143;
      craterSize = 193;
      description = 'it would be a sterilization threat';
      category = 5;
      break;
    case diameter < 8000:
      megatonKineticE = 32000000;
      megatonAirburst = 5657;
      craterSize = 238;
      description = 'it would be a sterilization threat';
      category = 5;
      break;
    case diameter > 8000:
      megatonKineticE = 62500000;
      megatonAirburst = 7906;
      craterSize = 298;
      description = 'it would cause planetary sterilization';
      category = 5;
      break;
  }

  return {
    megatonKineticE,
    megatonAirburst,
    craterSize,
    description,
    category,
  };
}
