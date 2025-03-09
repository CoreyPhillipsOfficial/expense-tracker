import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header">
                <div className='header-logo'>
                    Expense Tracker <i className="fi fi-rr-credit-card"></i>
                </div>
                <div className="header-button">
                    <a href="https://github.com/CoreyPhillipsOfficial" target='_blank' rel='noopener noreferrer'>
                        <i className="devicon-github-original"></i>Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header