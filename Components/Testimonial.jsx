import React from 'react'
import { FaDribbble, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import photo from '../assets/photo.jpg'
import { GiDuration } from 'react-icons/gi';
import { motion } from "motion/react"

const testimonials = [
    {
        id: 1,
        name: "Bonnie Green",
        role: "Senior Front-end Developer",
        message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        social: {
            facebook: <FaFacebookF />,
            twitter: <FaTwitter />,
            github: <FaGithub />,
            Dribbble: <FaDribbble />,
        },
    },
    {
        id: 2,
        name: "David Singh",
        role: "Full Stack Engineer",
        message:
            "Amazing team and platform! Helped me grow rapidly in my career with expert-led sessions and practical projects.",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        social: {
            facebook: <FaFacebookF />,
            twitter: <FaTwitter />,
            github: <FaGithub />,
            Dribbble: <FaDribbble />,
        },
    },
    {
        id: 3,
        name: "Aisha Khan",
        role: "UI/UX Designer",
        message:
            "The mentors are very knowledgeable and friendly. Loved the personalized attention and support throughout.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        social: {
            facebook: <FaFacebookF />,
            twitter: <FaTwitter />,
            github: <FaGithub />,
            Dribbble: <FaDribbble />,
        },
    },
    {
        id: 4,
        name: "Rahul Verma",
        role: "Backend Developer",
        message:
            "Great experience! The content was very relevant, and the support from the team made everything easier to understand and apply.",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        social: {
            facebook: <FaFacebookF />,
            twitter: <FaTwitter />,
            github: <FaGithub />,
            Dribbble: <FaDribbble />,
        },
    },
];

const Testimonial = () => {
    return (
        <div className='px-24 py-24'>
            <div className='flex justify-center flex-col'>
                {/* header section  */}
                <div
                    className='text-start !space-y-4 mb-8'>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }} className='text-3xl font-bold'>Our Team</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }} className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error atque vel autem, quo placeat ipsa.</motion.p>
                </div>
                {/* Testimonials section  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                    {testimonials.map((item) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                key={item.id} className='p-5 rounded-xl space-y-4 shadow-xl flex flex-col justify-between'>

                                <div>
                                    <img className='rounded-xl object-fill' src={item.image} alt="" />
                                </div>

                                <div>
                                    <h1 className='font-bold text-xl '>{item.name}</h1>
                                    <p className='font-semibold text-gray-500'>{item.role}</p>
                                </div>
                                <div>
                                    <p className='text-gray-500 text-[14px]'>{item.message}</p>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className='flex gap-3 text-gray-500'

                                >
                                    <p>{item.social.facebook}</p>
                                    <p>{item.social.twitter}</p>
                                    <p>{item.social.Dribbble}</p>
                                    <p>{item.social.github}</p>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonial