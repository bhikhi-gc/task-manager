import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import LogIn from './components/login/login';
import Home from './components/home/home';
import Tasks from './components/tasks/tasks';
import User from './components/user/user';
import bgImg from './components/img/background.jpg'
import 'tachyons';

class App extends Component{

constructor(){
  super();
  this.state = {
    route: 'login',   
    isLoggedIn: false,
    user:{
        name: '',
        pswd: ''
      }
    }

  this.bgStyle = {
          width: "100%",
          minHeight: "900px",
          backgroundImage:`url(${bgImg})`,
          boxShadow:'rgba(255, 255, 255, 0.65) 0px 0px 0px 2000px inset',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }

   this.loadUser = (data) => {
    this.setState({
      user: {
      name: data.name,
      pswd: data.pswd
      }
    })
    alert(data.name)
    }        
 }
  
  onRouteChange = (val) => {
    if(val==='home') {
      this.setState({ isLoggedIn: true });
    }
    this.setState({ route: val });
   //console.log(this.state.route);
  }

  renderSwitch = (param) => {
    switch(param) {
      case 'home':
        return <Home />; 
      case 'tasks':
        return <Tasks />;
      case 'user':
        return <User userDetails={this.state.user}/>;
      default:
        return <LogIn />;
    }
  }

  render() {

    const { route, isLoggedIn } = this.state;
     return (
      <div className="App" style={ this.bgStyle }>
      { isLoggedIn ?
        <div>
          <Navbar onRouteChange={ this.onRouteChange }/>
          {this.renderSwitch(route)}
        </div>
        :
        <LogIn onRouteChange={ this.onRouteChange } loadUser={ this.loadUser }/>
      }
      </div>
      )
  }
 }

export default App;
