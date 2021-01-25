import styles from './Label.module.scss';

export interface ComponentProps_Label {
  label: string;
  style?: React.CSSProperties;
}

export const Label: React.FC<ComponentProps_Label> = (props) => {
    const {label, style} = props;

    return (
      <div style={style} className={styles.labelContainer}>
        {label}
      </div>
    )
}
  