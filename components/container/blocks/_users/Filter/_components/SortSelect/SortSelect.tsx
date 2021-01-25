import {doctorsListFilterActions} from "@store/actions/";
import {DoctorsListFilterReducerType} from "@store/reducers";
import { useDispatch, useSelector } from "react-redux";
import {scheme} from "./scheme";
import {Select} from '@ui';

export function SortSelect() {
    const storeDoctorsFilter: DoctorsListFilterReducerType = useSelector((state: {doctorsListFilterReducer: DoctorsListFilterReducerType}) => state.doctorsListFilterReducer);
    const dispatch = useDispatch();

    const toggleSortValue = (_sortValue: string) => {
      dispatch(doctorsListFilterActions.setSortValue(_sortValue));
    };

    const clearValues = ({clearCache} : {clearCache: boolean}) => {
      dispatch(doctorsListFilterActions.clearSort(clearCache));
    }
    const getScheme = () => {
      return scheme({toggleSortValue, storeDoctorsFilter});
    };

    return (
      <>
        <Select stylePopup={{minHeight: "162px"}} onClear={clearValues} items={getScheme().items} prefixJSX={<img style={{width: "12px", height: "12px", marginRight: "10px"}} src="./sort-icon.svg"/>} disableBorder={true} label="Sort"/>
      </>
    )
  }
  