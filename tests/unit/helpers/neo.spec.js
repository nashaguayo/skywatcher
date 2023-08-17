import { getNearEarthObjects } from '@/helpers/neo';
import * as neoApi from '@/api/nasa/neo';

jest.mock('@/api/nasa/neo', () => ({
  getNearEarthObjects: jest.fn(),
}));

const spyGetNearEarthObjects = jest.spyOn(neoApi, 'getNearEarthObjects');

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
