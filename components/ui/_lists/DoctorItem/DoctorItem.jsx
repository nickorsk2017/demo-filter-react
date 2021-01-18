import {memo} from "react";
import styles from './DoctorItem.module.css';

/**
 * USING REACT.MEMO FOR PERFROMANCE
 */
export const DoctorItem = memo((props) => {
    const {doctor} = props;
    const maybePluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

    const getYears = () => {
      return maybePluralize(doctor.experience, "Year");
    }
    const getReviews = () => {
      return maybePluralize(doctor.reviewsCount, "Reviews");
    }


    return (
      <div className={styles.container}>
       
        <div className={styles.left}>

          <div>

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
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            
          </div>
        </div>

      </div>
    )
});
  