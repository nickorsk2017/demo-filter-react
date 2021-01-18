import {doctorsListFilterActions} from "@store/actions/";
import { useDispatch, useSelector } from "react-redux";
import {scheme} from "./scheme";
import {Select, Button} from '@ui';
import styles from './AvailabilitySelect.module.css';

export function AvailabilitySelect() {
    const storeDoctorsFilter = useSelector(state => state.doctorsListFilterReducer);
    const dispatch = useDispatch();

    const toggleCheckBox = (checkboxId) => {
      let _checkedIds = [...storeDoctorsFilter.availability_checked];
      if(_checkedIds.includes(checkboxId)){
        _checkedIds = _checkedIds.filter((_checkboxId) => {
          return checkboxId != _checkboxId;
        });
      } else {
        _checkedIds.push(checkboxId);
      }
      dispatch(doctorsListFilterActions.updateAvailabilityChecked(_checkedIds));
    };

    const isCheckBoxSelected = (checkboxId) => {
      return storeDoctorsFilter.availability_checked.includes(checkboxId);
    };

    const clearValues = ({clearCache}) => {
      dispatch(doctorsListFilterActions.clearAvailability(clearCache));
    }

    const getCount = () => {
      let count = storeDoctorsFilter.availability_cache.checkboxs.length;
      return count;
    }

    const apply = () => {
      dispatch(doctorsListFilterActions.applyAvailability());
    }
    const onOpen = () => {
      dispatch(doctorsListFilterActions.applyAvailability(true));
    }
    
    const getScheme = () => {
      return scheme({isCheckBoxSelected, toggleCheckBox, clearValues, apply});
    };

    return (
      <>
        <Select onOpen={onOpen} count={getCount()} onClear={clearValues} buttons={getScheme().buttons} items={getScheme().items} label="Availability"/>
      </>
    )
  }
  