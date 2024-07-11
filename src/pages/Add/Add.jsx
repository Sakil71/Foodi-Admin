import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("category", data.category);
        formData.append("image", image);

        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad"
            })
            setImage(false);
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message);
        }

    }

    return (
        <div className='mb-20'>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-5'>
                    <h1 className='text-sm font-medium mb-2'>Upload Image</h1>
                    <label className='cursor-pointer' htmlFor="image">
                        <img className='w-32 h-32' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" required hidden />
                </div>
                <div className='mb-5'>
                    <h1 className='text-sm font-medium mb-2'>Product Name</h1>
                    <input onChange={onChangeHandler} value={data.name} className='border outline-none rounded px-4 py-2 border-[#c74a27] w-full bg-white text-black' type="text" name="name" id="" placeholder='product name' />
                </div>
                <div className='mb-5'>
                    <h1 className='text-sm font-medium mb-2'>Product Description</h1>
                    <textarea onChange={onChangeHandler} value={data.description} className='border outline-none rounded px-4 py-2 border-[#c74a27] w-full bg-white text-black' name="description" id="" rows="6" placeholder='Description'></textarea>
                </div>

                <div className='flex gap-5'>
                    <div className='mb-5 w-full'>
                        <h1 className='text-sm font-medium mb-2'>Product Category</h1>
                        <select onChange={onChangeHandler} className='border outline-none rounded px-4 py-2 border-[#c74a27] w-full bg-white text-black' name="category" id="">
                            <option className='font-medium' value="Salad">Salad</option>
                            <option className='font-medium' value="Rolls">Rolls</option>
                            <option className='font-medium' value="Deserts">Deserts</option>
                            <option className='font-medium' value="Sandwich">Sandwich</option>
                            <option className='font-medium' value="Cake ">Cake </option>
                            <option className='font-medium' value="Pure Veg">Pure Veg</option>
                            <option className='font-medium' value="Pasta">Pasta</option>
                            <option className='font-medium' value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='mb-5 w-full'>
                        <h1 className='text-sm font-medium mb-2'>Product Price</h1>
                        <input onChange={onChangeHandler} value={data.price} className='border outline-none rounded px-4 py-2 border-[#c74a27] w-full bg-white text-black' type="number" name="price" placeholder='৳50' id="" />
                    </div>
                </div>

                <div>
                    <button className='text-xs font-bold py-2 hover:border hover:border-[#ec2d01] rounded hover:bg-[#c54629] bg-[#ec2d01] text-white w-full' type='submit'>ADD</button>
                </div>
            </form>
        </div>
    );
};

export default Add;