import styles from './Button.module.scss';

export interface ComponentProps_Button {
  children: React.ReactNode;
  style?: React.CSSProperties;
  theme?: "HEARTY_RED";
  onClick: (prop?: any) => void;
}

export const Button: React.FC<ComponentProps_Button> = (props) => {
    const {children, style, theme, onClick} = props;
    const getTheme = () => {
      switch(theme){
        case("HEARTY_RED"):
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
  