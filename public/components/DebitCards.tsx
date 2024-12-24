import React from 'react'
import "../css/styles.css"


type Props = {}

function DebitCards({}: Props) {
  return (
    <div className='border border-0 border-none rounded-4 p-3 d-flex flex-column debit-bg '>
        <div className=' d-flex flex-column pb-2'>
            <span className='fs-6 font'>Name</span>
            <span className=' fs-4'>Udo. okeke</span>
        </div>
        <div className=' py-4'>
            
        </div>
        <div className=' d-flex justify-content-between'>
            <div className=' d-flex flex-column justify-content-center'>
                <span className=' font-monospace'>1234 4222 5556</span>
                <span className=' font-monospace fs-6'>08/23</span>
            </div>
            <div className=' d-flex align-items-center'>
                <img src="../icons/visa.svg" alt=""  width={70}/>
                {/* <span>img</span> */}
            </div>
        </div>
    </div>
  )
}

export default DebitCards