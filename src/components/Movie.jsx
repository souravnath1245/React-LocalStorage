import React from 'react';
import { addToDb, addToDbObj, removeFromDb } from './localStorage';

const Movie = (props) => {
    const {title,numberInStock, dailyRentalRate, _id} = props.movie;
    const handlePurchase = id => {
        // set To localStorage :
        addToDb(id)
        addToDbObj(id)
    }
    const handleRemove = id =>{
        removeFromDb(id)
    }
    return (
        <div>
            <h4>Movie Name :{title} </h4>
            <strong>Stock :{numberInStock} </strong>
            <p>Daily Rental Rate: {dailyRentalRate} </p>
            <p>Movie Price : $ 3000</p>
            <button onClick={()=> handleRemove(_id)}>Remove</button>
            <button onClick={()=>handlePurchase(_id)}>Purchase</button>
        
        </div>
    );
};

export default Movie;