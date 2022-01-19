import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, SetInputValue] = useState('');

    const handleOnChange = (e) => {
        SetInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( inputValue.trim().length > 2){
            setCategories(cats => [ inputValue, ...cats])
            SetInputValue("");
        }
    }
    

  return (      
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
            type="text"
            value={ inputValue }
            onChange={handleOnChange}/>

        </form>
        )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}