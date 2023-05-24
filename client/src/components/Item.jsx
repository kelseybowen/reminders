import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const Item = (props) => {

    const { item } = props;
    const navigate = useNavigate();
    var formattedDate = moment(item.dueDate).utc().format('MMMM Do, YYYY');

    const submitHandler = () => {
        axios.patch(`http://localhost:8000/reminders/${item.id}/complete`, {completed: true})
            .then(res => {
                // navigate("/reminders")
                res.json()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='card mx-auto mb-2' style={{ "width": "18rem" }}>
            <div className="card-body d-flex justify-content-between">
                <div>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{formattedDate}</p>
                </div>
                <div>
                    <form onSubmit={submitHandler}>
                        <button className="btn btn-danger">Done</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Item