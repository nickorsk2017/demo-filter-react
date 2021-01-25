import {doctorsListFilterActions} from "@store/actions/";
import { useDispatch, useSelector } from "react-redux";
import {DoctorsListFilterReducerType} from "@store/reducers";
import {scheme} from "./scheme";
import {Select, Button} from '@ui';


export function AvailabilitySelect() {
    const storeDoctorsFilter: DoctorsListFilterReducerType = useSelector((state: {doctorsListFilterReducer: DoctorsListFilterReducerType}) => state.doctorsListFilterReducer);
    const dispatch = useDispatch();

    const toggleCheckBox = (checkboxId: string) => {
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

    const isCheckBoxSelected = (checkboxId: string) => {
      return storeDoctorsFilter.availability_checked.includes(checkboxId);
    };

    const clearValues = ({clearCache} : {clearCache: boolean}) => {
      dispatch(doctorsListFilterActions.clearAvailability(clearCache));
    }

    const getCount = () : number => {
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
  