import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
const priceforStripe = price *100;
const stripepublicKey='pk_test_51L0hj0BJFSZPbA3U9c3VDvpmk6n5KVspFy0aXxZ3x9DPbVbht6qk1Gxz3RWg3xByMVJYkLTHcrmSZYFbMzRlxFC600rQcHQCls';

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