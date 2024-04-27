import React, { useContext, useState, useEffect } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()
	const [loginText, setLoginText] = useState('LOG IN')

	const [email, setEmail] = useState('')

	function login(email, password) {
		setLoginText('LOG OUT')
		setEmail(email)
	}

	function logout() {
		setLoginText('LOG IN')
		console.log('inside logout')
	}

	const value = {
		login,
		email,
		logout,
		loginText,
		setLoginText,
	}

	return (
		<AuthContext.Provider value={value}>
			{/* {!loading && children} */}
			{children}
		</AuthContext.Provider>
	)
}
