import * as React from 'react';
import style from './sidebar.module.scss';
import GetIcon from '@/functions/GetIcon';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Link from 'next/link';


export interface IAppProps {
    item: any;
    key: any;
}


export default function LineWithSubs(props: IAppProps) {

    const isSidebarOpen = useSelector((state: RootState) => state.leftbarstate.leftbar);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);


    return (
        <>
            <li className={style.sidebar_line}>
                <div className={style.image_sidebarline}>
                    <GetIcon iconName={props.item.icon} style={{ width: "30px", height: "30px" }} onClickMe={() => setIsOpen(!isOpen)} key={props.item.id} />
                </div>
                <div className={style.descr_sidebarline}>
                    <span style={{ cursor: "pointer" }} className={`${isSidebarOpen ? style.open : style.close}`} onClick={() => setIsOpen(!isOpen)}>{props.item.name}</span>
                </div>
                <div className={style.arrow_sidebarline}>
                    <span style={{ cursor: "pointer" }} className={`${isSidebarOpen ? style.open : style.close}`} onClick={() => setIsOpen(!isOpen)}>{isOpen ? '▲' : '▼'}</span>
                </div>
            </li>

            {isOpen && props.item.submenus.map((item: any, key: any) => {
                return (
                    <li className={`${style.sidebar_line_sub} ${style.animateit}`} key={key} >
                        <Link href={item.url} className={style.image_sidebarline_sub}>
                            <GetIcon
                                iconName={item.icon}
                                style={{ width: "20px", height: "20px" }}
                                onClickMe={() => setIsOpen(!isOpen)} key={props.item.id} />
                        </Link>
                        <Link href={item.url} className={style.descr_sidebarline_sub}>
                            <span
                                style={{ cursor: "pointer" }}
                                className={`${isSidebarOpen ? style.open : style.close}`}
                                onClick={() => setIsOpen(!isOpen)}>
                                {item.name}
                            </span>
                        </Link>
                    </li>);
            })}

        </>
    );
}
