import React from 'react'
import "../css/styles.css"


type Props = {}

function Statistics({}: Props) {
  return (
    <div className=' p-4 rounded-4 stat'>
    <h3 className=' pt-4'>Statistics</h3>
    <div className='d-flex align-items-center p-4 mt-4 justify-content-around'>
      <div className='d-flex'>
        <div>
          <img src="../icons/customer.svg" alt="img" width={50} />
        </div>
        <div className='d-flex flex-column justify-content-end px-2'>
          <h5>220k</h5>
          <span>Customers</span>
        </div>
      </div>

      <div className='d-flex'>
        <div>
          <img src="../icons/remit.svg" alt="img" width={50} />
        </div>
        <div className='d-flex flex-column justify-content-end px-2'>
          <h5>230k</h5>
          <span>Remittance</span>
        </div>
      </div>

      <div className='d-flex'>
        <div>
          <img src="../icons/donation.svg" alt="img" width={50} />
        </div>
        <div className='d-flex flex-column justify-content-end px-2'>
          <h5>270k</h5>
          <span>Donation</span>
        </div>
      </div>

      <div className='d-flex'>
        <div>
          <img src="../icons/time.svg" alt="img" width={50} />
        </div>
        <div className='d-flex flex-column justify-content-end px-2'>
          <h5>130k</h5>
          <span>Watchtime</span>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Statistics