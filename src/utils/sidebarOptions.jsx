import { GrHomeRounded } from "react-icons/gr";
import { PiClipboardTextBold } from "react-icons/pi";
import { MdOutlineWidgets, MdPayments } from "react-icons/md";
import { CiDeliveryTruck,CiDiscount1 } from "react-icons/ci";
import { AiTwotoneSound } from "react-icons/ai";
import { TbChartBar ,TbUsers} from "react-icons/tb";
import { BsCursor,BsLightningCharge } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";

const sidebarOptions = [
    {
        text: 'Home',
        icon: <GrHomeRounded />
    },
    {
        text: 'Orders',
        icon: <PiClipboardTextBold />
    },
    {
        text: 'Products',
        icon: <MdOutlineWidgets />
    },
    {
        text: 'Delivery',
        icon: <CiDeliveryTruck />
    },
    {
        text: 'Marketing',
        icon: <AiTwotoneSound />
    },
    {
        text: 'Analytics',
        icon: <TbChartBar />
    },
    {
        text: 'Payments',
        icon: <MdPayments />
    },
    {
        text: 'Tools',
        icon: <BsCursor />
    },
    {
        text: 'Discounts',
        icon: <CiDiscount1 />
    },
    {
        text: 'Audience',
        icon: <TbUsers />
    },
    {
        text: 'Appearence',
        icon: <IoIosColorPalette />
    },
    {
        text: 'Plugins',
        icon: <BsLightningCharge />
    },
    
]

export default sidebarOptions