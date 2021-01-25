import styles from './Hr.module.scss';

export interface ComponentProps_Hr {
  style?: React.CSSProperties;
}

export const Hr: React.FC<ComponentProps_Hr> = (props) => {
    const {style} = props;

    return (
      <div style={style} className={styles.container}>

      </div>
    )
}
  