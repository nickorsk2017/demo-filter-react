
import styles from './SliderBox.module.scss';

export interface ComponentProps_SliderBox {
  label: string;
  style?: React.CSSProperties;
  value: boolean;
  id: string;
  toggleSliderBox(id: string): void;
  useLeftSideLabel: boolean;
}

export const SliderBox: React.FC<ComponentProps_SliderBox> = (props) =>  {
    const {label, style, value, id, toggleSliderBox, useLeftSideLabel} = props;
    let refBtn: HTMLButtonElement | null = null;

    const _toggleSliderBox = () => {
      if(refBtn){
        refBtn.blur();
      }
      toggleSliderBox(id);
    };

    const LabelJSX = () => <div className={styles.label}>{label}</div>;
    const SliderJSX = () => (
    <div className={styles.slider}>
      <button ref={(el) => {refBtn = el}} onClick={_toggleSliderBox} style={value ? {left: "24px"} : undefined} className={styles.sliderButton}>
      <img className={styles.icon} src={value ? `./checked.svg` : `./close.svg`}/>
      </button>
    </div>);
    let Components = useLeftSideLabel ? [<LabelJSX key={`label-${id}`} />, <SliderJSX key={`slider-${id}`}/>] : [<SliderJSX key={`slider-${id}`}/>, <LabelJSX key={`label-${id}`}/>];

    return (
      <div style={style} className={[styles.container, value ? styles.checked : null].join(" ")}>
        {Components}
      </div>
    )
}
  