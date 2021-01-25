import styles from './OptionBox.module.scss';

export interface ComponentProps_OptionBox {
  label?: string;
  style?: React.CSSProperties;
  prefixJSX?: React.ReactNode;
  sufixJSX?: React.ReactNode;
  value: boolean;
  id: string;
  toggleOpenBox(id: string): void;
}

export const OptionBox: React.FC<ComponentProps_OptionBox> = (props: ComponentProps_OptionBox) =>  {
    const {label, style, prefixJSX, sufixJSX, value, id, toggleOpenBox} = props;

    const _toggleOpenBox = () => {
      toggleOpenBox(id);
    }

    return (
      <div style={style} className={styles.checkBoxContainer}>
        <div className={[styles.checkBoxInputSpec, (value ? styles.checked : null)].join(' ')}>
          <input id={id} onChange={_toggleOpenBox} checked={value} value={label} className={styles.checkBoxInput} type="checkbox"></input>
          <img src="./checked.svg" className={styles.checkBoxInputIcon}/>
        </div>
      
        <label htmlFor={id} className={styles.checkBoxLabel}>
          {prefixJSX}
          <span className={styles.checkBoxLabelText}>{label}</span>
          {sufixJSX}
        </label>
        
      </div>
    )
}
  