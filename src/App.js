import React, { useState } from 'react';
import './App.css';

function Registration() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправленные данные:', formData);
    }

    return (
        <div className="wrapper">
            <div className="border">
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullName">ФИО:</label>
                        <br/>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Номер телефона:</label>
                        <br/>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <br/>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div id="click">
                        <button type="submit" id="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
