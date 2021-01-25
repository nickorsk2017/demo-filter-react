import {memo} from "react";
import {Doctor} from "@_types/doctor"
import styles from './DoctorItem.module.scss';

export interface ComponentProps {
  doctor: Doctor
}

/**
 * USING REACT.MEMO FOR PERFROMANCE
 */
export const DoctorItem: React.FC<ComponentProps> = memo((props) => {
    const {doctor} = props;
    const maybePluralize = (count: number, noun: string, suffix: string = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

    const getYears = () => {
      return maybePluralize(doctor.experience, "Year");
    }
    const getReviews = () => {
      return maybePluralize(doctor.reviewsCount, "Reviews");
    }


    return (
      <div className={styles.container}>
       
        <div className={styles.left}>

          <div className={styles.avatartContainer}>
            <div style={{backgroundImage: `url(${'./photos/doctor.jpg'})`}} className={styles.doctorAvatar}>
              
            </div>
            {doctor.telehealth && <div className={styles.videoIcon}>
                <img src="./video.svg" className={styles.video}/>
              </div>
            }
          </div>
        

          <div className={styles.doctorDataWrapper}>
            <div className={styles.doctorName}>{doctor.name}</div>
            <div className={styles.doctorData}>
              <span className={styles.doctorSpeciality}>{doctor.speciality}</span> <i className={styles.ellipse}></i> 
              <span className={styles.doctorYears}>{getYears()}</span> <i className={styles.ellipse}></i> 
              <span className={styles.doctorReviews}>{getReviews()}</span>
            </div>

            <div className={styles.doctorDataBottom}> 
              {doctor.telehealth && <><span>Video visit</span> <i className={styles.ellipse}></i> </>}
              <span>{doctor.address}</span>
            </div>
          </div>

        </div>

        <div className={styles.right}>
          <div className={styles.rightTop}>
            <div className={styles.avg}><span className={styles.avgLabel}>avg. price</span></div>
            <div className={styles.price}>${doctor.price}</div>
          </div>
          
          <div className={styles.heart}>
            <img src="./heart.svg"/>
          </div>
        </div>

      </div>
    )
});
  