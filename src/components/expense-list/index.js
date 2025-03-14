import React from 'react'
import './expense-list.css'
import Card from './card';
import { useSelector } from 'react-redux';

const ExpenseList = () => {
    const { expenseList: list } = useSelector(state => state.expenses)
    console.log();

    return (
        <div className='expense-list'>
            {list.length ? (
                list.map((item) =>
                    <Card key={item.id} item={item} />)
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