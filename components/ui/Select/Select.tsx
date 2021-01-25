import {useState, useEffect, useRef} from "react";
import {nanoid} from "nanoid";
import {Popup} from "..";
import styles from './Select.module.scss';

export interface ComponentProps_Select {
  label: string;
  stylePopup?: React.CSSProperties;
  prefixJSX?: React.ReactNode;
  disableBorder?: boolean;
  items: Array<any>;
  buttons?: {JSX: Array<React.ReactNode>, justifyContent?: string}
  onClear? : (params: {clearCache: boolean}) => void;
  count?: number;
  onOpen?: () => void; 
}

export const Select: React.FC<ComponentProps_Select> = (props) =>  {
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

    const toggleShown = (e: React.SyntheticEvent) => {
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
      const hide = (e: CustomEvent | Event) => {
        e.stopPropagation();
        if(e instanceof CustomEvent && idSelect !== e.detail.idSelect){
          setOpened(false);
        }
        if(e instanceof Event){
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
    const clear = (e: React.SyntheticEvent) => {
      e.stopPropagation();
      if(typeof onClear === "function"){
        onClear({clearCache: true});
      }
    }

    let _stylePopup: React.CSSProperties = {position: "absolute", left: "0", top: "10px", ...stylePopup};

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
  