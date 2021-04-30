import { BiSearch } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import {Dropdown} from "./Dropdown";


export const TabsData = [
    {
        id: 1,
        title: 'Search Tour',
        content: [
            {
                id:0,
                titleContent: 'Destination',
                placeholder: 'Search place',
                icon: <BiSearch/>,
            },
            {
                id:1,
                titleContent: 'Check-in date',
                placeholder: 'Check In Date',
                icon: <BiCalendar/>,
            },
            {
                id:2,
                titleContent: 'Check-out date',
                placeholder: 'Check Out Date',
                icon: <BiCalendar/>,
            },
            {
                id:3,
                titleContent: 'Price Limit',
                select:<Dropdown/>,
            },
        ]
    },
    {
        id: 2,
        title: 'Hotel',
        search:'search',
        content: [
            {
                titleContent: 'Destination',
                placeholder: 'Search place',
                icon: <BiSearch/>,
            },
            {
                titleContent: 'Check-in date',
                placeholder: 'Check In Date',
                icon: <BiCalendar/>,
            },
            {
                titleContent: 'Check-out date',
                placeholder: 'Check Out Date',
                icon: <BiCalendar/>,
            },
            {
                titleContent: 'Price Limit',
                select:<Dropdown/>,
            },
        ]
    },
];
