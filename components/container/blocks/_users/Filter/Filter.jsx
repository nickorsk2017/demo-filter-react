import {useState} from "react";
import {Select, Button} from '@ui';
import { nanoid } from 'nanoid';
import styles from './Filter.module.css';

export function Filter() {

    const [checkedIds, updateChecked] = useState([]);
    const [specialityFilterValue, setSpecialityFilterValue ] = useState("");
    const [insuranceFilterValue, setInsuranceFilterValue ] = useState("");
    const [sortValue, setSortValue ] = useState(null);


    const toggleSortValue = (_sortValue) => {
      setSortValue(_sortValue)
    };

    const toggleCheckBox = (checkboxId) => {
      let _checkedIds = [...checkedIds];
      if(_checkedIds.includes(checkboxId)){
        _checkedIds = _checkedIds.filter((_checkboxId) => {
          return checkboxId != _checkboxId;
        });
      } else {
        _checkedIds.push(checkboxId);
      }
      updateChecked(_checkedIds);
    };

    const isCheckBoxSelected = (checkboxId) => {
      return checkedIds.includes(checkboxId);
    };

    const clearValues = (itemsIds) => {
      let _checkedIds = [...checkedIds];
      _checkedIds = _checkedIds.filter((_checkboxId) => {
        return !itemsIds.checked.includes(_checkboxId);
      });
      updateChecked(_checkedIds);
      itemsIds.inputs.forEach((inputId) => {
        if(inputId === "FILTER_BY_SPECIALITY"){
          setSpecialityFilterValue("")
        }
        if(inputId === "FILTER_BY_INSURANCE_CARRIER"){
          setInsuranceFilterValue("")
        }
      });
      itemsIds.options.forEach((inputId) => {
        if(inputId === "NEXT_AVAILABLE" || inputId === "MOST_EXPERIENCED"){
          setSortValue(null);
        }
      })
    }

    const clearAll = () => {
      updateChecked([]);
      setSpecialityFilterValue("");
      setInsuranceFilterValue("");
      setSortValue(null);
    };

    const availabilityItems = () => {
    
      return { 
        items: [
          {
            // will use in a loop later, dont use index
            id: "AVAILABILITY",
            type: "label",
            label: "Availability",
          },
          {
            // will use in a loop later, dont use index
            id: "TODAY",
            type: "checkbox",
            label: "Today",
            value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(2)</span>
          },
          {
            // will use in a loop later, dont use index
            id: "NEXT_3_DAYS",
            type: "checkbox",
            label: "Next 3 days",
            value: (checkboxId) => isCheckBoxSelected(checkboxId),
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(2)</span>
          },
          {
            id: "NEXT_2_WEEKS",
            type: "checkbox",
            label: "Next 2 weeks",
            value: (checkboxId) => isCheckBoxSelected(checkboxId),
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(2)</span>
          },
          {
            id: "AVAILABILITY_HR",
            type: "hr"
          },
          {
            id: "TELEHEALTH",
            type: "checkbox",
            label: "Telehealth",
            value: (checkboxId) => isCheckBoxSelected(checkboxId),
            toggleCheckBox,
            prefixJSX: <div style={{width: "24px", height: "24px", background: "#F5E585", borderRadius: "50px", display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: "8px"}}><img style={{width: "12px", height: "12px"}} src="./video.svg"/></div>,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(#X)</span>
          },
          {
            id: "ACCEPTS_NEW_PATIENTS",
            type: "checkbox",
            label: "Accepts new patients",
            value: (checkboxId) => isCheckBoxSelected(checkboxId),
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(2)</span>
          },
          {
            id: "SCHEDULES_ONLINE",
            type: "checkbox",
            label: "Schedules online",
            value: (checkboxId) => isCheckBoxSelected(checkboxId),
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(2)</span>
          },
          {
            id: "TREATS_СHILDREN",
            type: "checkbox",
            label: "Treats сhildren",
            value: (checkboxId) => isCheckBoxSelected(checkboxId),
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(2)</span>
          },

        ],
        buttons: {
          JSX: [<Button key="AVAILABILITY_RESET" onClick={() => {}} theme="heartyRed">Reset</Button>, <Button key="AVAILABILITY_APPLY" onClick={() => {}} style={{marginRight: 0}}>Apply</Button>],
          justifyContent: "space-between"
        }
      }
    };

    const specialityItems = () => {
      return { 
        items: [
          {
            id: "FILTER_BY_SPECIALITY",
            type: "input",
            placeholder: "Filter by speciality",
            value: () => {return specialityFilterValue},
            onChange: (newValue) => {
              setSpecialityFilterValue(newValue);
            },
            focusOnInit: true,
          },
          {
            // will use in a loop later, dont use index
            id: "DENTIST",
            type: "checkbox",
            label: "Dentist",
            value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(7)</span>
          },
          {
            // will use in a loop later, dont use index
            id: "PLASTIC_SURGEON",
            type: "checkbox",
            label: "Plastic Surgeon",
            value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(7)</span>
          },
        ],
        buttons: {
          JSX: [<Button key="SPECIALITY_RESET" onClick={() => {}} theme="heartyRed">Reset</Button>, <Button key="SPECIALITY_APPLY" onClick={() => {}} style={{marginRight: 0}}>Apply</Button>],
          justifyContent: "space-between"
        }
      }
    };

    const insuranceItems = () => {
      return {
        items: [
          {
            id: "PROVIDES_OTHER_PAYMENTS",
            type: "sliderBox",
            label: "Provides other than insurance payment options",
            value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
            toggleSliderBox: toggleCheckBox,
            useLeftSideLabel: true
          },
          {
            id: "INSURANCE_HR",
            type: "hr"
          },
          {
            id: "FILTER_BY_INSURANCE_CARRIER",
            type: "input",
            typeInput: "search",
            placeholder: "Filter by insurance carrier",
            value: () => {return insuranceFilterValue},
            onChange: (newValue) => {
              setInsuranceFilterValue(newValue);
            },
            focusOnInit: true,
          },
          {
            // will use in a loop later, dont use index
            id: "DENTIST",
            type: "checkbox",
            label: "Dentist",
            value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(7)</span>
          },
          {
            // will use in a loop later, dont use index
            id: "PLASTIC_SURGEON",
            type: "checkbox",
            label: "Plastic Surgeon",
            value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
            toggleCheckBox,
            sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(7)</span>
          },
        ],
        buttons: {
          JSX: [<Button key="SPECIALITY_RESET" onClick={() => {}} theme="heartyRed">Reset</Button>, <Button key="SPECIALITY_APPLY" onClick={() => {}} style={{marginRight: 0}}>Apply</Button>],
          justifyContent: "space-between"
        }
      }
    };

    const sortItems = () => {
      return {
        items: [
          {
            // will use in a loop later, dont use index
            id: "SORT_BY",
            type: "label",
            label: "Sort by",
          },
          {
            // will use in a loop later, dont use index
            id: "NEXT_AVAILABLE",
            type: "optionbox",
            label: "Next available",
            value: (sortBoxId) => sortValue === sortBoxId,
            toggleOpenBox: toggleSortValue
          },
          {
            // will use in a loop later, dont use index
            id: "MOST_EXPERIENCED",
            type: "optionbox",
            label: "Most Experienced",
            value: (sortBoxId) => sortValue === sortBoxId,
            toggleOpenBox: toggleSortValue
          },
        ]
      }
    }

    return (
      <div className={styles.filter}>
        <Select onClear={clearValues} buttons={availabilityItems().buttons} items={availabilityItems().items} label="Availability"/>
        <Select onClear={clearValues} buttons={specialityItems().buttons}  items={specialityItems().items} label="Speciality"/>
        <Select onClear={clearValues} stylePopup={{width: "375px"}} buttons={insuranceItems().buttons} items={insuranceItems().items} label="Insurance"/>
        <Select onClear={clearValues} items={sortItems().items} prefixJSX={<img style={{width: "12px", height: "12px", marginRight: "10px"}} src="./sort-icon.svg"/>} disableBorder={true} label="Sort"/>
        <Button onClick={clearAll} theme="heartyRed">Clear filters</Button>
      </div>
    )
  }
  