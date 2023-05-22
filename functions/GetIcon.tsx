import * as React from 'react';
import { FaBeer, FaRegGem, FaSignInAlt, FaListOl, FaPager, FaSitemap, FaUserAlt, FaCalendarCheck } from 'react-icons/fa';
import { AiFillBank, AiOutlineLock, AiFillCalendar, AiOutlineCalendar, AiFillCreditCard, AiFillDashboard, AiOutlineDashboard, AiFillEdit, AiFillDelete, AiTwotoneCalendar } from 'react-icons/ai';

import { BiColumns, BiPaperclip, BiShapeCircle, BiCategoryAlt, BiSitemap, BiHomeAlt, BiHome, BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { BsBank, BsFillCreditCard2BackFill, BsMenuButtonWideFill, BsFillPersonVcardFill, BsPersonVideo2 } from 'react-icons/bs';
import { MdDateRange, MdPassword, MdTimelapse } from 'react-icons/md';
import { CgDatabase, CgFormatSeparator } from 'react-icons/cg';

import { TbReport, TbGridDots } from 'react-icons/tb';
import { SiBeijingsubway, SiMicrogenetics } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiNews } from 'react-icons/ti';
import { TfiHarddrives } from 'react-icons/tfi';
import { RiUserStarLine, RiFileList3Line, RiUserSettingsFill, RiLockPasswordLine, RiTodoLine, RiUserSettingsLine, RiUserSearchFill } from 'react-icons/ri';
import { FcCalendar } from 'react-icons/fc';
import { SiGnuprivacyguard, Si1Password } from 'react-icons/si';
import { TbFileInvoice } from 'react-icons/tb';
import { MdCrisisAlert, MdOutlinePriceChange } from 'react-icons/md';
//import { GrUserSettings } from 'react-icons/gr';



interface IProps {
    iconName: string;
    style?: React.CSSProperties;
    className?: string;
    fill?: string;
    onClickMe?(): any;
}



export default function GetIcon({ iconName, style, className, fill, onClickMe }: IProps) {


    switch (iconName) {
        case "FaUserAlt":
            return (
                <FaUserAlt style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "RiUserSettingsLine":
            return (
                <RiUserSettingsLine style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "TbFileInvoice":
            return (
                <TbFileInvoice style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "FaRegGem":
            return (
                <FaRegGem style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );

        case "MdCrisisAlert":
            return (
                <MdCrisisAlert style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "MdOutlinePriceChange":
            return (
                <MdOutlinePriceChange style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );


        case "RiUserSearchFill":
            return (
                <RiUserSearchFill style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "RiUserSettingsFill":
            return (
                <RiUserSettingsFill style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "RiUserStarLine":
            return (
                <RiUserStarLine style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BsPersonVideo2":
            return (
                <BsPersonVideo2 style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );

        case "AiOutlineCalendar":
            return (
                <AiOutlineCalendar style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiOutlineLock":
            return (
                <AiOutlineLock style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "SiGnuprivacyguard":
            return (
                <SiGnuprivacyguard style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "Si1Password":
            return (
                <Si1Password style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );

        case "FaSignInAlt":
            return (
                <FaSignInAlt style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiFillCalendar":
            return (
                <AiFillCalendar style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "FaBeer":
            return (
                <FaBeer style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiOutlineDashboard":
            return (
                <AiOutlineDashboard style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiColumns":
            return (
                <BiColumns style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BsBank":
            return (
                <BsBank style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BsFillCreditCard2BackFill":
            return (
                <BsFillCreditCard2BackFill style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiPaperclip":
            return (
                <BiPaperclip style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiShapeCircle":
            return (
                <BiShapeCircle style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiCategoryAlt":
            return (
                <BiCategoryAlt style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "MdDateRange":
            return (
                <MdDateRange style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "CgFormatSeparator":
            return (
                <CgFormatSeparator style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiSitemap":
            return (
                <BiSitemap style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "MdPassword":
            return (
                <MdPassword style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );

        case "TbReport":
            return (
                <TbReport style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "SiMicrogenetics":
            return (
                <SiMicrogenetics style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "GiHamburgerMenu":
            return (
                <GiHamburgerMenu style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "MdTimelapse":
            return (
                <MdTimelapse style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "TiNews":
            return (
                <TiNews style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "FaPager":
            return (
                <FaPager style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "RiTodoLine":
            return (
                <RiTodoLine style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "RiLockPasswordLine":
            return (
                <RiLockPasswordLine style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "RiFileList3Line":
            return (
                <RiFileList3Line style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiFillDashboard":
            return (
                <AiFillDashboard style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiFillBank":
            return (
                <AiFillBank style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiFillCreditCard":
            return (
                <AiFillCreditCard style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "SiBeijingsubway":
            return (
                <SiBeijingsubway style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiHome":
            return (
                <BiHome style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiHomeAlt":
            return (
                <BiHomeAlt style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );

        case "FaSitemap":
            return (
                <FaSitemap style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "FaListOl":
            return (
                <FaListOl style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiUpArrow":
            return (
                <BiUpArrow style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BiDownArrow":
            return (
                <BiDownArrow style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiFillEdit":
            return (
                <AiFillEdit style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiFillDelete":
            return (
                <AiFillDelete style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "TfiHarddrives":
            return (
                <TfiHarddrives style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "BsMenuButtonWideFill":
            return (
                <BsMenuButtonWideFill style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "AiTwotoneCalendar":
            return (
                <AiTwotoneCalendar style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "FaCalendarCheck":
            return (
                <FaCalendarCheck style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );
        case "FcCalendar":
            return (
                <FcCalendar style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );

        case "BsFillPersonVcardFill":
            return (
                <BsFillPersonVcardFill style={style} className={className} onClick={() => onClickMe?.()} fill={fill === undefined ? 'white' : fill} />
            );

        default:
            return (<span>NOTAV</span>);
    }
}

