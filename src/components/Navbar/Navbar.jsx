import React from 'react';
import { assets } from '../../assets/assets';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-4 md:px-10 lg:px-10 bg-black text-white py-2 mb-10'>
            <div>
                <h1 className='text-4xl font-bold text-[#ec2d01]'>foodi</h1>
                <p className='text-xs font-bold'>Admin pannel</p>
            </div>
            <div>
                <img src={assets.profile_image} alt="" />
            </div>
        </div>
    );
};

export default Navbar;