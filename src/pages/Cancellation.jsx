import React from "react";
import Nav from "../components/Nav";

const Cancellation = () => {
  return (
    <>
   
      <div>
        
        <p
          style={{
            marginLeft:'10px',
            color: "blue",
            fontSize: "27px",
            fontFamily: "fantasy",
            marginTop:'20px'
          }}
        >
          Return & Refund Policy of www.letusmaintain.com
        </p>
      </div>
      <div
        style={{
          color: "black",
          fontSize: "19px",
          marginLeft: "30px",
          marginRight: "30px",
          fontFamily: "sans-serif",
        }}
      >
        If you are not happy with your purchase, we will accept a return of a
        unused product within 14 days. Once we receive the returned item
        LetUsMaintain will then give a full refund (excluding shipping as we are
        unable to refund the initial shipping cost of your order). Our Return &
        Refund Policy was created by Return Refund Policy Template for
        www.letusmaintain.com <br />
        <p
          style={{
            margiBottom: "10px",
            marginTop: "10px",
          }}
        >
          Please allow 1-2 weeks for your return to be processed.
        </p>
        <p
          style={{
            margiBottom: "10px",
            marginTop: "10px",
          }}
        >
          Discounted items are not eligible for a return.
        </p>
        <p
          style={{
            margiBottom: "10px",
            marginTop: "10px",
          }}
        >
          LetUsMaintain will not issue refunds for products purchased through
          other entities, such as distributors or retail partners.
        </p>{" "}
        <p
          style={{
            margiBottom: "10px",
            marginTop: "10px",
          }}
        >
          Returned items must be delivered to us unused, in original packaging
          and in the condition they were received or may not be eligible for
          refund or be subject to a restocking fee. We cannot be held
          responsible for items damaged or lost in return shipment, therefore we
          recommend an insured and trackable mail service.
        </p>{" "}
        <p
          style={{
            margiBottom: "10px",
            marginTop: "10px",
          }}
        >
          We are unable to issue a refund without actual receipt of the item(s)
          or proof of received return delivery.
        </p>{" "}
        <p
          style={{
            margiBottom: "10px",
            marginTop: "10px",
          }}
        >
          We aim to accept all returns. In the unlikely event that an item is
          returned to us in an unsuitable condition, we may have to send it back
          to you. All goods will be inspected on return.
        </p>{" "}
      </div>
    </>
  );
};

export default Cancellation;
