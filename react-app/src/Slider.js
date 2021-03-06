import React from 'react'
import './Slider.css'

const Slider = () => {
    let sliderArr = [1, 2, 3, 4, 5]

    return (
        <div className = 'slider'>
            {sliderArr.map((item, index) => {
                return (
                    <div key= {index} className='slide'>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider
