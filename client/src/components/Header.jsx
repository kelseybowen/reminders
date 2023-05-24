import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Header = () => {
    return (
        <div className='header d-flex justify-content-center my-3'>
            <div className='mx-4'>
                <h1>Reminders</h1>
            </div>
            <div className='mx-4'>
                <button className='btn btn-primary'><Link to={`/reminders/new`} style={{ "color": "white", "textDecoration": "none" }}>Add</Link></button>
            </div>
        </div>
    )
}

export default Header