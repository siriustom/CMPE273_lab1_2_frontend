import React from 'react'
import logo from '../assets/images/Gangs_logo.svg';
import {Icon} from 'antd';
import { Link, Redirect, BrowserRouter } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">FreeLancer</h1>
                {
                    this.props.isLoggedIn &&
                        <Link className={'header-widget'} to={'/profile'}>Profile</Link>
                }
                {
                    this.props.isLoggedIn &&
                        <a className="header-widget"
                           onClick={this.props.handleLogout}
                        >
                            <Icon type="logout" className={'header-logout'}/>
                        </a>
                }
            </header>
        );
    }
}

