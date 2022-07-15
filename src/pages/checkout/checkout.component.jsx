import React from 'react';
import './checkout.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { CartAmountTotal, SelectCartItems} from '../../redux/cart/cart.selector';

import CheckOutComponent from '../../components/Check-Out/checkout.component';
import StripeCheckoutButton from '../../components/stripe/stripe.component';
const CheckOutPage =({total,cartItem}) =>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Descrition</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        <div>
            {cartItem.map(
                cart =>(<CheckOutComponent key={cart.id} cart={cart}/>)
            )}
        </div>
        <span className='total'>  Total: ${total}</span>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps=createStructuredSelector({
cartItem:SelectCartItems,
total:CartAmountTotal
});

export default connect(mapStateToProps,null)(CheckOutPage);
