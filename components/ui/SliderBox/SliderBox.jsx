
import {useMemo} from "react";
import styles from './SliderBox.module.scss';

export function SliderBox(props) {
    const {label, style, value, id, toggleSliderBox, useLeftSideLabel} = props;
    let refBtn = null;

    const _toggleSliderBox = () => {
      refBtn.blur();
      toggleSliderBox(id);
    };

    //let Components = useMemo(() => {
      const LabelJSX = () => <div className={styles.label}>{label}</div>;
      const SliderJSX = () => (<div className={styles.slider}>
        <button ref={(el) => {refBtn = el}} onClick={_toggleSliderBox} style={value ? {left: "24px"} : null} className={styles.sliderButton}>
          <img className={styles.icon} src={value ? `./checked.svg` : `./close.svg`}/>
        </button>
      </div>);

    let Components = useLeftSideLabel ? [<LabelJSX key={`label-${id}`} />, <SliderJSX key={`slider-${id}`}/>] : [<SliderJSX key={`slider-${id}`}/>, <LabelJSX key={`label-${id}`}/>];
  //  }, [useLeftSideLabel, value])

    return (
      <div style={style} className={[styles.container, value ? styles.checked : null].join(" ")}>
        {Components}
      </div>
    )
}
  