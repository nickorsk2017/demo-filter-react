import {useEffect, useState} from "react";
import {useList} from "./hooks";
import {DoctorItem} from "@ui";
import {DoctorsData} from "@mockup";
import styles from './List.module.css';

export function List() {
  const {} = useList();
  let data = DoctorsData.data.items;
  const [list, updateList] = useState(data);

  let timer = null;
 

  useEffect(() => {
 
  }, []);

  const getList = () => {
    return list;
  }

  const isBottom = (element) => {
    return element.scrollHeight - element.scrollTop === element.clientHeight
  }
  const trackScrolling = (event) => {
    if (isBottom(event.target)) {
      more();
    }
  };

  console.log("render!");

  const more = function(timeout = 500){
      clearTimeout(timer);
      timer = setTimeout(() => {
        let newList = list.concat(data);
        updateList(newList);
      }, timeout);
  }

  const renderList = () => {
    return getList().map((doctor, index) => {
      return <DoctorItem key={`doctor-${doctor.id}-${index}`} doctor={doctor} />
    });
  }
  return (
    <div onScroll={trackScrolling} className={styles.list}>
        {renderList()}
    </div>
  )
}
  