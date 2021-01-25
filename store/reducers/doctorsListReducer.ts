import * as _ from 'lodash';
import {Doctor} from "@_types/doctor";
import {
  PUSH_DOCTOR_LIST,
} from '../actionTypes';

export type DoctorsListReducerType = {
  doctorList: Array<Doctor>;
};
type ActionType = {type: string; doctorList: Array<Doctor>};

const initialState: DoctorsListReducerType = {
  doctorList: []
}
  
export function doctorsListReducer(state = initialState, action: ActionType) {
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