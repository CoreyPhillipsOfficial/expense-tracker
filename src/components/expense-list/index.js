import React from 'react'
import './expense-list.css'
import Card from './card';
import { useSelector } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ExpenseList = () => {
    const { expenseList: list } = useSelector(state => state.expenses)
    const notifySuccess = () => toast.success('Expense deleted')
    console.log();

    return (
        <div className='expense-list'>
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                pauseOnHover
                transition={Bounce}
            />
            {list.length ? (
                list.map((item) =>
                    <Card key={item.id} item={item} notifySuccess={notifySuccess} />)
            ) : (
                <div className='empty-state'>
                    <img
                        src={require('../../assets/images/empty.png')}
                        alt='Empty List'
                        className='empty-image'
                    />
                    <label>Uh oh! Your expense list is empty.</label>
                </div>
            )}
        </div>

    )
}

export default ExpenseList