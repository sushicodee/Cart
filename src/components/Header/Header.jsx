import React,{useContext} from 'react';
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Header.css';
import { CartContext } from '../../Context/CartContext';
const Header = () => {
    const {cart} = useContext(CartContext)
    return (
        <AppBar>
            <Toolbar className = 'cart-header'>
                <Link to= '/cart' style = {{textDecoration:'none', padding:'5px 10px' ,background:'white'}}>Cart</Link>
                {cart.length ?
                <span className = "cart-count">{cart.length}</span> 
                :null
                }      
            </Toolbar>
        </AppBar>
    )
}

export default Header
