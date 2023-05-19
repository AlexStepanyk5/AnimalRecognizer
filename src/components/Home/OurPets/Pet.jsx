import React from 'react'
import './style.scss';

const Pet = ({pet}) => {

  var imageSrc = pet.image.src;
  var imageAlt = pet.image.alt;
  
  return (
    <div>
          <div className='card'>
            <img src={imageSrc} alt={imageAlt}/>
            <h4 className='pet-name'>{pet.name}</h4>
            <p className='shelter-name'>{pet.currentShelter.name}</p>
          </div>
    </div>
  )
}

export default Pet

{/* <img src="https://drive.google.com/uc?export=view&id=1lcYH0g_M7HX5_CQ4XkpuSBznHJrbKYoX"/> */}