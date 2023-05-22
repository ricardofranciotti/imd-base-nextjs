import * as React from 'react';
import style from './sidebar.module.scss';
import GetIcon from '@/functions/GetIcon';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useDispatch } from 'react-redux';
import { noshow } from '@/store/reducer-leftbar';
import Link from 'next/link';

export interface IAppProps {
    itemName: string;
    iconName: string;
    url: string;
}

export default function LineNoSubs(props: IAppProps) {
    const dispatch = useDispatch();


    const toggleSidebar = () => {
        dispatch(noshow());
    };


    const isSidebarOpen = useSelector((state: RootState) => state.leftbarstate.leftbar);



    return (
        <>
            <li className={style.sidebar_line}>
                <div className={style.image_sidebarline}>
                    <Link href={props.url}>
                        <GetIcon iconName={props.iconName} style={{ width: "30px", height: "30px" }} />
                    </Link>
                </div>
                <div className={style.descr_sidebarline}>
                    <Link href={props.url}>
                        <span className={`${isSidebarOpen ? style.open : style.close}`}>{props.itemName}</span>
                    </Link>
                </div>
            </li>
        </>
    );
}
