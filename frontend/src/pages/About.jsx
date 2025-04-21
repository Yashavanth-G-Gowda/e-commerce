import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../component/NewsLetterBox'

const About = () => {
  return (
    <div>
        

        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem accusantium maxime omnis corrupti praesentium, obcaecati quae? Explicabo reprehenderit fuga earum, aliquam impedit corrupti quas nulla, quasi nisi dolorem dolore consectetur!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat provident, neque laudantium optio dolorum, iusto autem molestiae sint illo sunt placeat alias ex maxime debitis, ducimus doloribus veritatis harum omnis.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laborum ducimus aliquid recusandae asperiores cumque. Et repellendus quis consequuntur. Inventore repellendus officia optio. Fuga, provident. Sequi consectetur non dolorem optio?</p>
          </div>
        </div>
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex fle-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro harum totam quam nesciunt rem? Laboriosam culpa, perspiciatis error nulla labore recusandae nam molestias ipsam! Dolores quas maiores voluptas officiis nostrum.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex fle-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro harum totam quam nesciunt rem? Laboriosam culpa, perspiciatis error nulla labore recusandae nam molestias ipsam! Dolores quas maiores voluptas officiis nostrum.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex fle-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro harum totam quam nesciunt rem? Laboriosam culpa, perspiciatis error nulla labore recusandae nam molestias ipsam! Dolores quas maiores voluptas officiis nostrum.</p>
          </div>
        </div>

        <NewsLetterBox/>

    </div>
  )
}

export default About