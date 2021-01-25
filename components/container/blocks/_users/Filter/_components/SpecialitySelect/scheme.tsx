import {Button} from '@ui';
import {Schemes, CheckBoxScheme} from "@ui";
import {DoctorsListReducerType, DoctorsListFilterReducerType} from "@store/reducers";
import { useSelector } from "react-redux";

type PropsType = {
  isCheckBoxSelected: (checkboxId: string) => boolean;
  toggleCheckBox: (checkboxId: string) => void;
  clearValues: ({clearCache}: {clearCache: boolean}) => void;
  apply: () => void;
  setSpecialityFilterValue: (newValue: string) => void;
  storeDoctorsFilter: DoctorsListFilterReducerType;
};
type ButtonsType = {JSX: Array<React.ReactNode>, justifyContent?: string};

export const scheme = ({isCheckBoxSelected, toggleCheckBox, clearValues, apply, setSpecialityFilterValue, storeDoctorsFilter } : PropsType) : {items: Array<Schemes>, buttons: ButtonsType} => {
    const storeDoctorsList = useSelector((state: {doctorsListReducer: DoctorsListReducerType}) => state.doctorsListReducer.doctorList);

    const getSpeciality = (): Array<CheckBoxScheme> => {
      const specialities: Array<string> = [];
      let specialitiesCounts: {
        [key: string]: number;
      } = {};
      storeDoctorsList.forEach((doctor) => {
        specialitiesCounts[doctor.speciality] = (specialitiesCounts[doctor.speciality] || 0) + 1;
        if(!specialities.includes(doctor.speciality) && doctor.speciality.includes(storeDoctorsFilter.specialityFilterValue)){
          specialities.push(doctor.speciality);
        }
      });

      return specialities.map((speciality) => {   
        return  {
          // will use in a loop later, dont use index
          id: speciality.toUpperCase(),
          type: "checkbox",
          label: speciality,
          value: (checkboxId: string) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox,
          sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>({specialitiesCounts[speciality]})</span>
        };
      });
    };

    return { 
      items: [
        {
          id: "FILTER_BY_SPECIALITY",
          type: "input",
          placeholder: "Filter by speciality",
          value: () => {return storeDoctorsFilter.specialityFilterValue},
          onChange: (newValue) => {
            setSpecialityFilterValue(newValue);
          },
          focusOnInit: true,
        },
        ...getSpeciality()
      ],
      buttons: {
        JSX: [<Button key="SPECIALITY_RESET" onClick={clearValues} theme="HEARTY_RED">Reset</Button>, <Button key="SPECIALITY_APPLY" onClick={apply} style={{marginRight: 0}}>Apply</Button>],
        justifyContent: "space-between"
      }
    }
  };