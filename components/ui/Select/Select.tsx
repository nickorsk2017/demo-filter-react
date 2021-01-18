import {useState} from "react";
import {Popup} from "..";
import styles from './Select.module.scss';

export function Select(props) {
    const {label, disableBorder, prefixJSX, items, buttons, stylePopup, onClear} = props;
    const [isOpened, setOpened] = useState(false);
    const toggleShown = (e) => {
      e.stopPropagation();
      setOpened(!isOpened);
    };

    const getCheckedCount = () => {
      let count = 0;
      items.forEach(item => {
        if((item.type === "checkbox" || item.type === "optionbox" || item.type === "sliderBox") && item.value(item.id)){
          count++;
        }
        if(item.type === "input" && item.value() && item.value().length > 0){
          count++;
        }
      });
      return count;
    }
    const count = getCheckedCount();

    const clear = (e) => {
      e.stopPropagation();
      let itemsIds = {
        checked: [],
        inputs: [],
        options: []
      };
      let _items = [...items];
      _items = _items.map((item) => {
        if((item.type === "checkbox" || item.type === "sliderBox") && item.value(item.id)){
          itemsIds.checked.push(item.id);
        }
        if(item.type === "input" && item.value() && item.value().length > 0){
          itemsIds.inputs.push(item.id);
        }
        if(item.type === "optionbox"){
          itemsIds.options.push(item.id);
        }
      })
      onClear(itemsIds);
    }

    let _stylePopup = {position: "absolute", left: "0", top: "10px", ...stylePopup};

    return (
      <div className={[styles.selectContainer, (isOpened ? styles.isOpened : null), (disableBorder ? styles.disableBorder : null)].join(' ')}>
        <div onClick={toggleShown} className={styles.selectValue}>
          {prefixJSX}
          <span className={styles.selectValueResult}>{label}</span>
          {(count > 0) && <span className={styles.count}> • {count}</span>}
          {(count === 0 || !isOpened) && <img src="./down-arrow.svg" className={styles.selectValueArrow}/>}
          {(count > 0 && isOpened) && <img onClick={clear} src="./close.svg" className={styles.cancel}/>}
        </div>
        <div className={styles.selectPopup}>
          {isOpened && <Popup style={_stylePopup} buttons={buttons} items={items}/>}
        </div>
      </div>
    )
}
  