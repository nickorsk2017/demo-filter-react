import styles from './Hr.module.scss';

export function Hr(props) {
    const {label, style} = props;

    return (
      <div style={style} className={styles.container}>
        {label}
      </div>
    )
}
  