import {useState, useEffect, useRef} from "react";
import {nanoid} from "nanoid";
import {Popup} from "..";
import styles from './Select.module.scss';
import { type } from "os";

export function Select(props) {
    const {
      label,
      disableBorder,
      prefixJSX,
      items,
      buttons,
      stylePopup,
      onClear,
      count,
      onOpen,
    } = props;
    const [isOpened, setOpened] = useState(false);
    const idSelect = useRef(nanoid());

    const fireOpenEvent = () => {
      const event = new CustomEvent('select.opend', {detail: {
        idSelect: idSelect.current
      }});
      window.dispatchEvent(event);
    };
    const toggleShown = (e) => {
      e.stopPropagation();
      if(!isOpened){
        fireOpenEvent();
      }
      if(typeof onOpen == "function"){
        onOpen();
      }
      setOpened(!isOpened);
    };

    useEffect(() => {
      const hide = (e) => {
        e.stopPropagation();
        if(idSelect !== e.detail.idSelect){
          setOpened(false);
        }
      };
      window.addEventListener("click", hide);
      window.addEventListener("select.opend", hide);
      return () => {
        window.removeEventListener("select.opend", hide);
        window.removeEventListener("click", hide);
      }
    }, []);

    const _count = count || 0;
    const clear = (e) => {
      e.stopPropagation();
      onClear({clearCache: true});
    }

    let _stylePopup = {position: "absolute", left: "0", top: "10px", ...stylePopup};

    return (
      <div className={[styles.selectContainer, (isOpened ? styles.isOpened : null), (disableBorder ? styles.disableBorder : null)].join(' ')}>
        <div onClick={toggleShown} className={styles.selectValue}>
          {prefixJSX}
          <span className={styles.selectValueResult}>{label}</span>
          {(_count > 0) && <span className={styles.count}> • {_count}</span>}
          {(_count === 0 || !isOpened) && <img src="./down-arrow.svg" className={styles.selectValueArrow}/>}
          {(_count > 0 && isOpened) && <img onClick={clear} src="./close.svg" className={styles.cancel}/>}
        </div>
        <div className={styles.selectPopup}>
          {isOpened && <Popup style={_stylePopup} buttons={buttons} items={items}/>}
        </div>
      </div>
    )
}
  