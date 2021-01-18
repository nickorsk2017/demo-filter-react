
import { useDispatch } from "react-redux";
import {doctorsListFilterActions} from "@store/actions/";
import {Button} from '@ui';
import {AvailabilitySelect, SpecialitySelect, InsuranceSelect, SortSelect} from "./_components";
import styles from './Filter.module.css';

export function Filter() {
    const dispatch = useDispatch();

    const clearAll = () => {
      dispatch(doctorsListFilterActions.clearAllFilters())
    };

    return (
      <div className={styles.filter}>
        <AvailabilitySelect/>
        <SpecialitySelect/>
        <InsuranceSelect/>
        <SortSelect/>
        <Button onClick={clearAll} theme="heartyRed">Clear filters</Button>
      </div>
    )
  }
  