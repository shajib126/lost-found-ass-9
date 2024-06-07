import React from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
    {
        title:"I can't thank this site enough! I lost my wallet on a busy street, and I was devastated. Within hours of posting it here, someone contacted me saying they found it. This service is a lifesaver!  ",
        name:" — Sarah M."
    },
    {
        title:"I was skeptical at first, but this site truly works wonders. My cat went missing for three days, and I posted a notice here. A kind neighbor found her and saw my post. I'm so grateful for this community! ",
        name:"— Alex T"
    },
    {
        title:"I found a beautiful necklace at the park and didn't know where to turn it in. Posting it on this site was so easy, and within a week, the owner reached out. It feels great to help someone in need! ",
        name:'— Jessica L.'
    }
]

const Testimonials = () => {
  return (
    <div className='mt-[200px]'>
    <h1 className='text-center font-bold text-xl'>Testimonials</h1>
    <div className=' p-4 flex-wrap flex w-[80%] justify-between mx-auto'>
        {
            testimonials?.map((testimonial:{title:string,name:string},i:number)=>(
                <TestimonialCard key={i} title={testimonial.title} name={testimonial.name} />
            ))
        }
    </div>
    </div>
  )
}

export default Testimonials