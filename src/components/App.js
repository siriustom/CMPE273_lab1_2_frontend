import React from 'react';
import '../styles/App.css';
import { Header } from './Header';
import Profile from './Profile'
import { Register } from './Register'
import { Login } from './Login'
import {TOKEN_KEY} from '../constants';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

class App extends React.Component {

    state = {
        isLoggedIn: !!localStorage.getItem(TOKEN_KEY),
        data: {},
    };
    handleLogin = (data) => {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        localStorage.setItem(TOKEN_KEY, dataObj);
        this.setState({isLoggedIn: true});
        this.setState({data: dataObj});
    }

    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        window.history.pushState({}, '', '/login');
        this.setState({isLoggedIn: false});
    }


    getLogin = () => {
        if (!this.state.isLoggedIn) {
            return <Login handleLogin={this.handleLogin}/>;
        } else {
            window.history.pushState({}, '', '/profile');
            return <Profile data={this.state.data}/>;
        }
    }
    getProfile = () => {
        return this.state.isLoggedIn ? <Profile /> : <Redirect to={'/login'}/>;
    }
    getRoot = () => {
        return <Redirect to="/login"/>
    }
    getRegister = () => {
        return <Register />
    }


    render() {
        return (
            <div className="App">
                <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
                <div className="main">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" render={this.getRoot}/>
                            <Route path="/register" render={this.getRegister}/>
                            <Route path="/login" render={this.getLogin}/>
                            <Route path="/profile" render={this.getProfile}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
