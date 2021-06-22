import React, { useState, useEffect } from 'react'
import { CustomButton } from '../../components/CustomButton'
import './sign_up.css'
import { GoogleOutlined, FacebookFilled, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import {routes} from '../../routes'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { add_user } from '../../store/actions'
import validation from './Validation'
import { TextField } from '../../components/TextField'
import { Input, Space } from 'antd';


export const SignUp = () => {
    // useState
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        inEmail: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        }) 
    }
    const state = useSelector(state => state);
    const success = useSelector(state => state.success);
    const localUsers = useSelector(state => state.localUsers);
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(state));
    }, [currentUser])
    const history = useHistory();

    useEffect(() => {
        if (values.email.trim() && values.name.trim() && values.password.trim()) {
            localStorage.setItem('users', JSON.stringify(state))
            history.push('./profile');
        }
    }, [state]);


    const onAdd = () => {
        //  (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)
        // let checkEmail = /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
        let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (values.name !== "" && checkEmail.test(values.email) && values.password.length > 7) {
            dispatch(add_user({
                firstName: values.name.split(' ')[0],
                lastName: values.name.split(' ')[1],
                userEmail: values.email,
                userPassword: values.password,
                id: Date.now().toString(),
                success: true,
            })    
            )
        }
        else {
            setErrors(validation(values))
            console.log('true email');
        }
    }
    
    return (
        <main>
            <div className="container">
                <div className="sign_up">
                    <div className='sign_up__block'>
                        <div className="sign_up__block-inside">
                            <div className="title">Sign Up</div>
                            {errors.inEmail && <p style={{ color: 'red' }}>{errors.inEmail}</p>}
                        <form >
                                <div>
                                    {/* name */}
                            <p className="name">Your Name</p>
                                    <TextField
                                        placeholder="Your Name"
                                        name="name" type="text"
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p className="error">{errors.name}</p>}
                            </div>
                                <div>
                                    {/* email */}
                                <p className="name">Your Email</p>
                                    <TextField
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Enter the Email"
                                        name="email" type="email" />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                                <div>
                                    {/* password */}
                                    <p className="name">Password</p>
                                    <Space direction="vertical">
                                        <Input.Password
                                            className="password-inp"
                                        value={values.password}
                                        onChange={handleChange}
                                        placeholder="At least 8 characters long"
                                        name="password"
                                        type="password" />
                                    </Space>
                                 {errors.password && <p className="error">{errors.password}</p>}
                                </div>
                        </form>
                        <div className="text_item">By proceeding, I agree with the Terms of Service and Privacy & Policy</div>
                             <CustomButton
                                type='primary'
                                className="sign_up__btn"
                                onClick={() => {
                                    onAdd()
                                }}>
                                Create account
                                </CustomButton>
                            <div>
                                <p className="name">Sign up with</p>
                                <div>
                                    <button className="btn_sign"><GoogleOutlined /> Google</button>
                                    <button className="btn_sign"><FacebookFilled />Facebook</button>
                                </div>
                        </div>
                            <div>
                                <p className='footer__title'>
                                    Already have an account?
                                    <Link to={routes.login}>Log in</Link> </p>
                        </div>
                        </div>
                    </div>
                    <div className="empty__blue-section"></div>
                </div>
            </div>
            <div>
            </div>
        </main>
    )
}
