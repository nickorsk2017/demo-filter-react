import {
  AVAILABILITY_CHECKED_UPDATE,
  SPECIALITY_CHECKED_UPDATE,
  INSURANCE_CHECKED_UPDATE,
  CLEAR_AVAILABILITY,
  CLEAR_SPECIALITY,
  CLEAR_INSURANCE,
  UPDATE_SPECIALITY_FILTER_VALUE,
  UPDATE_INSURANCE_FILTER_VALUE,
  CLEAR_SORT,
  SET_SORT_VALUE,
  CLEAR_ALL_FILTERS,
  APPLY_AVAILABILITY,
  APPLY_SPECIALITY,
  APPLY_INSURANCE,
  APPLY_SORT
} from '../actionTypes';

export const updateAvailabilityChecked = (checkedIds) => ({
  type: AVAILABILITY_CHECKED_UPDATE,
  checkedIds
});

export const updateSpecialityChecked = (checkedIds) => ({
    type: SPECIALITY_CHECKED_UPDATE,
    checkedIds
});

export const updateInsuranceChecked = (checkedIds) => ({
    type: INSURANCE_CHECKED_UPDATE,
    checkedIds
});
// clear inputs

export const clearAvailability = (clearCache) => ({
  type: CLEAR_AVAILABILITY,
  clearCache
});

export const clearSpeciality = (clearCache) => ({
  type: CLEAR_SPECIALITY,
  clearCache
});

export const clearInsurance = (clearCache) => ({
  type: CLEAR_INSURANCE,
  clearCache
});

export const clearSort = (clearCache) => ({
  type: CLEAR_SORT,
  clearCache
});

export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS
})

// update text input values

export const updateSpecialityFilterValue = (value) => (
  {
    type: UPDATE_SPECIALITY_FILTER_VALUE,
    value
  }
)

export const updateInsuranceFilterValue = (value) => (
  {
    type: UPDATE_INSURANCE_FILTER_VALUE,
    value
  }
)
// options

export const setSortValue = (sort_value) => ({
  type: SET_SORT_VALUE,
  sort_value
});

// Applying filters

export const applyAvailability = (revert) => ({
  type: APPLY_AVAILABILITY,
  revert
});

export const applySpeciality = (revert) => ({
  type: APPLY_SPECIALITY,
  revert
});

export const applyInsurance = (revert) => ({
  type: APPLY_INSURANCE,
  revert
});

export const applySort = (revert) => ({
  type: APPLY_SORT,
  revert
});