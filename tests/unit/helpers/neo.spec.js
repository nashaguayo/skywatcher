import {
  filterNeos,
  getNearEarthObject,
  getNearEarthObjects,
  sortNeos,
} from '@/helpers/neo';
import * as neoApi from '@/api/nasa/neo';

jest.mock('@/api/nasa/neo', () => ({
  getNearEarthObjects: jest.fn(),
  getNearEarthObject: jest.fn(),
}));

const spyGetNearEarthObjects = jest.spyOn(neoApi, 'getNearEarthObjects');
const spyGetNearEarthObject = jest.spyOn(neoApi, 'getNearEarthObject');

describe('getNearEarthObjects', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should return apod', async () => {
    spyGetNearEarthObjects.mockResolvedValue({
      near_earth_objects: {
        '2023-09-01': [
          {
            absolute_magnitude_h: 1,
            close_approach_data: [
              {
                epoch_date_close_approach: 2,
                miss_distance: {
                  astronomical: 3,
                  lunar: 4,
                  kilometers: 5,
                  miles: 6,
                },
              },
            ],
            estimated_diameter: {
              feet: {
                estimated_diameter_min: 10,
                estimated_diameter_max: 11,
              },
              kilometers: {
                estimated_diameter_min: 12,
                estimated_diameter_max: 13,
              },
              meters: {
                estimated_diameter_min: 14,
                estimated_diameter_max: 15,
              },
              miles: {
                estimated_diameter_min: 16,
                estimated_diameter_max: 17,
              },
            },
            id: 8,
            is_potentially_hazardous_asteroid: false,
            is_sentry_object: false,
            name: 'asteroid',
          },
        ],
      },
    });
    const result = await getNearEarthObjects(new Date(2023, 8, 1));
    expect(result).toStrictEqual([
      {
        date: 2,
        diameter: {
          feet: {
            min: 10,
            max: 11,
          },
          kilometers: {
            min: 12,
            max: 13,
          },
          meters: {
            min: 14,
            max: 15,
          },
          miles: {
            min: 16,
            max: 17,
          },
        },
        id: 8,
        isPotentiallyHazardous: false,
        isSentryObject: false,
        magnitude: 1,
        missDistance: { astronomical: 3, kilometers: 5, lunar: 4, miles: 6 },
        name: 'asteroid',
      },
    ]);
    expect(spyGetNearEarthObjects).toHaveBeenCalled();
  });

  it('should return false when no apod', async () => {
    spyGetNearEarthObjects.mockResolvedValue(undefined);
    const result = await getNearEarthObjects(new Date(2023, 8, 1));
    expect(result).toBeFalsy();
    expect(spyGetNearEarthObjects).toHaveBeenCalled();
  });
});

describe('sortNeos', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should sort correctly by name', () => {
    const neos = [{ name: 'XC' }, { name: 'ZA' }, { name: 'AB' }];
    const result = sortNeos('name', neos);
    expect(result).toStrictEqual([
      {
        name: 'AB',
      },
      {
        name: 'XC',
      },
      {
        name: 'ZA',
      },
    ]);
  });

  it('should sort correctly by miss distance', () => {
    const neos = [
      { missDistance: 10 },
      { missDistance: 5 },
      { missDistance: 1 },
      { missDistance: 20 },
    ];
    const result = sortNeos('missDistance', neos);
    expect(result).toStrictEqual([
      {
        missDistance: 1,
      },
      {
        missDistance: 5,
      },
      {
        missDistance: 10,
      },
      {
        missDistance: 20,
      },
    ]);
  });

  it('should sort correctly by minimum diameter', () => {
    const neos = [
      { diameter: { kilometers: { min: 10 } } },
      { diameter: { kilometers: { min: 5 } } },
      { diameter: { kilometers: { min: 1 } } },
      { diameter: { kilometers: { min: 20 } } },
    ];
    const result = sortNeos('minDiameter', neos, 'kilometers');
    expect(result).toStrictEqual([
      { diameter: { kilometers: { min: 20 } } },
      { diameter: { kilometers: { min: 10 } } },
      { diameter: { kilometers: { min: 5 } } },
      { diameter: { kilometers: { min: 1 } } },
    ]);
  });

  it('should sort correctly by maximum diameter', () => {
    const neos = [
      { diameter: { kilometers: { max: 10 } } },
      { diameter: { kilometers: { max: 5 } } },
      { diameter: { kilometers: { max: 1 } } },
      { diameter: { kilometers: { max: 20 } } },
    ];
    const result = sortNeos('maxDiameter', neos, 'kilometers');
    expect(result).toStrictEqual([
      { diameter: { kilometers: { max: 20 } } },
      { diameter: { kilometers: { max: 10 } } },
      { diameter: { kilometers: { max: 5 } } },
      { diameter: { kilometers: { max: 1 } } },
    ]);
  });
});

describe('filterNeos', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should filter by sentry objects correctly', () => {
    const neos = [
      { name: 'A', isSentryObject: false },
      { name: 'B', isSentryObject: true },
      { name: 'C', isSentryObject: false },
      { name: 'D', isSentryObject: true },
    ];
    const result = filterNeos('sentry', neos);
    expect(result).toStrictEqual([
      { name: 'B', isSentryObject: true },
      { name: 'D', isSentryObject: true },
    ]);
  });

  it('should filter by hazardous objects correctly', () => {
    const neos = [
      { name: 'A', isPotentiallyHazardous: false },
      { name: 'B', isPotentiallyHazardous: true },
      { name: 'C', isPotentiallyHazardous: false },
      { name: 'D', isPotentiallyHazardous: true },
    ];
    const result = filterNeos('hazardous', neos);
    expect(result).toStrictEqual([
      { name: 'B', isPotentiallyHazardous: true },
      { name: 'D', isPotentiallyHazardous: true },
    ]);
  });

  it('should apply no filter when none is given', () => {
    const neos = [
      { name: 'A', isPotentiallyHazardous: false },
      { name: 'B', isPotentiallyHazardous: true },
      { name: 'C', isPotentiallyHazardous: false },
      { name: 'D', isPotentiallyHazardous: true },
    ];
    const result = filterNeos('', neos);
    expect(result).toStrictEqual(neos);
  });
});

describe('getNearEarthObject', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should transform data from api correctly', async () => {
    const neo = {
      designation: 'Asteroid name',
      absolute_magnitude_h: 8,
      is_potentially_hazardous_asteroid: true,
      is_sentry_object: false,
      estimated_diameter: {
        meters: {
          estimated_diameter_min: 10,
          estimated_diameter_max: 20,
        },
      },
    };
    spyGetNearEarthObject.mockResolvedValue(neo);
    const result = await getNearEarthObject(0);
    expect(result).toStrictEqual({
      designation: 'Asteroid name',
      magnitude: 8,
      hazardous: true,
      sentry: false,
      damage: {
        megatonKineticE: 0.26,
        megatonAirburst: 0.26,
        craterSize: 0,
        description: 'on impact, it would break windows',
        category: 0,
      },
    });
  });
});
