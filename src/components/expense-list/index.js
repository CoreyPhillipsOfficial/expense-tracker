import React from 'react'
import './expense-list.css'
import Card from './card';
import { useSelector } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ExpenseList = () => {
    const { expenseList: list, query } = useSelector(state => state.expenses);
    // console.log("Expense List:", list);
    // console.log("Search Query:", query);
    const filteredList = list.filter(item => item.title.toLowerCase().includes(query.trim().toLowerCase()));
    const notifySuccess = () => toast.success('Expense deleted');

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
            {filteredList.length ? (
                filteredList.map((item) =>
                    <Card key={item.createdAt} item={item} notifySuccess={notifySuccess} />)
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