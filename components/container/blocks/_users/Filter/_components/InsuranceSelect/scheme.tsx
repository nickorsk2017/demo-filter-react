import {Button} from '@ui';
import {Schemes, CheckBoxScheme} from "@ui";
import {DoctorsListFilterReducerType} from "@store/reducers";

type PropsType = {
  isCheckBoxSelected: (checkboxId: string) => boolean;
  toggleCheckBox: (checkboxId: string) => void;
  clearValues: ({clearCache}: {clearCache: boolean}) => void;
  apply: () => void;
  setInsuranceFilterValue: (newValue: string) => void;
  storeDoctorsFilter: DoctorsListFilterReducerType;
};
type ButtonsType = {JSX: Array<React.ReactNode>, justifyContent?: string};

export const scheme = ({isCheckBoxSelected, toggleCheckBox, clearValues, apply, setInsuranceFilterValue, storeDoctorsFilter } : PropsType) : {items: Array<Schemes>, buttons: ButtonsType} => {

    const getInsurances = (): Array<CheckBoxScheme> => {

      const items: Array<CheckBoxScheme>  = [
        {
          // will use in a loop later, dont use index
          id: "ACORD",
          type: "checkbox",
          label: "ACORD",
          value: (checkboxId: string) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox
        },
        {
          // will use in a loop later, dont use index
          id: "AFLAC",
          type: "checkbox",
          label: "AFLAC",
          value: (checkboxId: string) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox
        },
        {
          // will use in a loop later, dont use index
          id: "AIG",
          type: "checkbox",
          label: "AIG",
          value: (checkboxId: string) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox
        },
        {
          // will use in a loop later, dont use index
          id: "ANE",
          type: "checkbox",
          label: "ANE",
          value: (checkboxId: string) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox
        },
        {
          // will use in a loop later, dont use index
          id: "CNA",
          type: "checkbox",
          label: "CNA",
          value: (checkboxId: string) => {return isCheckBoxSelected(checkboxId)},
          toggleCheckBox
        },
      ];
      return items.filter((item: CheckBoxScheme) => {
        return item.label.includes(storeDoctorsFilter.insuranceFilterValue.toUpperCase())
      });
    }

    return {
        items: [
          {
            id: "PROVIDES_OTHER_PAYMENTS",
            type: "sliderBox",
            label: "Provides other than insurance payment options",
            value: (checkboxId: string) => {return isCheckBoxSelected(checkboxId)},
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
            onChange: (newValue: string) => {
              setInsuranceFilterValue(newValue);
            },
            focusOnInit: true,
          },
          ...getInsurances()
        ],
        buttons: {
          JSX: [<Button key="SPECIALITY_RESET" onClick={clearValues} theme="HEARTY_RED">Reset</Button>, <Button key="SPECIALITY_APPLY" onClick={apply} style={{marginRight: 0}}>Apply</Button>],
          justifyContent: "space-between"
        }
      }
  };