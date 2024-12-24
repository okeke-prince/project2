import React from 'react'

type Props = {
    recipient: string;
    date: string;
    transactionId: string;
    amount: string;
    status: string; // Transaction status, e.g., "success"
  };
  
  function Transaction({ recipient, date, transactionId, amount, status }: Props) {
    return (
      <div className="d-flex justify-content-lg-between align-items-center p-2 rounded-3">
        <div className="d-flex align-items-center">
          <img src="../icons/profile.svg" alt="profile" width={40} />
          <span className="px-4">{recipient}</span> {/* Dynamic recipient */}
        </div>
        <span>{date}</span> {/* Dynamic date */}
        <span>{transactionId}</span> {/* Dynamic transaction ID */}
        <span>{amount}</span> {/* Dynamic amount */}
        <div className=' d-flex col-2 justify-content-center'>
            <div className={`btn  ${status === "success" ? "btn-success" : "btn-danger"}`}>
            {status}
            </div> 
        </div>{/* Dynamic status with conditional class */}
      </div>
    );
  }

export default Transaction