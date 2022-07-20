import React from "react";

import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import {selectCurentUser} from '../../redux/user/user.selector';
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.reducer";

import {createStructuredSelector} from 'reselect';

const CollectionItem = ({ item, addItem, currentUser }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => {
        if(currentUser){
          addItem(item)
        }else {
          alert("You need to login ! If you don't have an account, please register.")
        }
      }}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),

});

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurentUser,
});

export default connect(mapStateToProps , mapDispatchToProps)(CollectionItem);
