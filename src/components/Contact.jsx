import React from 'react'

const Contact = () => {

  const config = {
    email : 'mudaliarganesh858@gmail.com',
    phone: '9824284391'
  }

  return (
    <section id='contact' className='flex flex-col px-5 py-20 text-blue'>
    <div className='flex flex-col items-center'>
       
        <h1 className='text-4xl mb-5 w-auto font-bold'>Contact Details</h1>
        <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
        <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
        <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
    </div>
</section>   
  )
}

export default Contact;