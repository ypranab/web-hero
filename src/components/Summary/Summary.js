import React from 'react';
import './Summary.css'

const Summary = (props) => {
    const user = props.userInfo;
    const totalSalary = user.reduce((total, user) => total+user.price, 0);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="userIn">
            <h2>This is Summary</h2>
            <h3>Client added: {user.length}</h3>
            <h3>Total Salary: {formatNumber(totalSalary)}</h3>
        </div>
    );
};

export default Summary;