import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './Testimonial.css';
const Testimonial = () => {
    const testimonial = [
        {
            url: '/sachin.png',
            paragraph: ' lorem24Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum corrupti delectus nulla? Dolore beatae modi voluptate quasi, explicabo id molestias, veritatis ea iusto asperiores quia dolor inventore dolores officiis ex.',
            name: '-Sachin Kedia'
        },
        {
            url: '/yashraj.png',
            paragraph: 'lorem24 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum corrupti delectus nulla? Dolore beatae modi voluptate quasi, explicabo id molestias, veritatis ea iusto asperiores quia dolor inventore dolores officiis ex.',
            name: '-Yash Raj Vishnoi'
        },
        {
            url: '/sachin.png',
            paragraph: 'lorem24 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum corrupti delectus nulla? Dolore beatae modi voluptate quasi, explicabo id molestias, veritatis ea iusto asperiores quia dolor inventore dolores officiis ex.',
            name: 'Sachin Kedia3'
        },
        {
            url: '/sachin.png',
            paragraph: 'lorem24 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum corrupti delectus nulla? Dolore beatae modi voluptate quasi, explicabo id molestias, veritatis ea iusto asperiores quia dolor inventore dolores officiis ex.',
            name: 'Sachin Kedia4'
        }
    ];

    const [currIndex, setCurrIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');

    const prevSlide = () => {
        setCurrIndex(currIndex === 0 ? testimonial.length - 1 : currIndex - 1);
        setSlideDirection('prev');
    };

    const nextSlide = () => {
        setCurrIndex(currIndex === testimonial.length - 1 ? 0 : currIndex + 1);
        setSlideDirection('next');
    };

    const goToSlide = (slideIndex) => {
        setCurrIndex(slideIndex);
    };

    const sliding_next = () => {
        setSlideDirection('-translate-x-full');
    };

    const sliding_prev = () => {
        setSlideDirection('translate-x-full');
    };

    return (
        <div className='min-h-screen relative bg-slate-200'>
            <div className='text-center my-15'>
                <h2 className='text-4xl font-bold mt-8 mb-16'>Few Good Words About Us</h2>
            </div>
            <div className='flex flex-row justify-evenly items-center'>
                <div className='flex -translate-y-1/2 my-auto items-center text-2xl rounded-full p-2 bg-black text-indigo-600 bg-opacity-20 cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className='max-w-lg group relative'>
                    <div className={`relative mb-6 bg-testimonial  rounded-lg transition-transform duration-500 ease-in-out transform  ${slideDirection === 'next' ? 'animate-left' : slideDirection === 'prev' ? sliding_prev : ''}`}>
                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20'>
                            <img src={testimonial[currIndex].url} alt='' className='w-full h-full rounded-full shadow-lg border-2 border-indigo-300' />
                        </div>
                        <div className='py-12 justify-center text-center px-8'>
                            <p className='mb-4 w-60 text-white font-semibold'>
                                <img src='/q1.png' alt='' className='w-6 inline' />
                                {testimonial[currIndex].paragraph}
                                <img src='/q2.png' alt='' className='w-6 inline' />
                            </p>
                            <p className='text-pink-400 font-bold text-left text-xl'>{testimonial[currIndex].name}</p>
                        </div>
                        <div className="flex absolute bottom left-1/2 -translate-x-1/2 text-4xl  justify-center space-x-4">
                    {testimonial.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`text-6xl cursor-pointer ${index === currIndex ? 'text-indigo-600' : ''}`}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
            </div>
                    </div>
                </div>
                <div className='flex -translate-y-1/2 my-auto items-center text-2xl rounded-full p-2 bg-black text-indigo-600 bg-opacity-20 cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                
            </div>
            
        </div>
    );
};

export default Testimonial;
