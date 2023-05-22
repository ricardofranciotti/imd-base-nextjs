
import axios from 'axios';
import { useState, useEffect } from 'react';
import { json } from 'stream/consumers';

export function useAxiosGet<T>(url: string, initialState: T) {

    const [data, setData] = useState<T>(initialState);

    useEffect(() => {
        async function fetchMyAPIB() {
            const gets = await axios.get(url);
            if (gets.data.success) {
                setData(gets.data.data);
            }
        }
        fetchMyAPIB();

    }, [url]);


    return data;

}


/*GET MAS QUE CHAME POR POST*/
export function useAxiosGetPost<T>(url: string, initialState: T, datapost: string) {


    const [data, setData] = useState<T>(initialState);

    datapost = "{ x: '1' }";

    useEffect(() => {
        async function fetchMyAPIB() {

            const gets = await axios.post(url, datapost);
            if (gets.data.success) {
                setData(gets.data.data.data);
            }
        }
        fetchMyAPIB();

    }, [url, datapost]);


    return data;

}


/*GET MAS QUE CHAME POR POST*/
export function useAxiosGetPostFields<T>(url: string, initialState: T, filter?: Object, datapost?: Object) {


    const [data, setData] = useState<T>(initialState);

    useEffect(() => {

        //console.log(filter, `filter:${JSON.stringify(filter)}, datapost:${JSON.stringify(datapost)}`);


        async function fetchMyAPIB() {

            const gets = await axios.post(url, `filter:${JSON.stringify(filter)}, datapost:${JSON.stringify(datapost)}`);
            if (gets.data.success) {
                setData(gets.data.data);
                //console.log(datapost, 'executei');
                //console.log(gets.data.data, 'DATA1');
            } else {
                //console.log('ERRO NO HOOK', gets);

            }
        }
        fetchMyAPIB();

    }, [url]);


    return data;

}