import React from 'react';
import logo from '../img/logo.png';

class LogIn extends React.Component {
	
	constructor(props){
		super(props);
	};

	onSubmitLogIn = () => {
		let user = document.querySelector('#username');
		let pswd = document.querySelector('#password');
		let errMsg = document.querySelector('#errorMsg');
		const userDetails = { name: user.value, pswd:pswd.value };
		if ( user.value === '' || pswd.value === '') {
			errMsg.innerHTML = 'Username/password missing! Please enter both.';
		}
		else if (user.value === 'admin' && pswd.value === '1234') {
			this.props.loadUser(JSON.stringify(userDetails));
			this.props.onRouteChange('home');
		} else{
			errMsg.innerHTML = 'Incorrect username/password!'
		}
	 };

	render(){

		const { onRouteChange } = this.props;
		return(
			<article className="br3 ba dark-gray b--black-30 pt4 w-80 w-60-m w-50-l shadow-5 center bg-white">
				<main className="pv5 ph3 black-80">
			      <legend className="f2 fw6 ph0 mh0 center">Hello, welcome!</legend>
			      <img src={ logo } alt='Tast Manager' className="mv4"/>
			      <div className="mt2 w-100 w-80-m w-50-l center">
			        <label className="db fw6 lh-copy f4" htmlFor="username">Username</label>
			        <input 
			        className="pa2 ba bg-white hover-bg-black hover-white w-100" 
			        type="text" 
			        name="username"  
			        id="username"
			        required/>
			      </div>
			      <div className="mv2  w-100 w-80-m w-50-l center">
			        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
			        <input 
			        className="b pa2 ba bg-white hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="password"
			        required/>
			      </div>
			      <div className="mv2">
			      	<p className="red" id="errorMsg"></p>
			      </div>

			      <div className="mt4">
			        <input onClick={ this.onSubmitLogIn } 
			        className="ph5 pv2 input-reset ba b--black bg-black white grow pointer f4 dib" 
			        type="submit" value="Log in"/>
			      </div>
				</main>
			</article>
			);
	}
};

export default LogIn;