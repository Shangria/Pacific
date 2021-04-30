import React from "react";
import {  BiChevronDown } from "react-icons/bi";
const { useState } = React;

const data = [
    {id: 0, label: "$100"},
    {id: 1, label: "$1000"},
    {id: 2, label: "$10.000"},
    {id: 3, label: "$100.000"},
    {id: 4, label: "$500.000"},
    {id: 5, label: "$600.000"},
    {id: 6, label: "$700.000"},
    {id: 7, label: "$800.000"},
    ];

export const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        setOpen(false);
    }

    return (
        <div className='hero__dropdown'>
            <div className='hero__dropdown-header' onClick={toggleDropdown}>
                <BiChevronDown/>
                {selectedItem ? items.find(item => item.id == selectedItem).label : data[0].label}
            </div>
            <div className={`hero__dropdown-body ${isOpen && 'open'}`}>
                {items.map(item => (
                    <div className="hero__dropdown-item"
                         onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        <span className={`hero__dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>
                            <BiChevronDown/>
                        </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

