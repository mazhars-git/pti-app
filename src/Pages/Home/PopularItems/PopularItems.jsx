import React from 'react';
import ItemSlider from './ItemSlider';

const PopularItems = () => {
    return (
        <div className="py-5">
            <div className="flex justify-between pb-2">
                <p className="font-semibold">Popular</p>

                {/* add items by modal */}
                <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="text-orange-500 font-semibold mx-10" onClick={() => document.getElementById('my_modal_5').showModal()}>Add More</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">

                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>


                            <div className="modal-action">
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