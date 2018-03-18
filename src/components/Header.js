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
                    <h1 className={'header-profile'}>
                        <Link to={'/profile'}>Profile</Link>
                    </h1>
                }
                {
                    this.props.isLoggedIn &&
                        <a className="logout"
                           onClick={this.props.handleLogout}
                        >
                            <Icon type="logout" style={{color: '#1890ff'}}/>
                        </a>
                }
            </header>
        );
    }
}

