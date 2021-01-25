import {doctorsListFilterActions} from "@store/actions/";
import { useDispatch, useSelector } from "react-redux";
import {DoctorsListFilterReducerType} from "@store/reducers";
import {scheme} from "./scheme";
import {Select, Button} from '@ui';

export function InsuranceSelect() {
    const storeDoctorsFilter: DoctorsListFilterReducerType = useSelector((state: {doctorsListFilterReducer: DoctorsListFilterReducerType}) => state.doctorsListFilterReducer);
    const dispatch = useDispatch();

    const setInsuranceFilterValue = (newValue: string) => {
      dispatch(doctorsListFilterActions.updateInsuranceFilterValue(newValue));
    };

    const getCount = () => {
      let count = storeDoctorsFilter.insurance_cache.checkboxs.length;
      return count;
    }

    const toggleCheckBox = (checkboxId: string) => {
      let _checkedIds = [...storeDoctorsFilter.insurance_checked];
      if(_checkedIds.includes(checkboxId)){
        _checkedIds = _checkedIds.filter((_checkboxId) => {
          return checkboxId != _checkboxId;
        });
      } else {
        _checkedIds.push(checkboxId);
      }
      dispatch(doctorsListFilterActions.updateInsuranceChecked(_checkedIds));
    };

    const isCheckBoxSelected = (checkboxId: string) => {
      return storeDoctorsFilter.insurance_checked.includes(checkboxId);
    };

    const clearValues = ({clearCache} : {clearCache: boolean}) => {
      dispatch(doctorsListFilterActions.clearInsurance(clearCache));
    }

    const apply = () => {
      dispatch(doctorsListFilterActions.applyInsurance());
    }
    const onOpen = () => {
      dispatch(doctorsListFilterActions.applyInsurance(true));
    }

    const getScheme = () => {
      return scheme({isCheckBoxSelected, toggleCheckBox, clearValues, apply, setInsuranceFilterValue, storeDoctorsFilter});
    };

    return (
      <>
        <Select onOpen={onOpen} count={getCount()} onClear={clearValues} stylePopup={{width: "375px"}} buttons={getScheme().buttons} items={getScheme().items} label="Insurance"/>
      </>
    )
  }
  