import React from 'react';
import { useState } from 'react';
import Userdata from '../Userdata/Userdata';
import fakeData from '../../fakeData/data';
import Summary from '../Summary/Summary';

const User = () => {
    const first15 = fakeData.slice(0,15);
    const [users] = useState(first15);
    const [userInfo, setUser] = useState([]);

    const handleAddUser= (user) => {
        const newUser = [...userInfo, user]
        setUser(newUser);
    }
    return (
        <div>
            {
                users.map(user => <Userdata 
                    handleAddUser = {handleAddUser} 
                    user = {user} 
                    ></Userdata>)
            }
            <div className="summary">
                <Summary userInfo = {userInfo}></Summary>
            </div>
        </div>
    );
};

export default User;