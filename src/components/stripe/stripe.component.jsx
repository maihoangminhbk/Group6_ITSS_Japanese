import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
const priceforStripe = price *100;
const stripepublicKey='pk_test_51HxT8HGrpJKOq6Kus8cKbLqaLkdeY2LbU7HAr0KlNC0Y0iDkyhiqLNQhztRHNKnufAcTcftAG7YdsGhJ6iXGNmyI00fRyrypTV';

const onToken =token =>{
    alert('payment successful')
}
return(
    <StripeCheckout
    label='Pay Now'
    name= 'LUNOX Clothing Ltd.'
    billingAddress
    shippingAddress
    image ='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceforStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={stripepublicKey}
     />
);
};
export default StripeCheckoutButton ;