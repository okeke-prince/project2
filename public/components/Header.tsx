import React from 'react'
import img from "../icons/notification.svg"
import "../css/styles.css"


type Props = {}

export default function Header({ }: Props) {
    return (
        <div className=' p-4 d-flex justify-content-between'>
            <span></span>
            <div>
                <a href="" className='mx-4'>
                    <img src="../icons/bell.svg" alt=""  width={30}/>
                </a>
                <a href="" >
                    <img src="../icons/profile.svg" alt=""  width={30}/>
                </a>
            </div>
            
        </div>
    )
}