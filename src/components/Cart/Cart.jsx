import React from "react";
import {Grid, Typography } from "@material-ui/core";
import {useContext} from 'react';
import {CartContext} from '../../Context/CartContext';
const Cart = () => {
    const {cart} = useContext(CartContext);

  return (
    <div className="cart-container" style={{ marginTop: "70px" }}>
      <Grid>
        Your Cart
        <Grid item>
            {cart && cart.map(item => {
                return(<Typography>Item:{item.name}|Price: Rs{item.price}</Typography>)
            })}
        </Grid>
        <Typography>Items in Cart : {cart.length}</Typography>
        <Typography> Total : {cart.reduce((acc,item) => item.price + acc,0)}</Typography>
      </Grid>
    </div>
  );
};

export default Cart;
