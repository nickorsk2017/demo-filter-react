import {useMemo} from "react";

export function useList(){
    return useMemo(() => {
        let list = [];
        const pushList = (_list) => {
            list = list.concat(_list);
            return list;
        }
        const setList = (_list) => {
            list = _list;
            return list;
        }
        const getList = (): Array<any> => {
            return list;
        }
        return {getList, setList, pushList}
    }, []);
}