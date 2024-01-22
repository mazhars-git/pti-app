import React from 'react';
import ItemSlider from './ItemSlider';
import { useForm } from "react-hook-form"

const PopularItems = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="max-w-screen-lg mx-auto pt-10">
            <div className="flex justify-between pb-2">
                <p className="font-semibold">Popular</p>

                {/* add items by modal */}
                <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="text-orange-500 font-semibold mr-12" onClick={() => document.getElementById('my_modal_5').showModal()}>Add More</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                        <div className="modal-box bg-orange-500">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="itemName">Item Name</label>
                                    <input
                                        className='input form-control input-bordered mt-1 w-96'
                                        id="itemName"
                                        {...register("itemName", { required: true, maxLength: 30 })}
                                    />
                                    {errors.name && errors.name.type === "required" && (
                                        <span>This is required</span>
                                    )}
                                    {errors.name && errors.name.type === "maxLength" && (
                                        <span>Max length exceeded</span>
                                    )} <br />
                                    
                                    <label htmlFor="file">Upload Image</label>
                                    <input className='form-control pt-3' type="file" name='file' /> <br />

                                    <input className='btn' type="submit" />
                                </form>
                            </div>


                            <div className="modal-action mt-0">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>

            {/*-------card items-----------*/}

            <div className="">
                <ItemSlider></ItemSlider>
            </div>
        </div>
    );
};

export default PopularItems;