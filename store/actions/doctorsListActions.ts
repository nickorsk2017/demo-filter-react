import {
  PUSH_DOCTOR_LIST
} from '../actionTypes';


export const pushDoctorList = (doctorList) => (
  {
    type: PUSH_DOCTOR_LIST,
    doctorList
  }
)