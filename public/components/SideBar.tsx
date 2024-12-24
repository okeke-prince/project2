import React from 'react'
import Button from './Button'
import home from "../icons/home.png"
import "../css/styles.css"

type Props = {}

function SideBar({}: Props) {
  return (
    <div className='side-div p-3 d-flex flex-column '>
        <div className=' mb-4 d-block d-flex w-75'>
            <img src="../icons/polypay.svg" alt="" width={200} />
        </div>
        
        <div className=' d-flex mx-3 flex-column align-items-start '>
            <Button imageSrc={'../icons/home.png'} text={"Dashboard"}/>
            <Button imageSrc={'../icons/invoice.png'} text={"Invoice"}/>
            <Button imageSrc={'../icons/conversation.png'} text={"Messages"}/>
            <Button imageSrc={'../icons/wallet.png'} text={"Wallet"}/>
            <Button imageSrc={'../icons/pie-chart.png'} text={"Activity"}/>
            <Button imageSrc={'../icons/google-analytics.png'} text={"Analytics"}/>

        </div>
       
    </div>
  )
}

export default SideBar