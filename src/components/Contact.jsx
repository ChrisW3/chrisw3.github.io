import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4 pt-16'>
        <form method='POST' action="https://getform.io/f/lajkexlb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-800 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-2'>Shoot me an email at: crwoolley3@gmail.com</p>
                <p className='text-gray-300'>Or fill out the form below and submit:</p>
            </div>
            <input className='bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-800 hover:border-red-800 px-4 py-2 my-4 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact