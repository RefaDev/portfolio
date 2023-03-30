import React from 'react'
import { IIcons } from 'Mocks/icons'
const IconItem: React.FC<IIcons> = ({ icon, text, id }) => {
  return (
    <div className='about_technologies-item' key={id}>
      <img src={icon} alt={text} />
      <p translate='no'>{text}</p>
    </div>
  )
}

export default IconItem
