import {Label, CheckBox, Hr, Input, SliderBox, OptionBox} from "../";
import styles from './Popup.module.css';

export function Popup(props) {
    const {items, style, buttons} = props;
    
    const rendeItems = (items) => {
      return items.map((item) => {
        let props = {};
        switch(item.type){
          case "label":
            return <Label key={item.id} label={item.label}/>
          case "hr":
            return <Hr key={item.id}/>
          case "optionbox":
            props = {...item, value: item.value(item.id)};
            return <OptionBox key={item.id} {...props} />
          case "sliderBox":
            props = {...item, value: item.value(item.id)};
            return <SliderBox key={item.id} {...props} />
          case "input":
            props = {...item, value: item.value(item.id)};
            return <Input key={item.id} {...props}/>
          case "checkbox":
            props = {...item, value: item.value(item.id)};
            return <CheckBox key={item.id} {...props} />
          default: return null
        }
      });
    };
    let _style = style ? {...style} : {};
    if(buttons && Array.isArray(buttons.JSX)){
      _style.paddingBottom = "48px";
    }
    return (
      <div style={_style} className={styles.popupContainer}>
        <div className={styles.popupItems}>
          {rendeItems(items)}
        </div>
        {(buttons && Array.isArray(buttons.JSX)) && <div style={{justifyContent: buttons.justifyContent ? buttons.justifyContent : null}} className={styles.popupButtons}>
          {buttons.JSX}
        </div>}
      </div>
    )
}
  