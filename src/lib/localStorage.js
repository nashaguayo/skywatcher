const MISS_DISTANCE_MEASURE_UNIT = 'missDistanceMeasureUnit';
const DIAMETER_MEASURE_UNIT = 'diameterMeasureUnit';
const SORT_BY = 'sortBy';

export function getMissDistanceMeasureUnit() {
  return localStorage.getItem(MISS_DISTANCE_MEASURE_UNIT);
}

export function setMissDistanceMeasureUnit(missDistanceMeasureUnit) {
  localStorage.setItem(MISS_DISTANCE_MEASURE_UNIT, missDistanceMeasureUnit);
}

export function getDiameterMeasureUnit() {
  return localStorage.getItem(DIAMETER_MEASURE_UNIT);
}

export function setDiameterMeasureUnit(diameterMeasureUnit) {
  localStorage.setItem(DIAMETER_MEASURE_UNIT, diameterMeasureUnit);
}

export function getSortBy() {
  return localStorage.getItem(SORT_BY);
}

export function setSortBy(sortBy) {
  localStorage.setItem(SORT_BY, sortBy);
}
