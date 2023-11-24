import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import InputField from './InputField';
import { useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import Button from './Button';


const customStyles = {
    overlay: {
      backgroundColor: "rgba(128, 128, 128, 0.5)", // Adjust the alpha value for transparency
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        padding: "0px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff", // Set the modal background color
        
    },
};


export default function CreateDepartmentModal({open, setOpen}) {

    const {register, handleSubmit, formState = {errors}} = useForm({
        defaultValues: {
            departmentName : '',
            departmentDescription : '',
        }
    })

    const handleFormSubmit=(data) => {
        console.log("data", data);
    }


    return (
        <div>
            <Modal
                isOpen={open}
                onRequestClose={() => {setOpen(false)}}
                style={customStyles}
            >
                <div className='w-[400px]'>
                    <div className='text-slate-600 flex justify-center text-2xl mb-2 mt-2'>
                        Create Department
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit((data) => handleFormSubmit(data) )} className='flex flex-col px-6 py-2'>                        
                        <InputField label={"Department Name"} inputName={"Enter Department Name"} register={register} registerName={"departmentName"} />

                        <p className='text-sm mb-1'>Department Description</p>

                        <textarea className='border border-zinc-400 rounded-md text-sm p-2 mb-1 h-36 outline-none focus:border-blue-500' 
                            placeholder='Department Description' {...register("departmentDescription")}>
                        </textarea>

                        <div className='flex justify-end my-2 gap-3'>
                            <Button handleClick={() => {setOpen(false)}} type={"danger"} buttonName={"Cancel"}/>
                            <Button handleClick={()=> {}} buttonName={"Submit"}/>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
