import {Button} from '@ui';

export const scheme = ({toggleSortValue, storeDoctorsFilter }) => {
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
          value: (sortBoxId) => sortBoxId === storeDoctorsFilter.sort_value,
          toggleOpenBox: toggleSortValue
        },
        {
          // will use in a loop later, dont use index
          id: "MOST_EXPERIENCED",
          type: "optionbox",
          label: "Most Experienced",
          value: (sortBoxId) => sortBoxId === storeDoctorsFilter.sort_value,
          toggleOpenBox: toggleSortValue
        },
      ]
    }
  };