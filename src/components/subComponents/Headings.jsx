import React from 'react'
import './BoxStyle.css'
function Headings(props) {
    return (
        <div className='firstDiv flex justify-center'>
            <h3 className='secondDiv text-xl font-bold text-center px-16 py-3 mb-10'>{props.title}</h3>
        </div>
    )
}

export default Headings




