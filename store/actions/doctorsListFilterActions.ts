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

export const updateAvailabilityChecked = (checkedIds: Array<string>) => ({
  type: AVAILABILITY_CHECKED_UPDATE,
  checkedIds
});

export const updateSpecialityChecked = (checkedIds: Array<string>) => ({
    type: SPECIALITY_CHECKED_UPDATE,
    checkedIds
});

export const updateInsuranceChecked = (checkedIds: Array<string>) => ({
    type: INSURANCE_CHECKED_UPDATE,
    checkedIds
});
// clear inputs

export const clearAvailability = (clearCache?: boolean) => ({
  type: CLEAR_AVAILABILITY,
  clearCache
});

export const clearSpeciality = (clearCache?: boolean) => ({
  type: CLEAR_SPECIALITY,
  clearCache
});

export const clearInsurance = (clearCache?: boolean) => ({
  type: CLEAR_INSURANCE,
  clearCache
});

export const clearSort = (clearCache?: boolean) => ({
  type: CLEAR_SORT,
  clearCache
});

export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS
})

// update text input values

export const updateSpecialityFilterValue = (value: string) => (
  {
    type: UPDATE_SPECIALITY_FILTER_VALUE,
    value
  }
)

export const updateInsuranceFilterValue = (value: string) => (
  {
    type: UPDATE_INSURANCE_FILTER_VALUE,
    value
  }
)
// options

export const setSortValue = (sort_value: string | null) => ({
  type: SET_SORT_VALUE,
  sort_value
});

// Applying filters

export const applyAvailability = (revert?: boolean) => ({
  type: APPLY_AVAILABILITY,
  revert
});

export const applySpeciality = (revert?: boolean) => ({
  type: APPLY_SPECIALITY,
  revert
});

export const applyInsurance = (revert?: boolean) => ({
  type: APPLY_INSURANCE,
  revert
});

export const applySort = (revert?: boolean) => ({
  type: APPLY_SORT,
  revert
});