import styles from './Label.module.scss';

export function Label(props) {
    const {label, style} = props;

    return (
      <div style={style} className={styles.labelContainer}>
        {label}
      </div>
    )
}
  