import React ,{useContext} from "react";
import {Grid , Typography ,Button} from "@material-ui/core";
import { CartContext } from "../../Context/CartContext";
const Drinks = ({name, id, price}) => {

    const {setcart} = useContext(CartContext);

    const addItem = () => {
        const item = {
            name,id,price
        }
        setcart(cur => [...cur,item])
    }
  return (
      <Grid item xs = {12} sm = {6} md = {4} lg = {3}>
        <Grid item style={{ width: "100%", height: "300px", backgroundColor:'black' }} />
        <Typography>{name}</Typography>
        <Typography>Rs{price}</Typography>
        <Button color = 'primary' variant = 'outlined' onClick={addItem}>Add to Cart</Button>
      </Grid>
  );
};

export default Drinks;
