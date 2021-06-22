import { Button } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { TextField } from '../../../components/TextField'
import { routes } from '../../../routes'
import { delete_account } from '../../../store/actions'
import './index.css'
import {message} from 'antd'

export const DeleteAccount = () => {

	const [thePassword, setThePassword] = useState('')
	const dispatch = useDispatch()
	const currentEmail = useSelector(state => state.currentUser.userEmail)
	const history = useHistory()

	// antd alert
  const info = () => {
  message.info('Deleted Account');
	};
	const error = () => {
		message.error("Your password error")
	}
	const onDelete = () => {
		if ( currentEmail  ) {
		console.log();
		dispatch(
		delete_account(thePassword, currentEmail, {
			lastName: '',
			firstName: '',
			userEmail: '',
			userPassword: '',
			id: '',
			photo: '',
		}),
		history.push('/')
			)
			info()
		} else if(!currentEmail) {
			error()
		}
}

	return (
		<div className='settings-block '>
			<h3>Are You Positive You wish to delete Your iTerms Account?</h3>
			<p>
				Please note that should you delete your account, all policies
				will be permanently removed from our database. You will be
				unable to retrieve your documents should you wish in the future.{' '}
				<br />
				<br />
				Before you go, please do not hesitate to contact our support
				team with any questions or concerns you may have with our
				services.
			</p>
			<div className="delete__account">
				<TextField
					label='Password'
					type="password"
					placeholder='Entre password'
					value={thePassword}
					onChange={(e) => setThePassword(e.target.value)}
				/>
				<Link className="delete__back" to={routes.user_profile}>
					Back
				</Link>
				<Button
					className='delete__delete'
					onClick={() => {
						onDelete();
						
					}}
				>
					Delete
				</Button>
			</div>
		</div>
	)
}
