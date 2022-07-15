import React from 'react';
import './cartdropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {withRouter} from 'react-router-dom';
import CartInIcon from '../Cart-Item/cartitem.component';
import {connect} from 'react-redux';
import {SelectCartItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import {togglecartHidden} from '../../redux/cart/cart.reducer';

const CardDropdown = ({cartItem,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItem.length ?
               ( cartItem.map(cart => (
                <CartInIcon key={cart.id} item={cart} />
               ))
               ):(
                   <span className='empty-message'> Your Cart is Empty </span>
               )
            }
        </div>
            <CustomButton  onClick ={()=>
            {history.push('/checkout');
            dispatch(togglecartHidden());
            }}>
                Go to Checkuot
            </CustomButton>
        </div>
   
);
const mapStateToProps =createStructuredSelector({
cartItem:SelectCartItems
});
export default withRouter(connect(mapStateToProps) (CardDropdown));