import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './add-form.css'
import { categories } from '../../constants/add-expense'
import { addExpense } from '../../redux/actions/expenses'
import SuccessModal from './success-modal'

const AddForm = () => {
    const cat = categories;
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();


    const handleTitle = (e) => setTitle(e.target.value)

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setAmount('')
            return
        }
        setAmount(val)
    }

    const handleCategory = (catItem) => {
        setCategory(catItem)
        setCategoryOpen(false)
    }

    const handleSubmit = () => {
        if (!title || !amount || !category) {
            toast('Please enter valid data.')
            return
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date().toISOString(),
        }
        dispatch(addExpense(data))
        setModalOpen(true)
    }

    return (
        <div className="add-form">
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                pauseOnHover
                transition={Bounce}
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <div className="form-item">
                <label>Title</label>
                <input
                    placeholder="What is your expense?"
                    value={title}
                    onChange={handleTitle}
                />
            </div>
            <div className="form-item">
                <label>Amount $</label>
                <input
                    value={amount}
                    placeholder="Enter Amount"
                    className="amount-input"
                    onChange={handleAmount}
                />
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div
                        className="category-dropdown"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                    >
                        <label>{category ? category.title : 'Category'}</label>
                        <i className="fi-rr-angle-down" />
                    </div>
                    {categoryOpen && (
                        <div className="category-container">
                            {cat.map((catItem) => (
                                <div
                                    className="category-item"
                                    key={catItem.id}
                                    style={{ borderRight: `5px solid ${catItem.color}` }}
                                    onClick={() => handleCategory(catItem)}
                                >
                                    <label>{catItem.title}</label>
                                    <img src={catItem.icon} alt={catItem.title} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className="fi-rr-paper-plane" />
                </div>
            </div>
        </div>
    )
}

export default AddForm