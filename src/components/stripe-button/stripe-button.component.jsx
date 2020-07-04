import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GzrHZG5l43maNv0S2tOO6UTAS6r63cQAObpsHVvKNIIaVISwlyGsWwVZnhE0ZQ918OvfBmHVCUTiOzLH7NgFMq900idYEx7dJ";

  const onToken = (token) => {
    console.log({ token });
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
