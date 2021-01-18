import * as _ from 'lodash';
import {
  PUSH_DOCTOR_LIST,
} from '../actionTypes';

const initialState = {
    doctorList: []
  }
  
export function doctorsListReducer(state = initialState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
      case PUSH_DOCTOR_LIST:
          newState.doctorList = newState.doctorList.concat(action.doctorList);
        break;
      default:
        return state
    }
    return newState;
  }