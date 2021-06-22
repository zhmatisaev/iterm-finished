import React from 'react'
import 'antd/dist/antd.css'
import { Button, Select } from 'antd';
import './Header.css'
import { CustomButton } from '../CustomButton'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../routes'
import { UserProfile } from '../../pages/UserProfile';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { is_delete } from '../../store/actions';

const { Option } = Select;

export const Header = () => {
    
    const history = useHistory()
	const currentUser = useSelector((state) => state.currentUser)
	const dispatch = useDispatch()

    return (
        <header className="container header">
            <Link style={{ color: "#1D212A" }} to={routes.home}>
                <div className="logo">iTerms</div>
            </Link>
            <nav>
                <a href="">Generate</a>
                <Link to={routes.sign_up}>Contact us</Link>
                <a href="">Pricing</a>
                <a href="">Blog</a>
            </nav>
            <Select defaultValue="EN" style={{ width: 69 }} >
                <Option value="EN">EN</Option>
                <Option value="RU">RU</Option>
            </Select>
            {currentUser.firstName ? (
                <div className="profile">
					<div className='profile__name'>
						{currentUser.firstName}{' '}
						{currentUser.lastName ? currentUser.lastName[0] : ''}{" . "}
					</div>
                    <Link to={routes.user_profile}>
                        {currentUser.photo ? (
						<img
							className='profile__img'
							src={currentUser.photo}
							alt={currentUser.firstName}
                            />) : (
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" alt="avatar" />
                        )}
					</Link>
					<div>
						<CustomButton
							danger
                            onClick={() => {
                                    dispatch(is_delete(history.push(routes.sign_up)))
							}}
						>
							Exit
						</CustomButton>
					</div>
				</div>
            ):(
            <div>
                <Link to={routes.login}>
                    <Button type="text">Log in</Button>
                </Link>
                {/* <Link to={routes.user_profile}>Profile</Link> */}
                <Link to={routes.sign_up}>
                    <CustomButton primary>Sign up</CustomButton>
                </Link>
                </div>
            )}
        </header>
    )
}