import * as React from 'react';
import Select from 'react-select';
import style from './atoms.module.scss';

type PublicationT = {
    value: any, label: string;
};

export interface IAppProps {
    options: Array<PublicationT>;
    setSelectedOption: React.Dispatch<React.SetStateAction<any | undefined>>;
    defaultValue: any | undefined;

}


export default function SelectField(props: IAppProps) {
    console.log(props, '');

    return (
        <div className={`${style["custom-select"]}`}>
            <Select
                options={props.options}
                className={`${style.selectfield} ${style["custom-select"]}`}
                defaultValue={props.options[props.defaultValue]}
                onChange={(selectedOption) => props.setSelectedOption(selectedOption?.value)}
            />
        </div>
    );
}
