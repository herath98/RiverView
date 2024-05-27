import React from 'react'
import { useState } from "react";
import Navbar from '@/Components//Navbar2';
import GalleryActivity from '@/Components/GalleryActivity';
import RoomGallery from '@/Components/RoomGallery';
import GalleryCarousel from '@/Components/GalleryCarousel';
import Footer from '@/Components/Footer';

export default function Gallery() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div className='min-h-screen '>
            <Navbar />

            {/* image section */}
            <section>
                <img src="/gallery.png" className="w-full pt-20" alt="hero" />
            </section>

            {/* Gallery Activity */}
            <section>
                <GalleryActivity />
            </section>


            {/* Virtual Tour */}
            <section className="flex flex-col md:flex-row items-center lg:mx-20 justify-between p-6 bg-white">

                <div className="w-full p-6 flex justify-center">

                    <div className="relative">
                        <h2 className="text-4xl py-5 font-bold">Our Story  </h2>
                        <img src="/Frame2.png" alt="Virtual Tour" className="w-screen" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button data-modal-target="default-modal"
                                data-modal-toggle="default-modal"
                                type="button"
                                onClick={toggleModal} className="w-52 h-52 mt-10  p-2 rounded-full shadow-lg"> </button>
                        </div>
                    </div>
                </div>
                {/* Main modal */}
                {showModal && (
                    <div
                        id="default-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className="fixed top-0 left-0 right-0 z-50 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center"
                    >
                        <div className="relative w-full max-w-xl lg:max-w-5xl bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal content */}
                            <div className="relative">
                                {/* Modal header */}
                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Lets Go To Virtual Tour
                                    </h3>
                                    <button
                                        type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={toggleModal}
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* Modal body */}
                                <div className="p-6 space-y-6">

                                    <video class="w-screen h-auto max-w-full" controls>
                                        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </section>


            <section>
                <RoomGallery />
            </section>



            <section className='grid gap-4 py-20 px-5'>
                <div className="grid grid-cols-5 gap-4">
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="/Room/img/2.png"
                            alt=""
                        />

                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="/Room/img/3.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="/Room/img/4.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="/Room/img/5.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="h-auto max-w-full rounded-lg"
                            src="/Room/img/6.png"
                            alt=""
                        />
                    </div>
                </div>

            </section>

            {/* Ayurvedic treatments */}
            <section className='mx-5 py-20 lg:px-32'>
                <h2 className="text-3xl font-bold mb-8">Ayurvedic treatments</h2>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-12'>
                    <div className='row grid-cols-1  col-span-3'>
                        <img className='pb-8' src="/ayuGallery/1.png" alt="" />
                        <img className='pb-8' src="/ayuGallery/2.png" alt="" />
                        <img className='' src="/ayuGallery/3.png" alt="" />
                    </div>
                    <div className='grid grid-cols-1   col-span-6'>
                        <div className=' flex justify-between'>
                            <img className='pb-5  ' src="/ayuGallery/4.png" alt="" />
                            <img className='pb-5' src="/ayuGallery/6.png" alt="" />
                            <img className='pb-5' src="/ayuGallery/7.png" alt="" />
                        </div>
                        <div className='relative'>
                            <img className='pb-5 w-screen object-cover' src="/ayuGallery/5.png" alt="" />
                            <div class="absolute inset-0  opacity-60 rounded-md"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <img src="/play.png" alt="" />
                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <img className='pb-5 ' src="/ayuGallery/10.png" alt="" />
                            <img className='pb-5' src="/ayuGallery/8.png" alt="" />
                            <img className='pb-5' src="/ayuGallery/9.png" alt="" />
                        </div>
                    </div>
                    <div className='row grid-cols-1  col-span-3'>
                        <img className='pb-8' src="/ayuGallery/11.png" alt="" />
                        <img className='pb-8' src="/ayuGallery/12.png" alt="" />
                        <img className='' src="/ayuGallery/13.png" alt="" />
                    </div>
                </div>
            </section>

            {/* Natural Environment */}
            <section className='mx-5 lg:px-32 py-20'>
                <h2 className="text-3xl font-bold mb-8">Natural Environment</h2>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-12'>
                    <div className='row grid-cols-1  col-span-5'>
                        <img className='pb-8 ' src="/GalleryNatural/1.png" alt="" />
                        <img className=' ' src="/GalleryNatural/2.png" alt="" />

                    </div>
                    <div className='grid grid-cols-1   col-span-7'>
                        <div className='gap-4 flex flex-row justify-between'>
                            <img className='pb-5 ' src="/GalleryNatural/3.png" alt="" />
                            <img className='pb-5' src="/GalleryNatural/4.png" alt="" />
                        </div>
                        <div className='relative col-span-1'>
                            <img className='pb-5 w-full' src="/GalleryNatural/5.png" alt="" />
                            <div class="absolute inset-0  opacity-60 rounded-md"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <img src="/play.png" alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* GalleryCarousel */}
            <section className='py-20'>
                <GalleryCarousel />
            </section>

            {/* Subscribe to our newsletter */}
            <section className="py-8 lg:mx-20 bg-gray-50">
                <div className=" mx-auto max-w-4xl px-4">
                    <form className="flex items-center border  rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className=" px-4 w-full mr-4 py-3 border-gray-600 border rounded-lg outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#001F2B] w-5/12 text-white px-6 py-3 hover:bg-blue-900 rounded-lg"
                        >
                            SUBSCRIBE OUR NEWSLETTER
                        </button>
                    </form>
                </div>
            </section>



            {/* footer */}

            <Footer />

        </div>
    )
}
