import React from 'react'

function Headings(props) {
    return (
        <div className='flex justify-center'>
            <h3 className='text-xl font-bold shadow-2xl text-center px-16 py-3 mb-10'>{props.title}</h3>
        </div>
    )
}

export default Headings




