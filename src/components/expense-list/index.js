import React from 'react'
import './expense-list.css'
import Card from './card';

const ExpenseList = () => {
    const list = [
        {
            title: 'Made a purchase',
            logo: 'sjahsgf',
            createdAt: Date.now(),
            amount: 1234,
        }
    ];
    return (
        <div>
            {list.length ? (
                list.map((item, id) => (
                    <Card key={id} item={item} />
                ))
            ) : null}
        </div>
    )
}

export default ExpenseList