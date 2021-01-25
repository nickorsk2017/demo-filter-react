import {DoctorsListFilterReducerType} from "@store/reducers";
import {Schemes} from "@ui";

type PropsType = {
  toggleSortValue: (_sortValue: string) => void;
  storeDoctorsFilter: DoctorsListFilterReducerType
};

export const scheme = ({toggleSortValue, storeDoctorsFilter }: PropsType) : {items: Array<Schemes>} => {
    return {
      items: [
        {
          // will use in a loop later, dont use index
          id: "SORT_BY",
          type: "label",
          label: "Sort by",
        },
        {
          // will use in a loop later, dont use index
          id: "NEXT_AVAILABLE",
          type: "optionbox",
          label: "Next available",
          value: (sortBoxId: string) => sortBoxId === storeDoctorsFilter.sort_value,
          toggleOpenBox: toggleSortValue
        },
        {
          // will use in a loop later, dont use index
          id: "MOST_EXPERIENCED",
          type: "optionbox",
          label: "Most Experienced",
          value: (sortBoxId: string) => sortBoxId === storeDoctorsFilter.sort_value,
          toggleOpenBox: toggleSortValue
        },
      ]
    }
  };