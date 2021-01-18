import styles from './CheckBox.module.scss';

export function CheckBox(props) {
    const {label, style, prefixJSX, sufixJSX, value, id, toggleCheckBox} = props;

    const _toggleCheckBox = () => {
      toggleCheckBox(id);
    }

    return (
      <div style={style} className={styles.checkBoxContainer}>
        <div className={[styles.checkBoxInputSpec, (value ? styles.checked : null)].join(' ')}>
          <input id={id} onChange={_toggleCheckBox} checked={value} value={label} className={styles.checkBoxInput} type="checkbox"></input>
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
  