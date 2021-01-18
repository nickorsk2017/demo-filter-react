import styles from './Button.module.scss';

export function Button(props) {
    const {children, style, theme, onClick} = props;
    const getTheme = () => {
      switch(theme){
        case("heartyRed"):
          return styles.containerHeartyRed
        default:
        return styles.container
      }
    }

    return (
      <button onClick={onClick} style={style} className={getTheme()}>
        {children}
      </button>
    )
}
  