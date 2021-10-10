import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from '../../buttons/CustomButton';
import './style.scss';

const SignIn = () => {

    const [formData, setFormData] = useState({email: '', password: ''});

    /**
     * @description handle form submission event
     * @return {void}
     */
    const handleSubmit = event => {
        event.preventDefault();
        setFormData({email: '', password: ''});
    }

    /**
     * @description handle form change event
     * @param {Event} event 
     */
    const handleChange = event => {
        const { value, name } = event.target;
        const newStateObj = { [name]: value }
        const oldStateObj = formData;
        setFormData({...oldStateObj, ...newStateObj});
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    handleChange={handleChange}
                    label="email"
                    required 
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={formData.password} 
                    handleChange={handleChange}
                    label="password"
                    required     
                />

                <CustomButton type="submit" >
                    Sign in
                </CustomButton>
            </form>
        </div>
    );

};

export default SignIn;