import React from 'react'
import Drinks from '../Drinks/Drinks'
import {Grid} from '@material-ui/core'

const DrinkList = () => {

    const database = [
        {name:"red label" ,id:1,price:300},
        {name:"black label" ,id:2,price:500},
        {name:"Jack Daniels" ,id:3,price:1000}
    ]

    const addItem = () => {

    }
    return (
        <Grid container spacing = {3}>
            {database.map(item => {
                return(
                    <Drinks key ={item.id}  name = {item.name} id = {item.id} price = {item.price} addItem = {addItem}/>
                )
            })}
        </Grid>
    )
}

export default DrinkList
