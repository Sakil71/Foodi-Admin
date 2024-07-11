import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
    const [list, setList] = useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success) {
            setList(response.data.data);
        }
        else {
            toast.error('Error');
        }
    }

    const removeItem = async (items) => {
        const result = confirm(`You want to delete - ${items.name}`);
        if (result) {
            const response = await axios.post(`${url}/api/food/remove`, { id: items._id });
            await fetchList();
            if (response.data.success) {
                toast.success(response.data.message);
            }
            else {
                toast.error('Error');
            }
        }
    }

    useEffect(() => {
        fetchList();
    }, [])

    return (
        <div className="overflow-x-auto w-full mb-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        list.reverse().map((items, index) => {
                            return <tr key={index}>
                                <td>
                                    <div className='flex gap-2 items-center'>
                                        <img className='w-12 h-12 md:w-16 lg:w-16 md:h-16 lg:h-16 rounded-full' src={`${url}/images/` + items.image} alt="" />
                                        <div>
                                            <p className='font-bold'>{items?.name}</p>
                                            <p className='text-[#ec2d01] font-semibold'>৳{items?.price}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-medium'>{items?.category}</td>
                                <td>
                                    <p onClick={() => removeItem(items)} className='cursor-pointer border p-2 rounded-full w-8 h-8 flex justify-center items-center border-[#ec2d01] text-[#ec2d01] font-medium hover:bg-[#ec2d01] hover:text-white'>X</p>
                                </td>
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default List;