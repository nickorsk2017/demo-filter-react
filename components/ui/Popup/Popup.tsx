import {Label, CheckBox, Hr, Input, SliderBox, OptionBox} from "..";
import styles from './Popup.module.css';
import {Schemes} from "./types";
import {ComponentProps_OptionBox, ComponentProps_Input, ComponentProps_SliderBox} from "@ui";

export interface ComponentProps_Popup {
  items: Array<any>;
  style?: React.CSSProperties;
  buttons?: {JSX: Array<React.ReactNode>, justifyContent?: string};
}

export const Popup: React.FC<ComponentProps_Popup> = (props) =>  {
    const {items, style, buttons} = props;
    
    const rendeItems = (items: Array<Schemes>) => {
      return items.map((item) => {
        //let props: Schemes | {} = {};
        switch(item.type){
          case "label":
            return <Label key={item.id} label={item.label}/>
          case "hr":
            return <Hr key={item.id}/>
          case "optionbox":
            let propsOptionBox: ComponentProps_OptionBox = {...item, value: item.value(item.id)};
            return <OptionBox key={item.id} {...propsOptionBox} />
          case "sliderBox":
            let propsSliderbox: ComponentProps_SliderBox = {...item, value: item.value(item.id)};
            return <SliderBox key={item.id} {...propsSliderbox} />
          case "input":
            let propsInput: ComponentProps_Input = {...item, value: item.value(item.id)};
            return <Input key={item.id} {...propsInput}/>
          case "checkbox":
            let propsCheckbox = {...item, value: item.value(item.id)};
            return <CheckBox key={item.id} {...propsCheckbox} />
          default: return null
        }
      });
    };
    let _style = style ? {...style} : {};
    if(buttons && Array.isArray(buttons.JSX)){
      _style.paddingBottom = "48px";
    }
    const onClickPopup = (e: React.SyntheticEvent) => {
      e.stopPropagation();
    }
    return (
      <div onClick={onClickPopup} style={_style} className={styles.popupContainer}>
        <div className={styles.popupItems}>
          {rendeItems(items)}
        </div>
        {(buttons && Array.isArray(buttons.JSX)) && <div style={{justifyContent: buttons.justifyContent ? buttons.justifyContent : "flex-start"}} className={styles.popupButtons}>
          {buttons.JSX}
        </div>}
      </div>
    )
}
  