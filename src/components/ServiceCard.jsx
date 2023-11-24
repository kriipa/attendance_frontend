import React from 'react'
import hosp1 from "../assets/images/hosp1.png";
import hosp2 from "../assets/images/hosp2.png";
import hosp3 from "../assets/images/hosp3.png";
import hosp4 from "../assets/images/hosp4.png";
import Slider from 'react-slick';


export default function ServiceCard() {
    const serviceList = [
        {
            id : 1,
            img :hosp1,
            title : "Medical Genetics and lab setup",
            point1 : "Medical Genetics and lab setup",
            point2 : "Medical Genetics and lab setup",
            point3 : "Medical Genetics and lab setup",
        },
        {
            id : 2,
            img : hosp2,
            title : "Medical Genetics and lab setup",
            point1 : "Medical Genetics and lab setup",
            point2 : "Medical Genetics and lab setup",
            point3 : "Medical Genetics and lab setup",
        },
        {
            id : 3,
            img : hosp3,
            title : "Medical Genetics and lab setup",
            point1 : "Medical Genetics and lab setup",
            point2 : "Medical Genetics and lab setup",
            point3 : "Medical Genetics and lab setup",
        },
        {
            id : 4,
            img : hosp4,
            title : "Medical Genetics and lab setup",
            point1 : "Medical Genetics and lab setup",
            point2 : "Medical Genetics and lab setup",
            point3 : "Medical Genetics and lab setup",
        },
    ]
    const settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2
    };

    return (
        <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-evenly'>
            {/* <Slider className='flex bg-red-400' {...settings}> */}
            {
                serviceList.map((services) => {
                    return(
                            <div className='rounded-lg bg-[#F6F7F9]  p-6' key={services.id}>
                                <div >
                                    <img className='rounded-lg sm:w-full' src={services.img} alt="" />
                                </div>
                                <div className='mt-4'>
                                    <p className='text-base text-[#005A80]'>{services.title}</p>
                                    <ul className='mt-2 list-disc ms-5 flex flex-col gap-2'>
                                        <li className='text-sm text-[#344054]'>{services.point1}</li>
                                        <li className='text-sm text-[#344054]'>{services.point2}</li>
                                        <li className='text-sm text-[#344054]'>{services.point3}</li>
                                    </ul>
                                </div>
                            </div>
                    );
                })
            }
            {/* </Slider> */}
        </div>
    )
}
