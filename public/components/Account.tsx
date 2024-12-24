import React from 'react'
import "../css/styles.css"

type Props = {
    cardType: string; // Type of card (e.g., "Debit")
    balance: string;  // Account balance (e.g., "$10,344")
    cardImage: string; // Path to the card image
  };
  
  function Account({ cardType, balance, cardImage }: Props) {
    return (
      <div className="p-4 mt-3 rounded-4 d-flex justify-content-between account align-items-center">
        <div className="d-flex align-items-center">
          <img src={cardImage} alt={cardType} width={40}/>
          <span className="px-2">{cardType}</span> {/* Dynamic card type */}
        </div>
        <div>
          <span>{balance}</span> {/* Dynamic balance */}
        </div>
      </div>
    );
  }
export default Account