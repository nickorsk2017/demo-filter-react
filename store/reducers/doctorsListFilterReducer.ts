import * as _ from 'lodash';
import {
  AVAILABILITY_CHECKED_UPDATE,
  SPECIALITY_CHECKED_UPDATE,
  INSURANCE_CHECKED_UPDATE,
  CLEAR_AVAILABILITY,
  CLEAR_SPECIALITY,
  CLEAR_INSURANCE,
  CLEAR_SORT,
  UPDATE_SPECIALITY_FILTER_VALUE,
  UPDATE_INSURANCE_FILTER_VALUE,
  SET_SORT_VALUE,
  CLEAR_ALL_FILTERS,
  // Applying filters
  APPLY_AVAILABILITY,
  APPLY_SPECIALITY,
  APPLY_INSURANCE
} from '../actionTypes';

export type DoctorsListFilterReducerType = {
  availability_checked: Array<string>;
  speciality_checked: Array<string>;
  insurance_checked: Array<string>;
  sort_value: string | null;
  specialityFilterValue: string;
  insuranceFilterValue: string;
  availability_cache: {
    checkboxs: Array<string>
  };
  speciality_cache: {
    checkboxs: Array<string>,
    specialityFilterValue: string
  };
  insurance_cache: {
    checkboxs: Array<string>,
    insuranceFilterValue: string
  };
  sort_cache: null | string;
};

type ActionType = {type: string; checkedIds?: Array<string>; clearCache?: boolean; sort_value?: string | null; value?: string; revert?: boolean};

const initialState: DoctorsListFilterReducerType = {
    availability_checked: [],
    speciality_checked: [],
    insurance_checked: [],
    sort_value: null,
    specialityFilterValue: "",
    insuranceFilterValue: "",
    // its need cache because select and popup can have different values before user accept values
    // cache values are keeping inside select component
    // new values are keeping inside popup component
    availability_cache: {
      checkboxs: []
    },
    speciality_cache: {
      checkboxs: [],
      specialityFilterValue: ""
    },
    insurance_cache: {
      checkboxs: [],
      insuranceFilterValue: ""
    },
    sort_cache: null,
};
  
export function doctorsListFilterReducer(state: DoctorsListFilterReducerType = initialState, action: ActionType) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
      case AVAILABILITY_CHECKED_UPDATE:
        newState.availability_checked = action.checkedIds || [];
        break;
      case SPECIALITY_CHECKED_UPDATE:
        newState.speciality_checked = action.checkedIds || [];
        break;
      case INSURANCE_CHECKED_UPDATE:
        newState.insurance_checked = action.checkedIds || [];
        break;
      case CLEAR_AVAILABILITY:
        newState.availability_checked = initialState.availability_checked;
        if(action.clearCache){
          newState.availability_cache = initialState.availability_cache;
        }
        break;
      case CLEAR_SPECIALITY:
        newState.speciality_checked = initialState.speciality_checked;
        newState.specialityFilterValue = initialState.specialityFilterValue;
        if(action.clearCache){
          newState.speciality_cache = initialState.speciality_cache;
        }
      break;
      case CLEAR_INSURANCE:
        newState.insurance_checked = initialState.insurance_checked;
        newState.insuranceFilterValue = initialState.insuranceFilterValue;
        if(action.clearCache){
          newState.insurance_cache = initialState.insurance_cache;
        }
      break;
      case CLEAR_SORT:
        newState.sort_value = initialState.sort_value;
      break;
      case UPDATE_SPECIALITY_FILTER_VALUE:
        newState.specialityFilterValue = action.value || "";
      break;
      case UPDATE_INSURANCE_FILTER_VALUE:
        newState.insuranceFilterValue = action.value || "";
      break;
      case SET_SORT_VALUE:
        newState.sort_value = action.sort_value || "";
        break;
      case CLEAR_ALL_FILTERS: 
        return initialState;
      // Applying from popup component
      case APPLY_AVAILABILITY:
        if(action.revert){
          newState.availability_checked = [...newState.availability_cache.checkboxs];
        } else {
          newState.availability_cache.checkboxs = [...newState.availability_checked];
        }
        break;
      case APPLY_SPECIALITY:
        if(action.revert){
          newState.speciality_checked = [...newState.speciality_cache.checkboxs];
          newState.specialityFilterValue = newState.speciality_cache.specialityFilterValue;
        } else {
          newState.speciality_cache.checkboxs = [...newState.speciality_checked];
          newState.speciality_cache.specialityFilterValue = newState.specialityFilterValue;
        }
        break;
      case APPLY_INSURANCE:
        if(action.revert){
          newState.insurance_checked = [...newState.insurance_cache.checkboxs];
          newState.insuranceFilterValue = newState.insurance_cache.insuranceFilterValue;
        } else {
          newState.insurance_cache.checkboxs = [...newState.insurance_checked];
          newState.insurance_cache.insuranceFilterValue = newState.insuranceFilterValue;
        }
        break;
      default:
        return state
    }
    return newState;
  }