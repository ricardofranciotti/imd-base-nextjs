import * as React from 'react';
import style from './calendar.module.scss';
import { useEffect } from 'react';

import SelectField from '@/components/Atoms/SelectField';
import { NomeMesToNum, NumMesToNome } from '@/functions/Utils';
import CreateLineDays from './CreateLineDays';
export interface IAppProps {
}

export default function Calendar(props: IAppProps) {


    const [inicialDate, setinicialDate] = React.useState(0);
    const [arrDias, setarrDias] = React.useState<number[]>([]);
    const [arrDiasLine2, setarrDiasLine2] = React.useState<number[]>([]);
    const [arrDiasLine3, setarrDiasLine3] = React.useState<number[]>([]);
    const [arrDiasLine4, setarrDiasLine4] = React.useState<number[]>([]);
    const [arrDiasLine5, setarrDiasLine5] = React.useState<number[]>([]);
    const [arrDiasLine6, setarrDiasLine6] = React.useState<number[]>([]);




    const [selectedMonth, setSelectedMonth] = React.useState<string | undefined>(NumMesToNome(new Date().getMonth()));
    const [selectedYear, setSelectedYear] = React.useState<number | undefined>(new Date().getFullYear());


    useEffect(() => {
        console.log(new Date().getFullYear(), 'FULLYEAR');
    }, []);

    useEffect(() => {
        let mesAtual = NumMesToNome(new Date().getMonth());



        if (selectedMonth === "" || selectedMonth === undefined) {
            setSelectedMonth(mesAtual);
        } else {
            setSelectedMonth(selectedMonth);
        }
        console.log(selectedMonth, 'selectedMonth');
        lineOneContent();
    }, [selectedMonth]);

    useEffect(() => {
        lineOneContent();
    }, [selectedYear]);


    const lineOneContent = () => {
        // 0 - January, ..., 7 - August, ..., 11 - December
        let arrDiasLine1: number[] = [];
        let mes = NomeMesToNum(selectedMonth);
        var ano = selectedYear || new Date().getFullYear();
        let ultimodiamesatual = new Date(ano, mes + 1, 0).getDate();
        let ultimdiamesanterior = new Date(ano, mes, 0).getDate();
        let diainimesatual = new Date(ano, mes, 1).getDay();
        let dayMax = 0;

        //console.log(mes, ano, ultimodiamesatual, ultimdiamesanterior, diainimesatual, getNomeDiaSemana(diainimesatual), NumMesToNome(mes));

        for (let i = 0; i <= diainimesatual - 1; i++) {
            arrDiasLine1.unshift(ultimdiamesanterior - i);
        }
        arrDiasLine1.push(1);
        for (let i = 1; arrDiasLine1.length < 7; i++) {
            arrDiasLine1.push(i + 1);
            dayMax = i + 1;
        }
        setarrDias(arrDiasLine1);


        arrDiasLine1 = [];
        let nTemp = dayMax;
        console.log(nTemp, 'MAXXXX');
        if (nTemp === 0) {
            nTemp = 1;
        }

        for (let i = 1; arrDiasLine1.length < 7; i++) {
            nTemp = nTemp + 1;
            arrDiasLine1.push(nTemp);
        }
        dayMax = nTemp;
        setarrDiasLine2(arrDiasLine1);


        arrDiasLine1 = [];
        nTemp = dayMax;
        for (let i = 1; arrDiasLine1.length < 7; i++) {
            nTemp = nTemp + 1;
            arrDiasLine1.push(nTemp);
        }
        dayMax = nTemp;
        setarrDiasLine3(arrDiasLine1);


        arrDiasLine1 = [];
        nTemp = dayMax;
        for (let i = 1; arrDiasLine1.length < 7; i++) {
            nTemp = nTemp + 1;
            arrDiasLine1.push(nTemp);
        }
        dayMax = nTemp;
        setarrDiasLine4(arrDiasLine1);


        console.log(ultimodiamesatual);

        arrDiasLine1 = [];
        nTemp = dayMax;
        for (let i = 1; arrDiasLine1.length < 7; i++) {
            nTemp = nTemp + 1;
            if (nTemp > ultimodiamesatual) {
                nTemp = 1;
            }
            arrDiasLine1.push(nTemp);
        }
        dayMax = nTemp - 1;
        setarrDiasLine5(arrDiasLine1);


        arrDiasLine1 = [];
        nTemp = dayMax + 1;
        for (let i = 1; arrDiasLine1.length < 7; i++) {
            nTemp = nTemp + 1;
            if (nTemp > ultimodiamesatual) {
                nTemp = 1;
            }
            arrDiasLine1.push(nTemp);
        }
        dayMax = nTemp - 1;
        setarrDiasLine6(arrDiasLine1);



    };


    const options = [
        { value: 'Janeiro', label: 'Janeiro' },
        { value: 'Fevereiro', label: 'Fevereiro' },
        { value: 'Março', label: 'Março' },
        { value: 'Abril', label: 'Abril' },
        { value: 'Maio', label: 'Maio' },
        { value: 'Junho', label: 'Junho' },
        { value: 'Julho', label: 'Julho' },
        { value: 'Agosto', label: 'Agosto' },
        { value: 'Setembro', label: 'Setembro' },
        { value: 'Outubro', label: 'Outubro' },
        { value: 'Novembro', label: 'Novembro' },
        { value: 'Dezembro', label: 'Dezembro' }
    ];

    const anos = [
        { value: '2023', label: '2023' },
        { value: '2024', label: '2024' },
        { value: '2025', label: '2025' },
        { value: '2026', label: '2026' },
        { value: '2027', label: '2027' },

    ];


    return (
        <div className={style.divider}>
            <div className={style.esquerda}>
                <div className={style.pickerform}>
                    <div className={style.header}>
                        <SelectField
                            options={options}
                            setSelectedOption={setSelectedMonth}
                            defaultValue={new Date().getMonth()}
                        />
                        <SelectField
                            options={anos}
                            setSelectedOption={setSelectedYear}
                            defaultValue={new Date().getFullYear() === 2023 ? 0 : 1} />
                    </div>
                    <div className={style.body}>
                        <div className={style.daysname}>
                            <span className={style.dayname} onClick={() => lineOneContent()}>Dom</span>
                            <span className={style.dayname}>Seg</span>
                            <span className={style.dayname}>Ter</span>
                            <span className={style.dayname}>Qua</span>
                            <span className={style.dayname}>Qui</span>
                            <span className={style.dayname}>Sex</span>
                            <span className={style.dayname}>Sab</span>
                        </div>
                        <div className={style.numbers}>
                            <span className={`${style.number} ${arrDias[0] > 7 ? style.gray : ''} `}>{arrDias[0]}</span>
                            <span className={`${style.number} ${arrDias[1] > 7 ? style.gray : ''} hvr-grow`}>{arrDias[1]}</span>
                            <span className={`${style.number} ${arrDias[2] > 7 ? style.gray : ''}`}>{arrDias[2]}</span>
                            <span className={`${style.number} ${arrDias[3] > 7 ? style.gray : ''}`}>{arrDias[3]}</span>
                            <span className={`${style.number} ${arrDias[4] > 7 ? style.gray : ''}`}>{arrDias[4]}</span>
                            <span className={`${style.number} ${arrDias[5] > 7 ? style.gray : ''}`}>{arrDias[5]}</span>
                            <span className={`${style.number} ${arrDias[6] > 7 ? style.gray : ''}`}>{arrDias[6]}</span>
                        </div>
                        <div className={style.numbers}>
                            <CreateLineDays arrDias={arrDiasLine2} keyInitial={8} />
                        </div>
                        <div className={style.numbers}>
                            <CreateLineDays arrDias={arrDiasLine3} keyInitial={15} />
                        </div>
                        <div className={style.numbers}>
                            <span className={style.number}>{arrDiasLine4[0]}</span>
                            <span className={style.number}>{arrDiasLine4[1]}</span>
                            <span className={style.number}>{arrDiasLine4[2]}</span>
                            <span className={style.number}>{arrDiasLine4[3]}</span>
                            <span className={style.number}>{arrDiasLine4[4]}</span>
                            <span className={style.number}>{arrDiasLine4[5]}</span>
                            <span className={style.number}>{arrDiasLine4[6]}</span>
                        </div>
                        <div className={style.numbers}>
                            <span className={`${style.number} ${arrDiasLine5[0] < 23 ? style.gray : ''}`}>{arrDiasLine5[0]}</span>
                            <span className={`${style.number} ${arrDiasLine5[1] < 23 ? style.gray : ''}`}>{arrDiasLine5[1]}</span>
                            <span className={`${style.number} ${arrDiasLine5[2] < 23 ? style.gray : ''}`}>{arrDiasLine5[2]}</span>
                            <span className={`${style.number} ${arrDiasLine5[3] < 23 ? style.gray : ''}`}>{arrDiasLine5[3]}</span>
                            <span className={`${style.number} ${arrDiasLine5[4] < 23 ? style.gray : ''}`}>{arrDiasLine5[4]}</span>
                            <span className={`${style.number} ${arrDiasLine5[5] < 23 ? style.gray : ''}`}>{arrDiasLine5[5]}</span>
                            <span className={`${style.number} ${arrDiasLine5[6] < 23 ? style.gray : ''}`}>{arrDiasLine5[6]}</span>
                        </div>
                        <div className={style.numbers}>
                            <span className={`${style.number} ${arrDiasLine6[0] < 20 ? style.gray : ''}`}>{arrDiasLine6[0]}</span>
                            <span className={`${style.number} ${arrDiasLine6[1] < 20 ? style.gray : ''}`}>{arrDiasLine6[1]}</span>
                            <span className={`${style.number} ${arrDiasLine6[2] < 20 ? style.gray : ''}`}>{arrDiasLine6[2]}</span>
                            <span className={`${style.number} ${arrDiasLine6[3] < 20 ? style.gray : ''}`}>{arrDiasLine6[3]}</span>
                            <span className={`${style.number} ${arrDiasLine6[4] < 20 ? style.gray : ''}`}>{arrDiasLine6[4]}</span>
                            <span className={`${style.number} ${arrDiasLine6[5] < 20 ? style.gray : ''}`}>{arrDiasLine6[5]}</span>
                            <span className={`${style.number} ${arrDiasLine6[6] < 20 ? style.gray : ''}`}>{arrDiasLine6[6]}</span>
                        </div>

                    </div>
                    <div className={style.footer}></div>
                </div>
            </div>
            <div className={style.direita}></div>
        </div>
    );
}
