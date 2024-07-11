import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Leftside = () => {
    return (
        <div className='border-r min-h-screen w-[12%] md:w-[20%] lg:w-[20%]'>
            <NavLink to={'/add'} className={({ isActive }) => isActive ? "bg-[#c74a27] flex gap-2 items-center mb-5 font-medium border rounded-l p-2 cursor-pointer text-white" : "flex gap-2 items-center mb-5 font-medium border rounded-l p-2 cursor-pointer hover:bg-[#e4dddb]"}>
                <img src={assets.add_icon} alt="" />
                <p className='hidden md:block lg:block'>Add Items</p>
            </NavLink>
            <NavLink to={'/list'} className={({ isActive }) => isActive ? "bg-[#c74a27] flex gap-2 items-center mb-5 font-medium border rounded-l p-2 cursor-pointer text-white" : "flex gap-2 items-center mb-5 font-medium border rounded-l p-2 cursor-pointer hover:bg-[#e4dddb]"}>
                <img src={assets.order_icon} alt="" />
                <p className='hidden md:block lg:block'>List Items</p>
            </NavLink>
            <NavLink to={'/orders'} className={({ isActive }) => isActive ? "bg-[#c74a27] flex gap-2 items-center mb-5 font-medium border rounded-l p-2 cursor-pointer text-white" : "flex gap-2 items-center mb-5 font-medium border rounded-l p-2 cursor-pointer hover:bg-[#e4dddb]"}>
                <img src={assets.order_icon} alt="" />
                <p className='hidden md:block lg:block'>Order</p>
            </NavLink >

        </div >
    );
};

export default Leftside;