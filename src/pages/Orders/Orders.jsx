import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.post(url + "/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
        }
        else {
            toast.error("Error");
        }
    }

    const updateHandler = async (event, orderId) => {
        const response = await axios.post(url+"/api/order/status", {
            orderId,
            status : event.target.value
        })
        if(response.data.success){
            await fetchAllOrders();
        }
    }

    useEffect(() => {
        fetchAllOrders();
    }, [])
    return (
        <div>
            {
                orders.reverse().map((order, index) => (
                    <div key={index} className='flex gap-5 items-center justify-between mb-5 border p-4 rounded bg-[#e3dede]'>
                        <img className='hidden md:block lg:block' src={assets.parcel_icon} alt="" />
                        <div className='w-[40%]'>
                            <p className='mb-2 font-bold'>
                                {
                                    order.items.map((item, index) => {
                                        if (index === order.items.length - 1) {
                                            return item.name + "-" + item.quantity;
                                        }
                                        else {
                                            return item.name + "-" + item.quantity + ", ";
                                        }
                                    })
                                }
                            </p>
                            <div className='text-sm font-medium border-t border-gray-400'>
                                <p className='font-semibold'>{order.address.firstName + " " + order.address.lastName}</p>
                                <p>{order.address.street + ", "}</p>
                                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                                <p>{order.address.phone}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#ec2d01] font-medium'>৳{order.amount}</p>
                            <p className='font-medium my-1'>Quantity: {order.items.length}</p>
                            <p className='font-medium mb-2'>{order.date.slice(0,10)}</p>

                            <select onChange={(event) => updateHandler(event, order._id)} value={order.status} className='outline-none rounded px-2 py-1 text-xs font-bold'>
                                <option className='font-bold' value="Food Processing">Food Processing</option>
                                <option className='font-bold' value="Out for delivery">Out for delivery</option>
                                <option className='font-bold' value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Orders;