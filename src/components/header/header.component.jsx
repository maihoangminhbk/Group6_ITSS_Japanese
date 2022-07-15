import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CardIcon from '../CardIcon/CartItem.component';
import CardDropdown from '../CartDropdown/cartdropdown.component';

import {createStructuredSelector} from 'reselect';
import {selectCurentUser} from '../../redux/user/user.selector';
import {SelectCartHidden} from '../../redux/cart/cart.selector';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CardIcon />
    </div>
    {
      hidden ? null : <CardDropdown />
    }
   
  </div>
);

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurentUser,
  hidden:SelectCartHidden
});

export default connect(mapStateToProps)(Header);
