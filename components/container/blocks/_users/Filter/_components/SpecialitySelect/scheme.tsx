import {Button} from '@ui';
import { useSelector } from "react-redux";

export const scheme = ({isCheckBoxSelected, toggleCheckBox, clearValues, apply, setSpecialityFilterValue, storeDoctorsFilter }) => {
    const storeDoctorsList = useSelector(state => state.doctorsListReducer.doctorList);

    const getSpeciality = () => {
      const specialities = [];
      let specialitiesCounts = {};
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
          value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
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
        JSX: [<Button key="SPECIALITY_RESET" onClick={clearValues} theme="heartyRed">Reset</Button>, <Button key="SPECIALITY_APPLY" onClick={apply} style={{marginRight: 0}}>Apply</Button>],
        justifyContent: "space-between"
      }
    }
  };