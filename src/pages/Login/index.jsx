import React, { useState } from 'react'
import { CustomButton } from '../../components/CustomButton'
import './Login.css'
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons'
import { TextField } from '../../components/TextField'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../routes'
import { useDispatch, useSelector } from 'react-redux'
import { add_form, login_user } from '../../store/actions'
import { Space, Input } from 'antd'
//  <TextField type="text" placeholder="Your Name" label="Your Name" />

export const Login = () => {
    // const dispatch = useDispatch()
	// const succes = useSelector((state) => state.succes)

	// const [inEmail, setInEmail] = useState('')
	// const [inPassword, setInPassword] = useState('')

	// const history = useHistory()

	// if (succes) {
	// 	history.push('./profile')
	// }

    const dispatch = useDispatch()
	const success = useSelector((state) => state.success)
	const localUsers = useSelector((state) => state.localUsers)

	const [inEmail, setInEmail] = useState('')
	const [inPassword, setInPassword] = useState('')

    const history = useHistory()
    
    
if (success) {
		history.push('/profile')
	}

	

    return (
        <main>
            <div className="container">
                <div className="sign_up">
                    <div className='sign_up__block1'>
                        <div className="sign_up__block-inside">
                            <div className="title">Sign In</div>
                            <div>
                                <p className="name-sign">Sign in with</p>
                                <div>
                                    <button className="btn_sign"><GoogleOutlined /> Google</button>
                                    <button className="btn_sign"><FacebookFilled /> Facebook</button>
                                </div>
                            </div>
                            <p className="or">Or</p>
                        <form >
                            <div>
                                <p className="name">Email</p>
                                    <TextField
                                        placeholder="Enter the Email"
                                        value={inEmail} name="email"
                                        type="email"
                                        onChange={(e)=> setInEmail(e.target.value)}
                                    />
                            </div>
                            <div>
                                    <p className="name">Password</p>
                                    <Space direction="vertical">
                                        <Input.Password
                                            className="password-inp"
                                        placeholder="At least 8 characters long"
                                        value={inPassword}
                                        name="password"
                                        type="password"
                                        onChange={(e)=> setInPassword(e.target.value)}
                                        />
                                    </Space>
                            </div>
                        </form>
                            <CustomButton 
                                // onSuccess()
                                onClick={() => {
							dispatch(login_user({ inEmail, inPassword }))
						
                            }} primary className="sign_up__btn">Sign in</CustomButton>
                            <div>
                                <p className='footer__title'> Don't have an account?  <Link to={routes.sign_up}>
                                    <a  href=""> Sign up</a></Link> </p>
                        </div>
                        </div>
                    </div>
                    <div className="empty__blue-section1"></div>
                </div>
            </div>
        </main>
    )
}