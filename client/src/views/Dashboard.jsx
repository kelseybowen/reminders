import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Item from '../components/Item';

const Dashboard = () => {

    const [allReminders, setAllReminders] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/reminders")
            .then(res => setAllReminders(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='container-fluid'>
            <Header/>
            {
                allReminders.map((item) => (
                    <Item item={item} key={item.id}/>
                ))
            }
        </div>
    )
}

export default Dashboard