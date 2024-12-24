import React from 'react'
import "../css/styles.css"

type Props = {
    imageSrc: string; // Define the image source as a prop
    altText?: string; // Optional alt text for the image
    text: string; // URL for the link
  };

function Button({ imageSrc, altText = "Button image", text }: Props) {
  return (
    <div className='d-flex w-100 align-items-center p-2 rounded-2 mb-2 button-component'>
        <a href="" className='d-flex align-items-center'>
            <img src={imageSrc} alt={altText}  width={20}/>
            <span>{text}</span>
            
            
        </a>
    </div>
  )
}

export default Button