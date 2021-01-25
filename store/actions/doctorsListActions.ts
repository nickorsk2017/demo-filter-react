import {
  PUSH_DOCTOR_LIST
} from '../actionTypes';
import {Doctor} from "@_types/doctor";


export const pushDoctorList = (doctorList: Array<Doctor>) => (
  {
    type: PUSH_DOCTOR_LIST,
    doctorList
  }
)