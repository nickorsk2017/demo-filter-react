import {useEffect} from "react";
import {useThrottle} from './_hooks';
import styles from './Input.module.scss';

export interface ComponentProps_Input {
  onChange(newValue: string): void;
  value: string;
  style?: React.CSSProperties;
  typeInput?: "search" | "text" | "password" | "email" | "number";
  placeholder: string;
  suffixJSX?: React.ReactNode;
  focusOnInit: boolean;
}

/**
 *  USING THROTTLE REACT COMPONENT PATTERN
 *  Callback will running after 300 ms, and input not will be blocked
 */
export const Input: React.FC<ComponentProps_Input> = (props) => {
    const {onChange, value, style, typeInput, placeholder, suffixJSX, focusOnInit} = props;
  
    const {onBlurThrottle, onChangeThrottle, updateValueThrottle} = useThrottle({
      callback: onChange
    });
    const inputRef: React.RefObject<HTMLInputElement> = updateValueThrottle(value);

    useEffect(()=>{
      if(focusOnInit && inputRef.current){
        inputRef.current.focus();
      }
    },[]);

    return (
      <div style={style} className={styles.container}>
        <input
          className={[styles.input, typeInput == "search" ? styles.searchType : null].join(" ")}
          type={typeInput || "text"}
          placeholder={placeholder || ""}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>): void => onBlurThrottle(e, value)}
          onChange={onChangeThrottle}
          defaultValue={value}
          ref={inputRef}
        ></input>
        <div className={styles.suffixJSX}>
          {suffixJSX}
        </div>
      </div>
    )
}
  