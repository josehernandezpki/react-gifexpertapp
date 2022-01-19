import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp(){      
    
    const [categories, setCategories] = useState(["Dr Who"]);

    return (    
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />
            {
                categories.map( cat => (
                    <GifGrid 
                        key={ cat } 
                        category={ cat }
                    />
                ))
            }
        </>
    )
}

