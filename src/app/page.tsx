import Image from "next/image";
import styles from "./page.module.css";
import SideBar from "../../public/components/SideBar";
import DebitCards from "../../public/components/DebitCards";
import Account from "../../public/components/Account";
import Transaction from "../../public/components/Transaction";

export default function Home() {
  return (
    <div className="h-75 col-12 d-flex">
      <div className="col-4 p-3">
        <div className=" p-3">
          <h3>Send Money</h3>
          {/* <DebitCards /> */}
          <Account
            cardType="Debit"
            balance="$10,344"
            cardImage="../icons/mastercard.svg"
          />
          <Account
            cardType="Debit"
            balance="£236,344"
            cardImage="../icons/visa.svg"
          />
        </div>
      </div>
      <div className=" col-8 p-4">
        <h3>Transactions</h3>
        <div className=" pt-3">
          <Transaction
            recipient="to Alice"
            date="Feb 15, 2021"
            transactionId="*****56789"
            amount="-$200"
            status="success"
          />
          <Transaction
            recipient="to Bob"
            date="Mar 10, 2022"
            transactionId="*****12345"
            amount="-$50"
            status="pending"
          />
          <Transaction
            recipient="to Carol"
            date="Jan 5, 2023"
            transactionId="*****67890"
            amount="-$300"
            status="failed"
          />
          <Transaction
            recipient="to Daniel"
            date="Dec 25, 2021"
            transactionId="*****23456"
            amount="+$150"
            status="success"
          />
          <Transaction
            recipient="to Eve"
            date="Oct 18, 2020"
            transactionId="*****98765"
            amount="-$400"
            status="success"
          />
        
         
        </div>
      </div>
    </div>
  );
}
