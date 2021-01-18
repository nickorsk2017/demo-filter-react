import {Button} from '@ui';

export const scheme = ({isCheckBoxSelected, toggleCheckBox, clearValues, apply, setInsuranceFilterValue, storeDoctorsFilter }) => {

    const getInsurances = () => {
      const items = [
        {
          // will use in a loop later, dont use index
          id: "ACORD",
          type: "checkbox",
          label: "ACORD",
          value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox,
          sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(2)</span>
        },
        {
          // will use in a loop later, dont use index
          id: "AFLAC",
          type: "checkbox",
          label: "AFLAC",
          value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox,
          sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(7)</span>
        },
        {
          // will use in a loop later, dont use index
          id: "AIG",
          type: "checkbox",
          label: "AIG",
          value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox,
          sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(7)</span>
        },
        {
          // will use in a loop later, dont use index
          id: "ANE",
          type: "checkbox",
          label: "ANE",
          value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox,
          sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(7)</span>
        },
        {
          // will use in a loop later, dont use index
          id: "CNA",
          type: "checkbox",
          label: "CNA",
          value: (checkboxId) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox,
          sufixJSX: <span style={{color: "#91A5A7", marginLeft: "8px"}}>(7)</span>
        },
      ];
      return items.filter((item) => {
        return item.label.includes(storeDoctorsFilter.insuranceFilterValue.toUpperCase())
      });
    } 

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
            value: () => {return storeDoctorsFilter.insuranceFilterValue},
            onChange: (newValue) => {
              setInsuranceFilterValue(newValue);
            },
            focusOnInit: true,
          },
          ...getInsurances()
        ],
        buttons: {
          JSX: [<Button key="SPECIALITY_RESET" onClick={clearValues} theme="heartyRed">Reset</Button>, <Button key="SPECIALITY_APPLY" onClick={apply} style={{marginRight: 0}}>Apply</Button>],
          justifyContent: "space-between"
        }
      }
  };