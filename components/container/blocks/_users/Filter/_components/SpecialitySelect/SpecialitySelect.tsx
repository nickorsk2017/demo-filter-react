import {doctorsListFilterActions} from "@store/actions/";
import { useDispatch, useSelector } from "react-redux";
import {DoctorsListFilterReducerType, DoctorsListReducerType} from "@store/reducers";
import {scheme} from "./scheme";
import {Select} from '@ui';

export function SpecialitySelect() {
    const storeDoctorsFilter: DoctorsListFilterReducerType = useSelector((state: {doctorsListFilterReducer: DoctorsListFilterReducerType}) => state.doctorsListFilterReducer);
    const dispatch = useDispatch();

    const setSpecialityFilterValue = (newValue: string) => {
      dispatch(doctorsListFilterActions.updateSpecialityFilterValue(newValue));
    };

    const getCount = () => {
      let count = storeDoctorsFilter.speciality_cache.checkboxs.length;
      return count;
    }

    const toggleCheckBox = (checkboxId: string) => {
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

    const isCheckBoxSelected = (checkboxId: string) => {
      return storeDoctorsFilter.speciality_checked.includes(checkboxId);
    };

    const clearValues = ({clearCache}: {clearCache: boolean}) => {
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
  