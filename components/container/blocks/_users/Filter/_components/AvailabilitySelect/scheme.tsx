import {Button} from '@ui';

export const scheme = ({isCheckBoxSelected, toggleCheckBox, clearValues, apply }) => {
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
        JSX: [<Button key="AVAILABILITY_RESET" onClick={clearValues} theme="heartyRed">Reset</Button>, <Button key="AVAILABILITY_APPLY" onClick={apply} style={{marginRight: 0}}>Apply</Button>],
        justifyContent: "space-between"
      }
    }
  };