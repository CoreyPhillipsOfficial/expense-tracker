import React from 'react';
import './card.css';

const Card = ({ item }) => {
    return <div className='card'
        style={{ borderRight: `6px solid ${item.category.color}` }}
    >
        <div className="card-image-container">
            <img
                src={item.category.icon}
                alt={item.category.title}
                className='card-image' />
        </div>
    </div >
}

export default Card;