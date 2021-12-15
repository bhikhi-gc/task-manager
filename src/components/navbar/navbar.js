import React from 'react';
import './navbar.css';
import logo from '../img/logo.png';

const Navbar = ({ onRouteChange }) => {
	
	return( 
		<nav>
			<img src={logo} alt='Task Manager'/>
			<p onClick={() => onRouteChange('home')}>Home</p>
			<p onClick={() => onRouteChange('tasks')}>Tasks</p>
			<p onClick={() => onRouteChange('user')}>User</p>
		</nav>
	)
};

export default Navbar;
