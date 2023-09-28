const MISS_DISTANCE_MEASURE_UNIT = 'missDistanceMeasureUnit';
const DIAMETER_MEASURE_UNIT = 'diameterMeasureUnit';
const VELOCITY_MEASURE_UNIT = 'velocityMeasureUnit';
const SORT_BY = 'sortBy';
const FILTER_BY = 'filterBy';

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

export function getVelocityMeasureUnit() {
  return localStorage.getItem(VELOCITY_MEASURE_UNIT);
}

export function setVelocityMeasureUnit(velocityMeasureUnit) {
  localStorage.setItem(VELOCITY_MEASURE_UNIT, velocityMeasureUnit);
}

export function getSortBy() {
  return localStorage.getItem(SORT_BY);
}

export function setSortBy(sortBy) {
  localStorage.setItem(SORT_BY, sortBy);
}

export function getFilterBy() {
  return localStorage.getItem(FILTER_BY);
}

export function setFilterBy(filterBy) {
  localStorage.setItem(FILTER_BY, filterBy);
}
