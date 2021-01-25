export type LabelScheme = {
    id: string;
    type: "label";
    label: string;
};
export type CheckBoxScheme = {
    id: string;
    type: "checkbox";
    label: string;
    value: (checkboxId: string) => boolean;
    toggleCheckBox: (checkboxId: string) => void;
    prefixJSX?: React.ReactNode;
    sufixJSX?: React.ReactNode;
};
export type HrScheme =  {
    id: string;
    type: "hr";
};
export type SliderboxScheme = {
    id: string;
    type: "sliderBox";
    label: string;
    value: (sliderboxId: string) => boolean;
    toggleSliderBox: (sliderboxId: string) => void;
    useLeftSideLabel: boolean;
};
export type InputScheme = {
    id: string;
    type: "input";
    typeInput?: "search";
    placeholder: string;
    value: (id: string) => string;
    onChange: (newValue: string) => void;
    focusOnInit: boolean;
};
export type OptionboxScheme = {
    type: "optionbox";
    label: string;
    style?: React.CSSProperties;
    prefixJSX?: React.ReactNode;
    sufixJSX?: React.ReactNode;
    value: (id: string) => boolean;
    id: string;
    toggleOpenBox(id: string): void;
};

export type Schemes = LabelScheme | CheckBoxScheme | HrScheme | SliderboxScheme | InputScheme | OptionboxScheme;