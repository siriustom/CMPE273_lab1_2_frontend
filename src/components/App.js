import React from 'react';
import '../styles/App.css';
import { Header } from './Header';
import Profile from './Profile'
import { Register } from './Register'
import { Login } from './Login'
import {TOKEN_KEY} from '../constants';
import Projects from './Projects';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import {
    updateEmail,
    updateName,
    updateId,
    updateAbout,
    updateImage,
    updatePassword,
    updatePhone,
    updateSkills,
} from "../actions/action";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostProject from "./PostProject";
import BidList from "./BidList";
import {Utils} from '../utils/actionHelper';

const mapStateToProps = state => ({
    email: state.email,
    name: state.name,
    id: state.id,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        Object.assign({}, {
                updateEmail,
                updateName,
                updateId,
                updateAbout,
                updateImage,
                updatePassword,
                updatePhone,
                updateSkills,
            }
        ), dispatch)
});

class App extends React.Component {

    state = {
        isLoggedIn: !!localStorage.getItem(TOKEN_KEY),
        user: {},
    };
    handleLogin = (data) => {
        const dataObj = JSON.parse(data);
        const user = dataObj.user;
        console.log(user);
        localStorage.setItem(TOKEN_KEY, user);
        this.setUser(user);
        Utils.getBidList(user._id);
        this.setState({isLoggedIn: true});
        this.setState({user: user});
    }

    setUser = (data) => {
        this.props.actions.updateEmail(data.email);
        this.props.actions.updateName(data.name);
        this.props.actions.updateId(data._id);
        this.props.actions.updatePhone(data.phone);
        this.props.actions.updatePassword(data.password);
        this.props.actions.updateImage(data.filename);
        this.props.actions.updateAbout(data.about);
        this.props.actions.updateSkills(data.skills);
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
            window.history.pushState({}, '', '/projects');
            return <Projects />;
        }
    }
    getProfile = () => {
        if (!this.state.isLoggedIn) {
            return <Redirect to={'/login'}/>;
        } else {
            window.history.pushState({}, '', '/profile');
            return <Profile data={this.state.data}/>;
        }
    }
    getRoot = () => {
        return <Redirect to="/login"/>
    }
    getRegister = () => {
        return <Register />
    }
    getProjects = () => {
        return <Redirect to="/login"/>
    }

    getPost = () => {
        if (!this.state.isLoggedIn) {
            return <Redirect to={'/login'}/>;
        } else {
            window.history.pushState({}, '', '/postproject');
            return <PostProject />;
        }
    }

    getBidlist = () => {
        if (!this.state.isLoggedIn) {
            return <Redirect to={'/login'}/>;
        } else {
            window.history.pushState({}, '', '/bidlist');
            return <BidList/>;
        }
    }
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
                        <div className="main">
                                <Switch>
                                    <Route exact path="/" render={this.getRoot}/>
                                    <Route path="/register" render={this.getRegister}/>
                                    <Route path="/login" render={this.getLogin}/>
                                    <Route path="/projects" render={this.getProjects}/>
                                    <Route path="/profile" render={this.getProfile}/>
                                    <Route path="/postproject" render={this.getPost}/>
                                    <Route path="/bidlist" render={this.getBidlist}/>
                                </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
