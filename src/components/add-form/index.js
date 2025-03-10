import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './add-form.css'
import { categories } from '../../constants/add-expense.js';
import { addExpense } from '../../redux/actions/expenses';
import { Bounce, ToastContainer } from 'react-toastify'

const AddForm = () => {
    const cat = categories
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const dispatch = useDispatch()

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

    const handleSubmit = () => {
        if (title === '' || amount === '' || !cat) {
            console.log('Missing data');
            return
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date().toISOString(),
        }
        dispatch(addExpense(data))
    }

    return (
        <div className="add-form">
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
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
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className='fi-rr-paper-plane'></i>
                </div>
            </div>
        </div>
    )
};

export default AddForm