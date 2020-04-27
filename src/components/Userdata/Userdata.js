import React from 'react';
import './Userdata.css';

const Userdata = (props) => {

    return (
        <div>
            <div className="card">
                <img src={props.user.img} alt="Denim Jeans"></img>
                <h3>{props.user.key}</h3>
                <p class="price">{props.user.seller}</p>
                <p>Yearly Income: {props.user.price}</p>
                <p><button
                    onClick={()=> props.handleAddUser(props.user)}
                >Add to List</button></p>
            </div>
        </div>
    );
};

export default Userdata;