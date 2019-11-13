import React, { useState, useEffect } from 'react'
import { ICategory } from '../../models/category';
import CategoriesRequests from '../../api/categories';

const Menu = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        CategoriesRequests.GetAll().then(response => {
            setCategories(response);
        }).catch(error => console.log(error));
    }, [])

    return (
        <div>
            { categories.map((category) => <li key={category.id}>{category.categoryName}</li>) }
        </div>
    )
}

export default Menu
