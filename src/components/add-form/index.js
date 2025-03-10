import React, { useState } from 'react'
import './add-form.css'
import { categories } from '../../constants/add-expense.js';

const AddForm = () => {
    const cat = categories
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setAmount('');
            return
        }
        setAmount(val);
    }

    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }

    return (
        <div className="add-form">
            <div className="form-item">
                <label>Title</label>
                <input
                    placeholder='What is your expense?'
                    value={title}
                    onChange={(e) => handleTitle(e)}
                />
            </div>
            <div className="form-item">
                <label>Amount $</label>
                <input
                    value={amount}
                    placeholder='Enter Amount'
                    className='amount-input'
                    onChange={(e) => handleAmount(e)}
                />
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>{category ? category.title : 'Category'}</label>
                        <i className='fi-rr-angle-down'></i>
                    </div>
                    {categoryOpen &&
                        <div className='category-container'>
                            {cat.map(category => (
                                <div className='category-item' style={{
                                    borderRight: `5px solid ${category.color}`
                                }} key={category.id} onClick={() => handleCategory(category)}
                                >
                                    <label>{category.title}</label>
                                    <img src={category.icon} alt={category.title} />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default AddForm