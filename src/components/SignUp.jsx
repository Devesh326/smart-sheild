import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from '../context/AuthContext'

export default function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	let navigate = useNavigate()
	const { login } = useAuth()

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setError('')
			setLoading(true)
			navigate('/dashboard')
			await login(emailRef.current.value, passwordRef.current.value)
		} catch {
			setError('Failed to log in')
		}

		setLoading(false)
	}

	return (
		<div
			style={{
				width: '80%',
				margin: ' 100px auto 0 auto',
				background: '#1d233c',
				padding: '10px',
				borderRadius: '10px',
			}}
		>
			<Card>
				<Card.Body style={{ background: '#1d233c' }}>
					<h2 className='text-center mb-4' style={{ background: '#1d233c' }}>
						Log In
					</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					<Form onSubmit={handleSubmit} style={{ background: '#1d233c' }}>
						<Form.Group id='email' style={{ background: '#1d233c' }}>
							<Form.Label style={{ background: '#1d233c' }}>Email</Form.Label>
							<Form.Control type='email' ref={emailRef} required />
						</Form.Group>
						<Form.Group id='password' style={{ background: '#1d233c' }}>
							<Form.Label style={{ background: '#1d233c' }}>Password</Form.Label>
							<Form.Control type='password' ref={passwordRef} required />
						</Form.Group>
						<Button
							disabled={loading}
							className='w-100'
							type='submit'
							style={{ marginTop: '20px' }}
						>
							LOG IN
						</Button>
					</Form>
					<div className='w-100 text-center mt-3' style={{ background: '#1d233c' }}>
						<Link style={{ background: '#1d233c' }} to='/forgot-password'>
							Forgot Password?
						</Link>
					</div>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2' style={{ background: '#1d233c' }}>
				Need an account?
				<Link style={{ background: '#1d233c' }} to='/signup'>
					Sign Up
				</Link>
			</div>
		</div>
	)
}
