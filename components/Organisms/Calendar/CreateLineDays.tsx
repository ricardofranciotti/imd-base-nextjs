import * as React from 'react';
import { useEffect } from 'react';
import style from './calendar.module.scss';

export interface IAppProps {
    arrDias: number[];
    keyInitial: number;
}

export default function CreateLineDays(props: IAppProps) {

    const [markDate, setmarkDate] = React.useState<number | undefined>(0);

    function marcaData(data: number) {
        setmarkDate(data);
    }


    return (
        <>
            {props.arrDias.map((item, index) => (
                <span
                    key={props.keyInitial + index}
                    className={`${style.number} ${markDate === props.keyInitial + index ? style.markData : ''}`}
                    onClick={() => {
                        console.log(props.keyInitial, 'KEY1');
                        console.log(index, 'KEY2');
                        marcaData(props.keyInitial + index);
                    }}>{item}</span>
            ))}
        </>
    );
}
