import {useEffect} from "react";
import {pushDoctorList} from "@store/actions/doctorsListActions";
import {DoctorsListReducerType, DoctorsListFilterReducerType} from "@store/reducers";
import moment from 'moment';
import {Doctor} from "@_types/doctor";
import { useSelector, useDispatch } from "react-redux";
import {DoctorItem} from "@ui";
import {DoctorsData} from "@mockup";
import styles from './List.module.css';

export function List() {
  const storeDoctorsFilter: DoctorsListFilterReducerType = useSelector((state: {doctorsListFilterReducer: DoctorsListFilterReducerType}) => state.doctorsListFilterReducer);
  const storeDoctorsList = useSelector((state: {doctorsListReducer: DoctorsListReducerType}) => state.doctorsListReducer.doctorList);
  let data = DoctorsData.data.items;
  const dispatch = useDispatch();
  let timer: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    more();
  }, []);

  const getList = () => {
    let today: moment.Moment = moment();

    return storeDoctorsList.filter((doctor) => {
      let shownDoctor = true;
      let timeValid = null;
      // time 
      if(storeDoctorsFilter.availability_cache.checkboxs.includes("NEXT_2_WEEKS") && doctor.offline_available){
        const future = moment(doctor.offline_available, 'MM/DD/YYYY');
        const diff = today.diff(future, 'days');
        if(!timeValid){
          timeValid = diff >= 14;
        }
      }
      if(storeDoctorsFilter.availability_cache.checkboxs.includes("NEXT_3_DAYS") && doctor.offline_available){
        const future = moment(doctor.offline_available, 'MM/DD/YYYY');
        const diff = today.diff(future, 'days');
        if(!timeValid){
          timeValid = diff >= 3;
        }
      }
      if(storeDoctorsFilter.availability_cache.checkboxs.includes("TODAY") && doctor.offline_available){
        const future = moment(doctor.offline_available, 'MM/DD/YYYY');
        const diff = today.diff(future, 'days');
        if(!timeValid){
          timeValid = diff == 0;
        }
      }

      if(storeDoctorsFilter.availability_cache.checkboxs.includes("ACCEPTS_NEW_PATIENTS") && !doctor.acceptNew){
        shownDoctor = false;
      }
      if(storeDoctorsFilter.availability_cache.checkboxs.includes("TELEHEALTH") && !doctor.telehealth){
        shownDoctor = false;
      }
      if(storeDoctorsFilter.availability_cache.checkboxs.includes("ACCEPTS_NEW_PATIENTS") && !doctor.acceptNew){
        shownDoctor = false;
      }
      // specialities
      if(storeDoctorsFilter.speciality_cache.checkboxs.length > 0){
        shownDoctor = storeDoctorsFilter.speciality_cache.checkboxs.includes(doctor.speciality.toUpperCase());
      }
      //insurance
      if(storeDoctorsFilter.insurance_cache.checkboxs.length > 0){
        shownDoctor = false;
      }
      return (shownDoctor && (timeValid === null || timeValid));
    }).sort((doctorA: Doctor, doctorB: Doctor) => {

      if(storeDoctorsFilter.sort_value === "NEXT_AVAILABLE"){
        const timeDcotorA = moment(doctorA.offline_available, 'MM/DD/YYYY');
        const timeDcotorB = moment(doctorB.offline_available, 'MM/DD/YYYY');
        if(timeDcotorA > timeDcotorB){
          return 1
        } else {
          return -1
        }
      }
      if(storeDoctorsFilter.sort_value === "MOST_EXPERIENCED"){
        const reviewsDcotorA = doctorA.reviewsCount;
        const reviewsDcotorB = doctorB.reviewsCount;
        if(reviewsDcotorA < reviewsDcotorB){
          return 1
        } else {
          return -1
        }
      }
      return 0;
    });
  }

  const isBottom = (element: HTMLDivElement) => {
    if(element){
      return element.scrollHeight - element.scrollTop === element.clientHeight
    }
    return false;
  }
  const trackScrolling = (event: React.SyntheticEvent<HTMLDivElement>) => {
    if (isBottom(event.currentTarget)) {
      more();
    }
  };

  const more = function(timeout = 500){
      if(timer){
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        dispatch(pushDoctorList(data))
      }, timeout);
  }

  const renderList = () => {
    return getList().map((doctor, index) => {
      return <DoctorItem key={`doctor-${doctor.id}-${index}`} doctor={doctor} />
    });
  }
  return (
    <div onScroll={trackScrolling} className={styles.list}>
        {renderList()}
    </div>
  )
}
  