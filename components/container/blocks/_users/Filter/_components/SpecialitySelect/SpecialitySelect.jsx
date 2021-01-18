import {doctorsListFilterActions} from "@store/actions/";
import { useDispatch, useSelector } from "react-redux";
import {scheme} from "./scheme";
import {Select} from '@ui';
import styles from './SpecialitySelect.module.css';

export function SpecialitySelect() {
    const storeDoctorsFilter = useSelector(state => state.doctorsListFilterReducer);
    const dispatch = useDispatch();

    const setSpecialityFilterValue = (newValue) => {
      dispatch(doctorsListFilterActions.updateSpecialityFilterValue(newValue));
    };

    const getCount = () => {
      let count = storeDoctorsFilter.speciality_cache.checkboxs.length;
      return count;
    }

    const toggleCheckBox = (checkboxId) => {
      let _checkedIds = [...storeDoctorsFilter.speciality_checked];
      if(_checkedIds.includes(checkboxId)){
        _checkedIds = _checkedIds.filter((_checkboxId) => {
          return checkboxId != _checkboxId;
        });
      } else {
        _checkedIds.push(checkboxId);
      }
      dispatch(doctorsListFilterActions.updateSpecialityChecked(_checkedIds));
    };

    const isCheckBoxSelected = (checkboxId) => {
      return storeDoctorsFilter.speciality_checked.includes(checkboxId);
    };

    const clearValues = ({clearCache}) => {
      dispatch(doctorsListFilterActions.clearSpeciality(clearCache));
    }
    const apply = () => {
      dispatch(doctorsListFilterActions.applySpeciality());
    }
    const onOpen = () => {
      dispatch(doctorsListFilterActions.applySpeciality(true));
    }
    const getScheme = () => {
      return scheme({isCheckBoxSelected, toggleCheckBox, clearValues, apply, setSpecialityFilterValue, storeDoctorsFilter});
    };

    return (
      <>
        <Select onOpen={onOpen} count={getCount()} onClear={clearValues} buttons={getScheme().buttons}  items={getScheme().items} label="Speciality"/>
      </>
    )
  }
  