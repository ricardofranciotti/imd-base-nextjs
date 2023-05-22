
import React, { useState } from 'react';
import style from './sidebar.module.scss';
import GetIcon from '@/functions/GetIcon';
import LineNoSubs from './LineNoSubs';
import LineWithSubs from './LineWithSubs';
import { Separator } from '../Boilerplate/boilerplate.component';

interface MySidebarProps {
    isOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = (props: MySidebarProps) => {

    const jsonData = require('../../../json/sidebar.json');

    return (
        <div className={`${style.sidebar} ${props.isOpen ? style.open : style.close}`}    >

            <ul>
                {jsonData.menuitems.map((item: any, key: any) => {
                    if (item.name === "Separator") {
                        return (<Separator key={key} />);
                    }
                    if (item.submenus.length === 0) {
                        return (<LineNoSubs iconName={item.icon} key={key} itemName={item.name} url={item.url} />);
                    } else {
                        return (<LineWithSubs item={item} key={key} />);
                    }
                })}

            </ul>

        </div >




    );
};

export default Sidebar;;;