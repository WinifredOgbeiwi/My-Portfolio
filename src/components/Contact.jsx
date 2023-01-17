import React from 'react'
function Contact() {
  return (
    <div 
    name='contact'
      className='w-full h-screen bg-slate-900 shadow-lg shadow-white p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
          <h3 className='text-4xl font-bold inline bg-cyan-500 shadow-lg shadow-cyan-500/50 px-8 py-3 rounded-md'>Contact</h3>
            </div>

            <div className='flex justify-center items-center'>
                  <form action= 'https://getform.io/f/b0db5501-b350-4502-913b-fed76f9c5ccb' 
                  method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input
                    type='text'
                    name='name'
                    required
                    placeholder='Enter name'
                    className='p-2 bg-transparent border-2  rounded-md text-white focus:outline-none' />

                      <input
                          type='email'
                          name='email'
                          required
                          placeholder='Enter email'
                          className='p-2 bg-transparent border-2  rounded-md text-white focus:outline-none my-4' />

                          <textarea 
                          name='message'
                          rows='10'
                          required
                          placeholder='enter your message'
                          className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets talk</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact